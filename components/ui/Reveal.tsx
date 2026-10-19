"use client";

import { motion } from "motion/react";

import { springs } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

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
