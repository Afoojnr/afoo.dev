"use client";

import { motion } from "motion/react";

import { logoMark } from "@/lib/brand";

const Logo = () => {
  const letters = ["F", "O", "O"];

  return (
    <div className="group/logo relative flex items-center justify-center gap-1">
      <A />

      <div className="flex">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="font-mokoto text-ink h-9 text-3xl font-bold tracking-[0.15em] md:h-9 md:text-4xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
              delay: 0.8 + i * 0.1
            }}
            translate="no"
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.2,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="text-ink absolute -top-1 -right-1 text-xs font-bold"
        >
          ©
        </motion.span>
      </div>
    </div>
  );
};

const A = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.2, delay: i * 0.2 }
    })
  };

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 286 260"
      className="h-7 w-auto md:h-9"
    >
      {logoMark.outer.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          className="fill-ink stroke-ink"
          stroke="#383C8E"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={i}
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />
      ))}

      <motion.path
        d="M103 194 L150 110 L197 194 Z"
        className="fill-live transition-[filter] duration-500 ease-out group-hover/logo:filter-[drop-shadow(0_0_7px_color-mix(in_srgb,var(--live)_85%,transparent))_brightness(1.3)] group-focus-visible/logo:filter-[drop-shadow(0_0_7px_color-mix(in_srgb,var(--live)_85%,transparent))_brightness(1.3)]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.7 }}
        style={{ transformOrigin: "center" }}
        whileHover={{ scale: 1.05 }}
      />
    </svg>
  );
};

export default Logo;
