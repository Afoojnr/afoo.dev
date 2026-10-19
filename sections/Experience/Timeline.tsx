"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import PowerDot from "@/components/ui/PowerDot";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { experiences } from "@/constants";
import { springs } from "@/lib/motion";
import DurationChip from "./DurationChip";

// Centre of an entry's dot, measured from the entry's top
const DOT_CENTRE = 14;

/** How many stops the line has reached at a given progress (0 to 1). */
const reachedAt = (stops: number[], progress: number) =>
  stops.filter(stop => progress >= stop).length;

/**
 * The career timeline. A dark line grows down a grey rail as you scroll, on a
 * spring, with a glowing tip. Each dot fills as the line reaches it, and the
 * role the line is at takes the focus while the others sit softer. Only
 * transforms and opacity animate, and nothing hijacks the scroll. With
 * reduced motion the line is fully drawn and every role is fully visible.
 * @returns the timeline
 */
const Timeline = () => {
  const reduceMotion = usePrefersReducedMotion();
  const rail = useRef<HTMLDivElement>(null);
  const entries = useRef<(HTMLElement | null)[]>([]);
  const stops = useRef<number[]>([]);
  const [reached, setReached] = useState(0);

  const { scrollYProgress } = useScroll({
    target: rail,
    offset: ["start 75%", "end 55%"]
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.5
  });
  const tipTop = useTransform(progress, v => `${v * 100}%`);

  useMotionValueEvent(progress, "change", v =>
    setReached(reachedAt(stops.current, v))
  );

  // Re-measure where each dot sits whenever the rail changes size
  useEffect(() => {
    const node = rail.current;
    if (!node) return;
    const observer = new ResizeObserver(() => {
      const height = node.offsetHeight;
      stops.current = entries.current.map(el =>
        el ? (el.offsetTop + DOT_CENTRE) / height : 1
      );
      setReached(reachedAt(stops.current, progress.get()));
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [progress]);

  return (
    <div ref={rail} className="relative pl-10 md:pl-14">
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-[7px] w-0.5 md:left-[7px]"
      >
        <div className="bg-line absolute inset-0" />
        <motion.div
          className="bg-ink absolute inset-0 origin-top"
          style={{ scaleY: reduceMotion ? 1 : progress }}
        />
        {!reduceMotion && (
          <motion.span
            style={{ top: tipTop }}
            className="bg-ink absolute left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_0_4px_color-mix(in_srgb,var(--ink)_14%,transparent)]"
          />
        )}
      </div>

      {experiences.map((role, i) => {
        const isReached = reduceMotion || reached > i;
        const isActive = !reduceMotion && reached === i + 1;
        const isCurrent = role.date.includes("Present");

        return (
          <motion.article
            key={role.company_name}
            ref={el => {
              entries.current[i] = el;
            }}
            initial={false}
            animate={{
              opacity: reduceMotion ? 1 : isActive ? 1 : isReached ? 0.8 : 0.36,
              y: isReached ? 0 : 14
            }}
            whileHover={reduceMotion ? undefined : { opacity: 1 }}
            transition={springs.settle}
            className="group relative pb-14 last:pb-0"
          >
            <motion.span
              aria-hidden
              animate={{ scale: isReached ? 1 : 0.8 }}
              transition={springs.ui}
              className={`absolute top-1.5 -left-10 size-4 rounded-full border-2 transition-colors duration-500 group-hover:scale-125 md:-left-14 ${
                isReached
                  ? isCurrent
                    ? "bg-live border-live motion-safe:animate-pulse-ring"
                    : "bg-ink border-ink"
                  : "bg-ground border-line"
              }`}
            />

            <p className="text-caption text-ink-soft flex items-center gap-2 uppercase">
              {isCurrent && <PowerDot />}
              {role.date}
              <DurationChip range={role.date} active={isActive} />
            </p>
            <h3 className="mt-1.5 max-w-[24ch] text-[clamp(1.5rem,1rem+1.8vw,2.375rem)] leading-[1.1] font-bold tracking-tight text-balance">
              {role.title}
            </h3>
            <div className="text-ink-soft mt-2 flex items-center gap-2.5">
              <Image
                src={role.icon}
                alt=""
                width={24}
                height={24}
                className="size-6 rounded-sm object-contain"
              />
              <p className="font-medium">{role.company_name}</p>
            </div>

            <ul className="text-ink-soft mt-4 max-w-[64ch] space-y-1.5 text-base md:text-(length:--text-body)">
              {role.points.map(point => (
                <li
                  key={point}
                  className="before:bg-ink-soft relative pl-5 before:absolute before:top-[0.65em] before:left-0 before:size-[5px] before:rounded-full before:content-['']"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </div>
  );
};

export default Timeline;
