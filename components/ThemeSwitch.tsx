"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useState, useSyncExternalStore } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

import { springs } from "@/lib/motion";
import { crossfadeTheme } from "@/lib/theme";

const subscribe = () => () => {};

const KNOB = 24;
const KNOB_PRESSED = 30;
const TRAVEL = 28;

const ThemeSwitch = () => {
  const t = useTranslations("common");
  const { resolvedTheme, setTheme } = useTheme();
  const [pressed, setPressed] = useState(false);
  // false on the server so the icon doesn't mismatch on hydration
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
      aria-label={t("darkMode")}
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
