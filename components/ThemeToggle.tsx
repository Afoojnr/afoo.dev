"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const subscribe = () => () => {};

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  // false during SSR/hydration, true on the client afterwards
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="group btn-circle"
      type="button"
    >
      {!mounted ? (
        <div className="border-primary h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
      ) : resolvedTheme === "dark" ? (
        <BsSunFill className="btn-circle-icon" />
      ) : (
        <BsMoonFill className="btn-circle-icon" />
      )}
    </button>
  );
};

export default ThemeToggle;
