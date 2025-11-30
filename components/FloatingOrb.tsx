"use client";

import { motion } from "framer-motion";
import { CSSProperties, useState } from "react";

type FloatingOrbProps = {
  size?: number;
  duration?: number;
  delay?: number;
  yOffset?: number;
  className?: string;
  background?: string | null;
  shadow?: string | null;
  style?: CSSProperties;
};

const DEFAULT_GRADIENT =
  "linear-gradient(135deg, #edf0f8 0%, #eff1f9 20%, #f1f3f9 36%, #f2f4fa 52%, #f4f6fb 65%, #f6f7fc 77%, #f8f9fc 87%, #fafafd 93%, #fbfcfe 97%, #fdfdfe 100%)";

const DEFAULT_GRADIENT_DARK =
  "linear-gradient(135deg, #1a1c22 0%, #1d1f27 25%, #21232b 50%, #242630 75%, #272933 100%)";

const DEFAULT_SHADOW =
  "inset 0 8px 30px 0 rgba(120,120,160,0.22), 0 2px 8px 0 rgba(180,180,180,0.12)";

const FloatingOrb = ({
  size = 96,
  duration = 5,
  delay = 0,
  yOffset = 15,
  className = "",
  background,
  shadow,
  style
}: FloatingOrbProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const resolvedStyle: CSSProperties = {
    width: size,
    height: size,
    ...(shadow === null ? {} : { boxShadow: shadow ?? DEFAULT_SHADOW }),
    ...style
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        y: [0, yOffset, 0],
        scale: isHovered ? 1.18 : 1
      }}
      transition={{
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        scale: { type: "spring", stiffness: 230, damping: 18 }
      }}
      className={`absolute backdrop-blur-md ${className} ${
        background === undefined
          ? ` bg-[${DEFAULT_GRADIENT}] dark:bg-[${DEFAULT_GRADIENT_DARK}] `
          : ""
      } `.trim()}
      style={{
        ...resolvedStyle,
        ...(background === undefined && {
          boxShadow: `${DEFAULT_SHADOW}`
        })
      }}
    />
  );
};

export default FloatingOrb;
