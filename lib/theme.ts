import { flushSync } from "react-dom";

/**
 * Runs a theme change as one crossfade of the whole page, so the navbar,
 * background and text all change in perfect sync instead of each element
 * fading on its own clock. Browsers without View Transitions, and visitors
 * who prefer reduced motion, get a clean instant switch.
 * @param apply - the state change that flips the theme
 */
export const crossfadeTheme = (apply: () => void) => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion || typeof document.startViewTransition !== "function") {
    apply();
    return;
  }

  // flushSync makes the class change land inside the transition's callback
  document.startViewTransition(() => flushSync(apply));
};
