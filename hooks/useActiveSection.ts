"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section sits in the middle band of the viewport, so the nav
 * can show the visitor where "now" is on the page.
 * @param ids - section element ids in page order
 * @returns the id of the section currently in view
 */
export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
};
