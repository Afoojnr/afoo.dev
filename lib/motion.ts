import type { Transition, Variants } from "motion/react";

/**
 * Spring presets in Apple's duration/bounce terms. Springs start from the
 * element's current value, so every motion stays interruptible.
 */
export const springs = {
  /** Instant feedback on pointer-down. */
  press: { type: "spring", duration: 0.25, bounce: 0 },
  /** Small state changes: hover, toggles, nav indicator. */
  ui: { type: "spring", duration: 0.4, bounce: 0 },
  /** Releases and reveals: settles with a hint of life. */
  settle: { type: "spring", duration: 0.7, bounce: 0.12 },
  /** Shared-element and sheet transitions. */
  layout: { type: "spring", duration: 0.55, bounce: 0.08 }
} satisfies Record<string, Transition>;

/** Content rising into place as it enters the viewport. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  shown: { opacity: 1, y: 0, filter: "blur(0px)", transition: springs.settle }
};

/** Parent that staggers its revealing children. */
export const stagger = (gap = 0.08): Variants => ({
  hidden: {},
  shown: { transition: { staggerChildren: gap } }
});
