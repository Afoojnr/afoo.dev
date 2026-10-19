import type { Transition, Variants } from "motion/react";

export const springs = {
  press: { type: "spring", duration: 0.25, bounce: 0 },
  ui: { type: "spring", duration: 0.4, bounce: 0 },
  settle: { type: "spring", duration: 0.7, bounce: 0.12 },
  layout: { type: "spring", duration: 0.55, bounce: 0.08 }
} satisfies Record<string, Transition>;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: springs.settle }
};

export const stagger = (gap = 0.08): Variants => ({
  hidden: {},
  shown: { transition: { staggerChildren: gap } }
});
