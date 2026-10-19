"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
  useTransform
} from "motion/react";

import { springs } from "@/lib/motion";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

const MAX_TILT = 5;
const follow = { stiffness: 170, damping: 18 };

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const reduceMotion = useReducedMotion();
  const tiltX = useSpring(0, follow);
  const tiltY = useSpring(0, follow);
  const shadowX = useTransform(tiltY, v => -v * 2.6);
  const shadowY = useTransform(tiltX, v => v * 2.6 + 12);
  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px 34px rgb(30 30 28 / 0.22), 0 1px 2px rgb(30 30 28 / 0.12)`;

  const lean = (e: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltY.set(px * MAX_TILT * 2);
    tiltX.set(-py * MAX_TILT * 2);
  };

  const settle = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.figure
      className={className}
      style={{
        rotateX: tiltX,
        rotateY: tiltY,
        boxShadow,
        transformPerspective: 900
      }}
      whileHover={reduceMotion ? undefined : { scale: 1.015 }}
      transition={springs.ui}
      onPointerMove={lean}
      onPointerLeave={settle}
    >
      {children}
    </motion.figure>
  );
};

export default TiltCard;
