"use client";

import { useTheme } from "next-themes";
import React, { useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="group btn-circle"
      type="button"
    >
      {!mounted ? (
        <div className="border-primary h-4 w-4 animate-spin rounded-full border-2 border-t-transparent" />
      ) : theme === "dark" ? (
        <BsSunFill className="btn-circle-icon" />
      ) : (
        <BsMoonFill className="btn-circle-icon" />
      )}
    </button>
  );
};

export default ThemeToggle;
