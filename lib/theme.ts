import { flushSync } from "react-dom";

export const crossfadeTheme = (apply: () => void) => {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion || typeof document.startViewTransition !== "function") {
    apply();
    return;
  }

  // flushSync so the class change happens inside the transition callback
  document.startViewTransition(() => flushSync(apply));
};
