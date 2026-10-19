"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

import { springs } from "@/lib/motion";
import { crossfadeTheme } from "@/lib/theme";

const subscribe = () => () => {};

const KNOB = 24;
const KNOB_PRESSED = 30;
const TRAVEL = 28;

/**
 * A two-position hardware slide switch for light and dark. Pressing the knob
 * stretches it like an iPhone toggle, and it rides the track on a spring, so
 * a quick double flick reverses mid-travel.
 * @returns the theme switch
 */
const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [pressed, setPressed] = useState(false);
  // false during SSR/hydration, true on the client afterwards
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
  const isDark = mounted && resolvedTheme === "dark";
  const stretch = pressed ? KNOB_PRESSED - KNOB : 0;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={() => crossfadeTheme(() => setTheme(isDark ? "light" : "dark"))}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      onPointerCancel={() => setPressed(false)}
      className="bg-track shadow-pressed text-ink-soft relative flex h-8 w-15 shrink-0 cursor-pointer items-center justify-between rounded-full px-2"
    >
      <BsSunFill aria-hidden className="size-3" />
      <BsMoonFill aria-hidden className="size-3" />
      <motion.span
        aria-hidden
        initial={false}
        animate={{
          // grows toward the open side: right when off, left when on
          x: isDark ? TRAVEL - stretch : 0,
          width: KNOB + stretch
        }}
        transition={springs.ui}
        className="bg-knob shadow-raised absolute top-1 left-1 h-6 rounded-full"
      />
    </button>
  );
};

export default ThemeSwitch;
