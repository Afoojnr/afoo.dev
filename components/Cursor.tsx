"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

import { useFinePointer } from "@/hooks/useFinePointer";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { springs } from "@/lib/motion";

type Mode = "idle" | "link" | "hidden";

const INTERACTIVE =
  "a[href], button, [role='button'], [role='switch'], summary, label, input, select, textarea";
const follow = { stiffness: 260, damping: 28, mass: 0.5 };

/**
 * The site's cursor: a small orange dot locked to the pointer inside a thin
 * ring that trails it on a spring. The ring grows over links and buttons,
 * shrinks while pressed, and steps aside where an element asks for it with
 * data-cursor="none". It only exists for mouse and trackpad users, and the
 * system cursor is hidden only while it is running.
 * @returns the cursor, or nothing on touch devices
 */
const Cursor = () => {
  const finePointer = useFinePointer();
  const reduceMotion = usePrefersReducedMotion();
  const [mode, setMode] = useState<Mode>("idle");
  const [shown, setShown] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, follow);
  const ringY = useSpring(y, follow);

  useEffect(() => {
    if (!finePointer) return;
    const root = document.documentElement;
    root.classList.add("custom-cursor");

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setShown(true);
    };
    const over = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (target?.closest("[data-cursor='none']")) setMode("hidden");
      else setMode(target?.closest(INTERACTIVE) ? "link" : "idle");
    };
    const leave = () => setShown(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    root.addEventListener("pointerleave", leave);
    return () => {
      root.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      root.removeEventListener("pointerleave", leave);
    };
  }, [finePointer, x, y]);

  if (!finePointer) return null;

  const visible = shown && mode !== "hidden";
  const state = reduceMotion ? { duration: 0 } : springs.ui;

  return (
    <>
      {/* A white ring with a thin dark edge reads on light, dark and dimmed backgrounds */}
      <motion.div
        aria-hidden
        data-cursor-part="ring"
        style={{ x: reduceMotion ? x : ringX, y: reduceMotion ? y : ringY }}
        className="pointer-events-none fixed top-0 left-0 z-[100] -mt-5 -ml-5 size-10"
      >
        <motion.div
          animate={{
            scale: pressed ? 0.8 : mode === "link" ? 1.6 : 1,
            opacity: visible ? 1 : 0
          }}
          transition={state}
          className={`size-full rounded-full border-[1.5px] border-white shadow-[0_0_0_1px_rgb(0_0_0/0.4)] ${
            mode === "link" ? "bg-white/20" : ""
          }`}
        />
      </motion.div>

      <motion.div
        aria-hidden
        data-cursor-part="dot"
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-[100] -mt-1 -ml-1 size-2"
      >
        <motion.div
          animate={{
            scale: pressed ? 0.7 : mode === "link" ? 0.6 : 1,
            opacity: visible ? 1 : 0
          }}
          transition={state}
          className="bg-signal size-full rounded-full"
        />
      </motion.div>
    </>
  );
};

export default Cursor;
