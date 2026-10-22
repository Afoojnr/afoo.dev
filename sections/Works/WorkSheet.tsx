"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  AnimatePresence,
  motion,
  useDragControls,
  type PanInfo
} from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FiArrowUpRight } from "react-icons/fi";

import { useWorkText } from "@/hooks/useWorkText";
import { isCaseStudy, workKind, workLinks, workTech } from "@/lib/works";
import { springs } from "@/lib/motion";
import type { WorkItem } from "@/types";
import CaseStudy from "./CaseStudy";
import WorkDetails from "./WorkDetails";

type WorkSheetProps = {
  work: WorkItem | null;
  index: number;
  total: number;
  onClose: () => void;
};

const DISMISS_DISTANCE = 140;
const DISMISS_VELOCITY = 600;

const pad = (n: number) => String(n).padStart(2, "0");

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
  const t = useTranslations("works");
  const common = useTranslations("common");
  const text = useWorkText()(work);
  const tech = workTech(work, text);
  const links = workLinks(work);

  return (
    <>
      {/* drag only from the handle so the content can still scroll */}
      <div
        onPointerDown={startDrag}
        className="bg-ground sticky top-0 z-10 flex cursor-grab touch-none items-center justify-between pt-3 pb-4 active:cursor-grabbing"
      >
        <span aria-hidden className="w-16" />
        <span aria-hidden className="bg-line h-1.5 w-10 rounded-full" />
        <Dialog.Close className="border-ink text-ink min-w-16 rounded-full border px-3 py-1 text-sm font-semibold">
          {common("close")}
        </Dialog.Close>
      </div>

      <div className="rounded-plate relative aspect-[2/1] max-h-[40svh] w-full overflow-hidden bg-black">
        <Image
          src={work.image}
          alt={t("screenshot", { title: work.title })}
          fill
          sizes="(min-width: 1120px) 1120px, 96vw"
          className="object-cover object-top"
        />
      </div>

      <p className="text-caption text-ink-soft mt-6 flex items-baseline justify-between gap-4 uppercase">
        <span>
          {text.company} · {common(`kinds.${workKind(work)}`)}
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

      {isCaseStudy(text) ? (
        <CaseStudy
          study={text}
          tech={tech}
          contributionUrl={work.contributionUrl}
        />
      ) : (
        <WorkDetails details={text} tech={tech} />
      )}

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
                  aria-label={common(`links.${link.kind}.label`)}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-[0.9375rem] font-semibold whitespace-nowrap transition-transform duration-100 active:scale-[0.97] ${
                    i === 0
                      ? "bg-ink text-ground max-md:flex-1"
                      : "border-ink text-ink border"
                  }`}
                >
                  {common(
                    i === 0
                      ? `links.${link.kind}.label`
                      : `links.${link.kind}.short`
                  )}
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
