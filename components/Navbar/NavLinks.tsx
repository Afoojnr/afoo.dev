"use client";

import { motion } from "motion/react";
import { useState } from "react";

import PowerDot from "@/components/ui/PowerDot";
import { springs } from "@/lib/motion";

type NavLinksProps = {
  items: string[];
  active: string;
};

const NavLinks = ({ items, active }: NavLinksProps) => {
  const [previewed, setPreviewed] = useState<string | null>(null);
  const marked = previewed ?? active;

  return (
    <ul
      className="hidden items-center gap-1 md:flex"
      onPointerLeave={() => setPreviewed(null)}
      onBlur={() => setPreviewed(null)}
    >
      {items.map(item => (
        <li key={item}>
          <a
            href={`#${item}`}
            aria-current={item === active ? "location" : undefined}
            onPointerEnter={e => {
              if (e.pointerType === "mouse") setPreviewed(item);
            }}
            onFocus={() => setPreviewed(item)}
            className={`relative flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium capitalize transition-colors ${
              item === marked ? "text-ink" : "text-ink-soft"
            }`}
          >
            <span className="flex size-2 items-center justify-center">
              {item === marked && (
                <motion.span layoutId="nav-power" transition={springs.ui}>
                  <PowerDot />
                </motion.span>
              )}
            </span>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
