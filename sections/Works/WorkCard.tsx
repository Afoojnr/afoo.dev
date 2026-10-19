"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

import { workKind } from "@/lib/works";
import type { WorkItem } from "@/types";

type WorkCardProps = {
  work: WorkItem;
  index: number;
  total: number;
  /** 0 while the card is in full view, 1 once the next card has covered it. */
  progress: MotionValue<number>;
  cardRef: (el: HTMLElement | null) => void;
  onOpen: () => void;
};

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * One project as a card: description and the way in on one side, a large
 * screenshot on the other (stacked, image first, on phones and tablets). As
 * the next card slides over it, it shrinks a little and dims, so the stack
 * reads as layers. The whole card opens the case study.
 * @param work - the project
 * @param progress - how far the next card has covered this one
 * @returns the project card
 */
const WorkCard = ({
  work,
  index,
  total,
  progress,
  cardRef,
  onOpen
}: WorkCardProps) => {
  const scale = useTransform(progress, [0, 1], [1, 0.955]);
  const veil = useTransform(progress, [0, 1], [0, 0.55]);

  return (
    <motion.article
      ref={cardRef}
      onClick={onOpen}
      style={{ scale, transformOrigin: "50% 0" }}
      className="group bg-surface border-line shadow-raised relative grid min-h-(--card-h) cursor-pointer grid-rows-[auto_1fr] overflow-hidden rounded-[0.875rem] border lg:h-[clamp(26rem,58svh,36rem)] lg:min-h-0 lg:grid-cols-[minmax(0,9fr)_minmax(0,11fr)] lg:grid-rows-1"
    >
      <div
        style={
          work.letterboxLgOnly
            ? ({ "--backdrop": work.letterbox } as React.CSSProperties)
            : { background: work.letterbox ?? "#000" }
        }
        className={`relative aspect-[2/1] overflow-hidden lg:order-2 lg:aspect-auto ${
          work.letterboxLgOnly ? "bg-black lg:[background:var(--backdrop)]" : ""
        }`}
      >
        <Image
          src={work.image}
          alt={`${work.title} screenshot`}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          style={
            work.letterboxLgOnly
              ? undefined
              : { objectPosition: work.focus ?? "0% 0%" }
          }
          className={`ease-out-expo transition-transform duration-700 motion-safe:group-hover:scale-[1.03] ${
            work.letterbox
              ? work.letterboxLgOnly
                ? "object-cover object-top lg:object-contain lg:object-center"
                : "object-contain"
              : "object-cover"
          }`}
        />
      </div>

      <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:order-1 lg:p-10">
        <div>
          <p className="text-caption text-ink-soft flex items-baseline justify-between gap-4 uppercase">
            <span>
              {work.company} · {workKind(work)}
            </span>
            <span className="shrink-0 whitespace-nowrap tabular-nums">
              {pad(index + 1)} / {pad(total)}
            </span>
          </p>
          <h3 className="mt-3 text-[clamp(1.875rem,1.2rem+2.4vw,2.875rem)] leading-[1.04] font-bold tracking-tight [font-variation-settings:'wdth'_92,'wght'_720]">
            {work.title}
          </h3>
        </div>

        <div>
          <p className="text-ink max-w-[30ch] text-[clamp(1.125rem,0.9rem+0.8vw,1.5rem)] leading-[1.3] tracking-tight">
            {work.shortDescription}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {work.tech.map(item => (
              <li
                key={item}
                className="border-line text-ink-soft rounded-full border px-3 py-0.5 text-[0.8125rem]"
              >
                {item}
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label={`Open the ${work.title} case study`}
            onClick={e => {
              e.stopPropagation();
              onOpen();
            }}
            className="bg-ink text-ground mt-6 inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-semibold transition-transform duration-100 active:scale-[0.97]"
          >
            Open project
            <FiArrowRight
              aria-hidden
              className="ease-out-expo size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      <motion.div
        aria-hidden
        style={{ opacity: veil }}
        className="bg-ground pointer-events-none absolute inset-0 motion-reduce:hidden"
      />
    </motion.article>
  );
};

export default WorkCard;
