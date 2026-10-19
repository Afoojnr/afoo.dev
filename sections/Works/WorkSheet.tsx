"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  AnimatePresence,
  motion,
  useDragControls,
  type PanInfo
} from "motion/react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

import { parseDescription, workKind, workLinks } from "@/lib/works";
import { springs } from "@/lib/motion";
import type { WorkItem } from "@/types";

type WorkSheetProps = {
  work: WorkItem | null;
  index: number;
  total: number;
  onClose: () => void;
};

const DISMISS_DISTANCE = 140;
const DISMISS_VELOCITY = 600;

const pad = (n: number) => String(n).padStart(2, "0");

/** "B2B: Manage properties…" becomes a bold label and the rest. */
const Line = ({ text }: { text: string }) => {
  const match = text.match(/^([^:]{2,24}):\s+(.*)$/);
  return match ? (
    <p>
      <span className="text-ink font-semibold">{match[1]}</span> {match[2]}
    </p>
  ) : (
    <p>{text}</p>
  );
};

/**
 * The case study: a sheet that rises from the bottom on a spring. Drag the
 * handle down, press Escape or tap the backdrop to close; the content itself
 * scrolls normally. Everything shown comes from the project's own data.
 * @param work - the open project, or null when closed
 * @returns the sheet
 */
const WorkSheet = ({ work, index, total, onClose }: WorkSheetProps) => {
  const controls = useDragControls();

  const handleDragEnd = (_: PointerEvent, info: PanInfo) => {
    if (
      info.offset.y > DISMISS_DISTANCE ||
      info.velocity.y > DISMISS_VELOCITY
    ) {
      onClose();
    }
  };

  return (
    <Dialog.Root
      open={work !== null}
      onOpenChange={open => {
        if (!open) onClose();
      }}
    >
      <AnimatePresence>
        {work && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={springs.ui}
                className="fixed inset-0 z-60 bg-black/45"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={springs.layout}
                drag="y"
                dragControls={controls}
                dragListener={false}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0.04, bottom: 0.7 }}
                onDragEnd={handleDragEnd}
                className="bg-ground fixed inset-x-0 bottom-0 z-70 mx-auto max-h-[92svh] w-full max-w-[70rem] overflow-y-auto overscroll-contain rounded-t-[1.75rem] px-5 shadow-[0_-8px_48px_rgb(0_0_0/0.25)] focus:outline-none sm:px-10"
              >
                <SheetBody
                  work={work}
                  index={index}
                  total={total}
                  startDrag={e => controls.start(e)}
                />
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

type SheetBodyProps = {
  work: WorkItem;
  index: number;
  total: number;
  startDrag: (e: React.PointerEvent) => void;
};

const SheetBody = ({ work, index, total, startDrag }: SheetBodyProps) => {
  const { intro, blocks } = parseDescription(work.fullDescription);
  const links = workLinks(work);

  return (
    <>
      {/* The handle is the only drag target, so the content can scroll */}
      <div
        onPointerDown={startDrag}
        className="bg-ground sticky top-0 z-10 flex cursor-grab touch-none items-center justify-between pt-3 pb-4 active:cursor-grabbing"
      >
        <span aria-hidden className="w-16" />
        <span aria-hidden className="bg-line h-1.5 w-10 rounded-full" />
        <Dialog.Close className="border-ink text-ink w-16 rounded-full border px-3 py-1 text-sm font-semibold">
          Close
        </Dialog.Close>
      </div>

      <div className="rounded-plate relative aspect-[2/1] max-h-[40svh] w-full overflow-hidden bg-black">
        <Image
          src={work.image}
          alt={`${work.title} screenshot`}
          fill
          sizes="(min-width: 1120px) 1120px, 96vw"
          className="object-cover object-top"
        />
      </div>

      <p className="text-caption text-ink-soft mt-6 flex items-baseline justify-between gap-4 uppercase">
        <span>
          {work.company} · {workKind(work)}
        </span>
        <span className="shrink-0 whitespace-nowrap tabular-nums">
          {pad(index + 1)} / {pad(total)}
        </span>
      </p>

      <Dialog.Title asChild>
        <h2 className="mt-2 text-[clamp(2.25rem,1.4rem+3vw,3.75rem)] leading-[1.02] font-bold tracking-tight [font-variation-settings:'wdth'_92,'wght'_720]">
          {work.title}
        </h2>
      </Dialog.Title>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <Dialog.Description asChild>
            <p className="text-ink-soft max-w-[50ch]">{intro}</p>
          </Dialog.Description>

          {blocks
            .filter(block => !block.bullets.length)
            .map((block, i) => (
              <div
                key={i}
                className="text-ink-soft mt-4 max-w-[50ch] space-y-2"
              >
                {block.lines.map(line => (
                  <Line key={line} text={line} />
                ))}
              </div>
            ))}

          <ul className="mt-6 flex flex-wrap gap-2">
            {work.tech.map(item => (
              <li
                key={item}
                className="border-line text-ink-soft rounded-full border px-3 py-0.5 text-[0.8125rem]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          {blocks
            .filter(block => block.bullets.length)
            .map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h3 className="text-caption text-ink-soft mb-3 font-semibold uppercase">
                    {block.heading}
                  </h3>
                )}
                <ul className="text-ink-soft space-y-1.5">
                  {block.bullets.map(point => (
                    <li
                      key={point}
                      className="before:bg-ink-soft relative pl-5 before:absolute before:top-[0.65em] before:left-0 before:size-[5px] before:rounded-full before:content-['']"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>

      {links.length > 0 && (
        <div className="bg-ground border-line sticky bottom-0 z-10 -mx-5 mt-10 border-t px-5 pt-3 pb-[max(0.875rem,env(safe-area-inset-bottom))] sm:-mx-10 sm:px-10">
          <div className="flex items-center justify-between gap-4">
            <p
              aria-hidden
              className="text-ink hidden truncate font-semibold md:block"
            >
              {work.title}
            </p>
            <div className="flex flex-1 flex-wrap items-center gap-2 md:flex-none md:justify-end">
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[0.9375rem] font-semibold whitespace-nowrap transition-transform duration-100 active:scale-[0.97] ${
                    i === 0
                      ? "bg-ink text-ground max-md:flex-1"
                      : "border-ink text-ink border"
                  }`}
                >
                  {i === 0 ? link.label : link.short}
                  <FiArrowUpRight aria-hidden className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSheet;
