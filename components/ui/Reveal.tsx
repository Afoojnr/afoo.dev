"use client";

import { motion } from "motion/react";

import { springs } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Lets a block rise into place the first time it scrolls into view. The
 * delay sits inside the animation's own transition, so staggering several
 * blocks works. Reduced-motion visitors get the content without the movement.
 * @param children - the content to reveal
 * @param className - layout classes for the wrapper
 * @param delay - seconds to wait before revealing
 * @returns the revealing wrapper
 */
const Reveal = ({ children, className, delay = 0 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
    whileInView={{
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { ...springs.settle, delay }
    }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

export default Reveal;
