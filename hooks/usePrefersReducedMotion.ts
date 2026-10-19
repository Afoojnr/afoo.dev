"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
};

/**
 * Whether the visitor asked for reduced motion. The server can't know, so it
 * (and the first hydration pass) assume motion is fine, then the real setting
 * applies, which avoids a hydration mismatch when markup depends on it.
 * @returns true when reduced motion is preferred
 */
export const usePrefersReducedMotion = () =>
  useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );
