"use client";

import {
  AnimatePresence,
  motion,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue
} from "motion/react";
import Image from "next/image";

import { springs } from "@/lib/motion";
import type { WorkItem } from "@/types";

type PreviewProps = {
  works: WorkItem[];
  active: number | null;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

const follow = { stiffness: 260, damping: 28, mass: 0.6 };

// floats beside the cursor on mouse devices and leans into the direction of travel
const Preview = ({ works, active, x, y }: PreviewProps) => {
  const springX = useSpring(x, follow);
  const springY = useSpring(y, follow);
  const rotate = useTransform(useVelocity(springX), [-1600, 1600], [-7, 7], {
    clamp: true
  });

  return (
    <motion.div
      aria-hidden
      style={{ x: springX, y: springY, rotate }}
      className="pointer-events-none absolute top-0 left-0 z-10 hidden w-72 drop-shadow-[0_14px_28px_rgb(0_0_0/0.2)] pointer-fine:block"
    >
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.86,
              clipPath: "inset(18% 18% 18% 18% round 12px)"
            }}
            animate={{
              opacity: 1,
              scale: 1,
              clipPath: "inset(0% 0% 0% 0% round 12px)"
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              clipPath: "inset(12% 12% 12% 12% round 12px)"
            }}
            transition={springs.ui}
            className="relative aspect-4/3 -translate-y-1/2 overflow-hidden rounded-xl"
          >
            {/* all images stay mounted so moving between rows never waits on a load */}
            {works.map((work, i) => (
              <motion.div
                key={work.id}
                initial={false}
                animate={{
                  opacity: i === active ? 1 : 0,
                  scale: i === active ? 1 : 1.08
                }}
                transition={springs.ui}
                style={{ background: work.letterbox ?? "#000" }}
                className="absolute inset-0"
              >
                <Image
                  src={work.image}
                  alt=""
                  fill
                  sizes="18rem"
                  className="object-cover object-top"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preview;
