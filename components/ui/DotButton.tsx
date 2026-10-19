"use client";

import Link from "next/link";
import { motion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

import { springs } from "@/lib/motion";

type DotButtonProps = {
  label: string;
  href?: string;
  type?: "button" | "submit";
  pending?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const MotionLink = motion.create(Link);

const dotVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.06, transition: springs.ui },
  press: { scale: 0.9, transition: springs.press }
};

// The dot leans toward the cursor from well outside the button, like a drop
// of liquid reaching for it, and stretches along the pull
const REACH = 190;
const MAX_PULL = 16;
const STRETCH = 0.16;
const magnet = { stiffness: 120, damping: 13, mass: 0.9 };

const smoothstep = (t: number) => t * t * (3 - 2 * t);

/**
 * The page's one primary action: a round signal-orange key that leans toward
 * the cursor, presses in on pointer-down and springs back on release, like a
 * hardware button. The dot reaches for the cursor from a distance and
 * stretches along the pull.
 * @param label - visible action name, also the accessible name
 * @param href - renders a link when set, otherwise a button
 * @param pending - shows the working state and blocks presses
 * @returns the primary action control
 */
const DotButton = ({
  label,
  href,
  type = "button",
  pending = false,
  disabled = false,
  onClick
}: DotButtonProps) => {
  const inactive = pending || disabled;
  const pullX = useSpring(0, magnet);
  const pullY = useSpring(0, magnet);
  const labelX = useTransform(pullX, v => v * 0.3);
  const labelY = useTransform(pullY, v => v * 0.3);
  const stretchX = useTransform(
    pullX,
    v => 1 + (Math.abs(v) / MAX_PULL) * STRETCH
  );
  const stretchY = useTransform(
    pullY,
    v => 1 + (Math.abs(v) / MAX_PULL) * STRETCH
  );
  const dot = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inactive || !window.matchMedia("(pointer: fine)").matches) return;

    const release = () => {
      pullX.set(0);
      pullY.set(0);
    };
    const onMove = (e: PointerEvent) => {
      const node = dot.current;
      if (!node || e.pointerType !== "mouse") return;
      const rect = node.getBoundingClientRect();
      // The dot's own pull moves its box, so measure from where it rests
      const dx = e.clientX - (rect.left + rect.width / 2 - pullX.get());
      const dy = e.clientY - (rect.top + rect.height / 2 - pullY.get());
      const distance = Math.hypot(dx, dy);
      if (distance > REACH) {
        release();
        return;
      }
      // Closer means a stronger pull, easing in so it never snaps on
      const weight = smoothstep(1 - distance / REACH);
      const scale =
        distance > 0 ? Math.min(distance * 0.3, MAX_PULL) / distance : 0;
      pullX.set(dx * scale * weight);
      pullY.set(dy * scale * weight);
    };

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("pointerleave", release);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", release);
    };
  }, [inactive, pullX, pullY]);

  const shared = {
    className:
      "group -m-4 inline-flex items-center gap-4 p-4 text-lg font-semibold text-ink select-none disabled:cursor-not-allowed",
    initial: "rest",
    animate: "rest",
    whileHover: inactive ? undefined : "hover",
    whileTap: inactive ? undefined : "press"
  } as const;

  const content = (
    <>
      <motion.span
        ref={dot}
        aria-hidden
        variants={dotVariants}
        style={{ x: pullX, y: pullY, scaleX: stretchX, scaleY: stretchY }}
        className={`shadow-raised group-active:shadow-pressed block size-14 rounded-full transition-colors ${
          disabled ? "bg-line" : "bg-signal"
        } ${pending ? "animate-pulse" : ""}`}
      />
      <motion.span style={{ x: labelX, y: labelY }}>{label}</motion.span>
    </>
  );

  if (href) {
    return (
      <MotionLink href={href} {...shared}>
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={inactive}
      aria-busy={pending}
      {...shared}
    >
      {content}
    </motion.button>
  );
};

export default DotButton;
