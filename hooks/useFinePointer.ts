"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(hover: hover) and (pointer: fine)";

const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
};

/**
 * Whether the main input is a precise, hovering pointer such as a mouse or
 * trackpad. The server (and first hydration pass) say no, so touch devices
 * never render pointer-only UI.
 * @returns true on mouse and trackpad devices
 */
export const useFinePointer = () =>
  useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false
  );
