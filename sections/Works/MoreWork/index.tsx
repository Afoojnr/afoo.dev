"use client";

import { motion, useMotionValue, type Variants } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import Reveal from "@/components/ui/Reveal";
import { springs, stagger } from "@/lib/motion";
import { workKind } from "@/lib/works";
import type { WorkItem } from "@/types";
import Preview from "./Preview";

type MoreWorkProps = {
  works: WorkItem[];
  onOpen: (index: number) => void;
};

// the preview sits this far right of the cursor and never past the list edge
const PREVIEW_GAP = 28;
const PREVIEW_WIDTH = 288;

const rowContent: Variants = {
  hidden: { opacity: 0, y: 18 },
  shown: { opacity: 1, y: 0, transition: springs.settle }
};

const rule: Variants = {
  hidden: { scaleX: 0 },
  shown: { scaleX: 1, transition: { ...springs.settle, duration: 0.9 } }
};

const MoreWork = ({ works, onOpen }: MoreWorkProps) => {
  const list = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const track = (e: React.PointerEvent) => {
    const box = list.current?.getBoundingClientRect();
    if (!box || e.pointerType !== "mouse") return;
    x.set(
      Math.min(e.clientX - box.left + PREVIEW_GAP, box.width - PREVIEW_WIDTH)
    );
    y.set(e.clientY - box.top);
  };

  return (
    <div>
      <Reveal>
        <div className="border-ink flex items-baseline justify-between border-t-2 pt-4">
          <h3 className="text-lead font-semibold">More work</h3>
          <p className="text-caption text-ink-soft uppercase">Archive</p>
        </div>
      </Reveal>

      <div
        ref={list}
        onPointerMove={track}
        onPointerLeave={() => setActive(null)}
        className="relative mt-6"
      >
        <motion.ul
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.25 }}
        >
          {works.map((work, i) => (
            <li key={work.id} className="relative">
              <motion.button
                type="button"
                onClick={() => onOpen(i)}
                onPointerEnter={e => e.pointerType === "mouse" && setActive(i)}
                onFocus={() => setActive(null)}
                whileTap={{ scale: 0.985 }}
                transition={springs.press}
                aria-label={`Open ${work.title}`}
                className={`group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-5 gap-y-1 py-5 text-left transition-opacity duration-300 sm:grid-cols-[7rem_minmax(0,1fr)_auto] md:grid-cols-[7rem_minmax(0,0.8fr)_minmax(0,1.2fr)_auto] md:gap-x-8 pointer-fine:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)_auto] ${
                  active !== null && active !== i ? "opacity-45" : ""
                }`}
              >
                <motion.span
                  variants={rowContent}
                  aria-hidden
                  style={{ background: work.letterbox ?? "#000" }}
                  className={`rounded-plate relative hidden aspect-4/3 overflow-hidden sm:row-span-2 sm:block md:row-span-1 pointer-fine:hidden`}
                >
                  <Image
                    src={work.image}
                    alt=""
                    fill
                    sizes="7rem"
                    className="object-cover object-top"
                  />
                </motion.span>

                <motion.span variants={rowContent}>
                  <span className="ease-out-expo block text-[clamp(1.25rem,1rem+0.8vw,1.625rem)] leading-[1.15] font-bold tracking-tight transition-transform duration-500 [font-variation-settings:'wdth'_92,'wght'_720] group-hover:translate-x-2">
                    {work.title}
                  </span>
                  <span className="text-caption text-ink-soft mt-1 block uppercase">
                    {work.company} · {workKind(work)}
                  </span>
                </motion.span>

                <motion.span
                  variants={rowContent}
                  className={`text-ink-soft col-start-1 max-w-[52ch] sm:col-start-2 md:col-start-auto pointer-fine:col-start-auto`}
                >
                  {work.shortDescription}
                </motion.span>

                <motion.span
                  variants={rowContent}
                  aria-hidden
                  className={`border-ink text-ink group-hover:bg-ink group-hover:text-ground col-start-2 row-span-2 row-start-1 flex size-10 items-center justify-center rounded-full border transition-colors duration-300 sm:col-start-3 md:col-start-auto md:row-span-1 pointer-fine:col-start-auto pointer-fine:row-span-1`}
                >
                  <FiArrowRight className="ease-out-expo size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </motion.span>
              </motion.button>

              <motion.span
                aria-hidden
                variants={rule}
                className="bg-line absolute inset-x-0 bottom-0 h-px origin-left"
              />
            </li>
          ))}
        </motion.ul>

        <Preview works={works} active={active} x={x} y={y} />
      </div>
    </div>
  );
};

export default MoreWork;
