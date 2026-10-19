"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

import { useFinePointer } from "@/hooks/useFinePointer";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const follow = { stiffness: 110, damping: 22, mass: 0.9 };
const SIZE = 900;

/**
 * A large, soft glow that follows the mouse behind the page: a lift of light
 * on the background, never over text, photos or cards. It is one fixed layer
 * moved with a transform, so the browser never repaints a full-screen
 * gradient. Mouse and trackpad only; the tone comes from --spot in the theme.
 * @returns the glow, or nothing on touch devices
 */
const Spotlight = () => {
  const finePointer = useFinePointer();
  const reduceMotion = usePrefersReducedMotion();
  const [shown, setShown] = useState(false);
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const glideX = useSpring(x, follow);
  const glideY = useSpring(y, follow);

  useEffect(() => {
    if (!finePointer) return;
    const root = document.documentElement;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setShown(true);
    };
    const leave = () => setShown(false);

    window.addEventListener("pointermove", move);
    root.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
    };
  }, [finePointer, x, y]);

  if (!finePointer) return null;

  return (
    <motion.div
      aria-hidden
      data-spotlight
      style={{ x: reduceMotion ? x : glideX, y: reduceMotion ? y : glideY }}
      animate={{ opacity: shown ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-none fixed top-0 left-0 -z-10 rounded-full"
    >
      <div
        style={{
          width: SIZE,
          height: SIZE,
          marginLeft: -SIZE / 2,
          marginTop: -SIZE / 2
        }}
        className="rounded-full bg-[radial-gradient(circle,var(--spot)_0%,transparent_62%)]"
      />
    </motion.div>
  );
};

export default Spotlight;
