"use client";

import {
  motionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import { works } from "@/constants";
import WorkCard from "./WorkCard";
import WorkSheet from "./WorkSheet";

const clamp = (n: number) => Math.min(1, Math.max(0, n));

const WorkStack = () => {
  const reduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<number | null>(null);
  const wraps = useRef<(HTMLDivElement | null)[]>([]);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const stack = useRef<HTMLDivElement>(null);
  const [progress] = useState(() => works.map(() => motionValue(0)));
  const { scrollY } = useScroll();

  const update = useCallback(() => {
    const stick = parseFloat(getComputedStyle(wraps.current[0]!).top) || 0;
    works.forEach((_, i) => {
      const next = wraps.current[i + 1];
      const card = cards.current[i];
      if (!next || !card) return;
      const gap = next.getBoundingClientRect().top - stick;
      progress[i].set(clamp(1 - gap / card.offsetHeight));
    });
  }, [progress]);

  // phones: match the tallest card so taller ones don't peek out underneath
  const equalise = useCallback(() => {
    const node = stack.current;
    if (!node) return;
    node.style.setProperty("--card-h", "0px");
    const tallest = Math.max(...cards.current.map(c => c?.offsetHeight ?? 0));
    node.style.setProperty("--card-h", `${tallest}px`);
  }, []);

  useEffect(() => {
    equalise();
    update();
    const refresh = () => {
      equalise();
      update();
    };
    window.addEventListener("resize", refresh);
    document.fonts.ready.then(refresh);
    return () => window.removeEventListener("resize", refresh);
  }, [equalise, update]);

  useMotionValueEvent(scrollY, "change", () => {
    if (!reduceMotion) update();
  });

  return (
    <>
      <div
        ref={stack}
        className="relative [--stick:4.5rem] md:[--stick:5.25rem]"
      >
        {works.map((work, i) => (
          <div
            key={work.id}
            ref={el => {
              wraps.current[i] = el;
            }}
            className="sticky top-(--stick) mb-[10svh] last:mb-0 motion-reduce:static"
          >
            <WorkCard
              work={work}
              index={i}
              total={works.length}
              progress={progress[i]}
              cardRef={el => {
                cards.current[i] = el;
              }}
              onOpen={() => setSelected(i)}
            />
          </div>
        ))}
        {/* keeps the last card pinned, otherwise it scrolls off and reveals the one below */}
        <div aria-hidden className="h-[30svh] motion-reduce:hidden" />
      </div>

      <WorkSheet
        work={selected === null ? null : works[selected]}
        index={selected ?? 0}
        total={works.length}
        onClose={() => setSelected(null)}
      />
    </>
  );
};

export default WorkStack;
