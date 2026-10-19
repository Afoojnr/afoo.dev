"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  type MotionValue
} from "motion/react";
import { useEffect, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const IDEA = "ideas";
// Each letter of the rough idea leans and drifts its own way
const TILT = [-5, 4, -3, 5, -4];
const DRIFT = [2, -3, 2, -2, 3];

const settle = { type: "spring", duration: 0.8, bounce: 0.22 } as const;

type LetterProps = {
  char: string;
  index: number;
  progress: MotionValue<number>;
};

/** One letter of "ideas": rough and light, then upright and solid. */
const Letter = ({ char, index, progress }: LetterProps) => {
  const rotate = useTransform(progress, [0, 1], [TILT[index] ?? 0, 0]);
  const y = useTransform(progress, [0, 1], [DRIFT[index] ?? 0, 0]);
  const weight = useTransform(progress, [0, 1], [260, 600]);
  const fontVariationSettings = useTransform(
    weight,
    w => `"wdth" 100, "wght" ${Math.round(w)}`
  );

  return (
    <motion.span
      className="inline-block"
      style={{ rotate, y, fontVariationSettings }}
    >
      {char}
    </motion.span>
  );
};

/**
 * "I turn ideas into products." made literal. At rest the word "ideas" is
 * rough: light, tilted, a spark of orange above it. Hover, focus or tap and
 * it straightens and thickens into the solid shape of the other word while
 * the spark lands as the orange full stop: the idea, shipped. It plays once
 * on its own so touch visitors see it too. Reduced motion shows the finished
 * sentence.
 * @returns the tagline
 */
const IdeaToProduct = () => {
  const reduceMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(false);
  const [touched, setTouched] = useState(false);
  const progress = useMotionValue(0);
  const on = reduceMotion || active;

  const sparkY = useTransform(progress, [0, 1], [0, -14]);
  const sparkOpacity = useTransform(progress, [0, 0.6], [1, 0]);
  const stopScale = useTransform(progress, [0.4, 1], [0, 1]);
  const dash = useTransform(progress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const controls = animate(progress, on ? 1 : 0, settle);
    return () => controls.stop();
  }, [on, progress]);

  // One demonstration after the hero settles, unless the visitor got there first
  useEffect(() => {
    if (reduceMotion || touched) return;
    const open = window.setTimeout(() => setActive(true), 1900);
    const close = window.setTimeout(() => setActive(false), 3900);
    return () => {
      window.clearTimeout(open);
      window.clearTimeout(close);
    };
  }, [reduceMotion, touched]);

  const engage = (value: boolean) => {
    setTouched(true);
    setActive(value);
  };

  return (
    <p
      tabIndex={0}
      onPointerEnter={e => e.pointerType === "mouse" && engage(true)}
      onPointerLeave={e => e.pointerType === "mouse" && engage(false)}
      onClick={() => engage(!active)}
      onFocus={() => engage(true)}
      onBlur={() => engage(false)}
      className="text-lead text-ink cursor-default font-semibold text-balance"
    >
      I turn{" "}
      <span className="relative inline-block">
        <span className="sr-only">{IDEA}</span>
        <span aria-hidden className="relative inline-block">
          {IDEA.split("").map((char, i) => (
            <Letter key={i} char={char} index={i} progress={progress} />
          ))}
          <motion.span
            className="absolute inset-x-0 -bottom-0.5 h-0 origin-left border-b-2 border-dashed border-current opacity-40"
            style={{ scaleX: dash, opacity: dash }}
          />
        </span>
        <motion.span
          aria-hidden
          className="bg-signal absolute -top-[0.12em] left-[0.06em] block size-[0.2em] rounded-full"
          style={{ y: sparkY, opacity: sparkOpacity }}
        />
      </span>{" "}
      into products
      <motion.span
        aria-hidden
        className="bg-signal ml-[0.04em] inline-block size-[0.2em] rounded-full"
        style={{ scale: stopScale }}
      />
      <span className="sr-only">.</span>
    </p>
  );
};

export default IdeaToProduct;
