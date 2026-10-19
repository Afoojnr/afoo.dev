"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type MotionValue
} from "motion/react";
import { useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { springs } from "@/lib/motion";

type BubbleLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

const follow = { stiffness: 230, damping: 24, mass: 0.6 };

const BubbleLink = ({
  href,
  label,
  children,
  className = ""
}: BubbleLinkProps) => {
  const reduceMotion = usePrefersReducedMotion();
  const [over, setOver] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, follow);
  const springY = useSpring(y, follow);

  const place = (e: React.PointerEvent<HTMLAnchorElement>, jump: boolean) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    x.set(px);
    y.set(py);
    // jump to the cursor on enter instead of animating in from 0,0
    if (jump) {
      springX.jump(px);
      springY.jump(py);
      setOver(true);
    }
  };

  const bubble: { x: MotionValue<number>; y: MotionValue<number> } = {
    x: reduceMotion ? x : springX,
    y: reduceMotion ? y : springY
  };

  return (
    <a
      href={href}
      data-cursor="none"
      onPointerEnter={e => place(e, true)}
      onPointerMove={e => place(e, false)}
      onPointerLeave={() => setOver(false)}
      className={`text-ink hover:text-signal focus-visible:text-signal relative block transition-colors duration-300 [@media(pointer:fine)]:cursor-none ${className}`}
    >
      {children}
      <motion.span
        aria-hidden
        initial={false}
        animate={{ scale: over ? 1 : 0, opacity: over ? 1 : 0 }}
        transition={springs.ui}
        style={bubble}
        className="bg-ink text-ground pointer-events-none absolute top-0 left-0 -mt-[46px] -ml-[46px] grid size-[92px] place-items-center rounded-full text-[0.8125rem] font-semibold"
      >
        {label}
      </motion.span>
    </a>
  );
};

export default BubbleLink;
