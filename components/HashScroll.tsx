"use client";

import { useEffect } from "react";

// breathing room between the screen top (or navbar) and a section's top rule
const GAP = 24;

// Radix locks scroll while a sheet is open; wait for it to let go
const whenUnlocked = (run: () => void, tries = 40) => {
  if (!document.body.hasAttribute("data-scroll-locked") || tries === 0) {
    run();
    return;
  }
  requestAnimationFrame(() => whenUnlocked(run, tries - 1));
};

// Scrolls in-page links to the section's heading rule instead of its padded
// top edge. The navbar hides on the way down and shows on the way up, so the
// offset depends on direction.
const HashScroll = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      const id = link?.getAttribute("href")?.slice(1);
      const section = id ? document.getElementById(id) : null;
      if (!link || !section) return;

      e.preventDefault();
      whenUnlocked(() => {
        const top = section.getBoundingClientRect().top + window.scrollY;
        const rule = top + parseFloat(getComputedStyle(section).paddingTop);
        const goingDown = rule > window.scrollY;
        const navbar = document.querySelector("header")?.offsetHeight ?? 0;
        const target =
          id === "home" ? 0 : rule - GAP - (goingDown ? 0 : navbar);
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({ top: target, behavior: reduce ? "auto" : "smooth" });
        history.pushState(null, "", `#${id}`);
        if (!section.hasAttribute("tabindex")) section.tabIndex = -1;
        section.focus({ preventScroll: true });
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
};

export default HashScroll;
