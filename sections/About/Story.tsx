"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue
} from "motion/react";
import Image from "next/image";
import { Fragment, useRef, type ReactNode } from "react";

import CompanyHoverCard from "@/components/CompanyHoverCard";
import ProximityText from "@/components/ui/ProximityText";
import TextLink from "@/components/ui/TextLink";
import TiltCard from "@/components/ui/TiltCard";
import { images } from "@/constants/images";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Piece = {
  node: ReactNode;
  emphasis?: boolean;
};

// scroll progress points (0-1) for the word sweep and the quote
const SWEEP_START = 0.04;
const SWEEP_END = 0.8;
const WINDOW = 0.14;
const DIM = 0.16;
const QUOTE_FROM = 0.8;
const QUOTE_TO = 0.9;

const EMPHASIS = "[font-variation-settings:'wdth'_125,'wght'_430]";
const ARROW = "size-[0.5em]";
const BIG_REST = { wdth: 100, wght: 400 };
const BIG_PEAK = { wdth: 125, wght: 700 };

const words = (text: string, emphasis = false): Piece[] =>
  text
    .split(/\s+/)
    .filter(Boolean)
    .map(word => ({ node: word, emphasis }));

const PIECES: Piece[] = [
  ...words("Hi, I’m Abdulhamid, and I love"),
  ...words("building things people use.", true),
  ...words(
    "I started coding in 2019 to apply machine learning to my chemistry work. In 2021 I tried HTML and CSS just to see what it’s like, and watching my first page appear on screen made me fall in love with frontend. I co-founded"
  ),
  {
    node: (
      <CompanyHoverCard
        company="Propatis HQ"
        work="Propatis HQ"
        href="https://propatishq.com"
        arrowClassName={ARROW}
      >
        Propatis HQ
      </CompanyHoverCard>
    ),
    emphasis: true
  },
  ...words(", and on my own I built and shipped"),
  {
    node: (
      <CompanyHoverCard
        company="Applyd Hub (Afoo Inc)"
        work="Applyd Hub"
        href="https://www.applydhub.com"
        arrowClassName={ARROW}
      >
        Applyd Hub
      </CompanyHoverCard>
    ),
    emphasis: true
  },
  ...words(
    "to the App Store and Google Play. I’m also pursuing a PhD in Materials Chemistry, and I share what I learn in"
  ),
  {
    node: (
      <TextLink
        href="https://medium.com/@afoojnr"
        external
        className="font-semibold"
        arrowClassName={ARROW}
      >
        articles
      </TextLink>
    )
  },
  ...words("and"),
  {
    node: (
      <>
        <TextLink
          href="https://www.youtube.com/@codewithafoo"
          external
          className="font-semibold"
          arrowClassName={ARROW}
        >
          videos
        </TextLink>
        .
      </>
    )
  }
];

type UnitProps = {
  piece: Piece;
  from: number;
  progress: MotionValue<number>;
};

const Unit = ({ piece, from, progress }: UnitProps) => {
  const opacity = useTransform(progress, [from, from + WINDOW], [DIM, 1]);
  return (
    <motion.span style={{ opacity }} className={piece.emphasis ? EMPHASIS : ""}>
      {piece.node}
    </motion.span>
  );
};

const Quote = () => (
  <p className="text-sm italic opacity-70 md:text-base">
    A quote I try to live by: Dream{" "}
    <ProximityText text="big" rest={BIG_REST} peak={BIG_PEAK} radius={90} />? Do{" "}
    <ProximityText text="big" rest={BIG_REST} peak={BIG_PEAK} radius={90} />!
  </p>
);

const Story = () => {
  const reduceMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4
  });
  const quoteOpacity = useTransform(progress, [QUOTE_FROM, QUOTE_TO], [0, 1]);
  const last = Math.max(1, PIECES.length - 1);

  return (
    <div ref={ref} className={reduceMotion ? "" : "h-[180svh]"}>
      <div
        className={
          reduceMotion ? "py-12" : "sticky top-0 flex h-svh items-center pt-16"
        }
      >
        <div className="grid w-full items-center gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14">
          <TiltCard className="rounded-plate group relative aspect-4/5 h-[clamp(5.5rem,50svh_-_12rem,17rem)] overflow-hidden md:h-[clamp(8rem,50svh_-_14rem,20rem)] lg:h-[clamp(16rem,58svh,34rem)]">
            <Image
              src={images.headshot}
              alt="Abdulhamid Afolabi"
              fill
              sizes="(min-width: 1024px) 28rem, 12rem"
              className="ease-out-expo object-cover object-[56%_25%]"
            />
            {/* hover-only, so touch users get the plain photo */}
            <span
              aria-hidden
              className="ease-out-expo pointer-events-none absolute inset-0 hidden bg-[#3d6bd9]/25 mix-blend-multiply transition-[clip-path] duration-700 [clip-path:inset(0_0_0_0)] group-hover:[clip-path:inset(0_0_100%_0)] motion-reduce:transition-none [@media(hover:hover)]:block"
            />
          </TiltCard>

          <div>
            <p className="text-[length:clamp(1.125rem,0.5rem+3.4vw,1.5rem)] leading-[1.22] font-semibold tracking-tight md:text-[length:min(clamp(1.5rem,0.9rem+1.6vw,2.375rem),5.2svh)]">
              {PIECES.map((piece, i) => (
                <Fragment key={i}>
                  {reduceMotion ? (
                    <span className={piece.emphasis ? EMPHASIS : ""}>
                      {piece.node}
                    </span>
                  ) : (
                    <Unit
                      piece={piece}
                      from={
                        SWEEP_START +
                        (i / last) * (SWEEP_END - SWEEP_START - WINDOW)
                      }
                      progress={progress}
                    />
                  )}{" "}
                </Fragment>
              ))}
            </p>

            <motion.div
              style={{ opacity: reduceMotion ? 1 : quoteOpacity }}
              className="mt-5 md:mt-6"
            >
              <Quote />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
