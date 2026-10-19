"use client";

import { motion } from "motion/react";

import DotButton from "@/components/ui/DotButton";
import IdeaToProduct from "@/components/ui/IdeaToProduct";
import ProximityText from "@/components/ui/ProximityText";
import TextLink from "@/components/ui/TextLink";
import WaveText from "@/components/ui/WaveText";
import { socialLinks } from "@/constants";
import { springs } from "@/lib/motion";

const nameLines = ["Afolabi", "Abdulhamid."];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { ...springs.settle, delay }
});

const Hero = () => (
  <section
    id="home"
    data-catalogue
    className="px-gutter max-w-page mx-auto flex min-h-svh w-full flex-col pt-24 pb-10 [--hero-gap-sm:clamp(1rem,3.8svh,2.25rem)] [--hero-gap:clamp(1.5rem,5.7svh,3.5rem)] lg:pt-28"
  >
    {/* centres everything on phones; md:contents removes it on larger screens */}
    <div className="flex flex-1 flex-col justify-center md:contents">
      <motion.div
        className="mb-(--hero-gap) flex justify-between gap-6 text-sm font-medium tracking-wide uppercase md:mb-0"
        {...rise(0)}
      >
        <p className="role-label text-ink">
          Software Engineer · Web &amp; Mobile
        </p>
        {/* in the menu sheet on phones */}
        <ul className="hidden gap-6 sm:flex">
          {socialLinks.map(({ href, label }) => (
            <li key={label}>
              <TextLink href={href} external className="text-sm">
                {label}
              </TextLink>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="@container flex flex-col justify-center pb-[calc(var(--hero-gap)+0.5rem)] md:flex-1 md:py-10">
        <div className="relative">
          <h1 className="font-extrabold">
            {nameLines.map((line, i) => (
              <span
                key={line}
                className={`block overflow-x-visible overflow-y-clip pb-[0.06em] ${
                  i === 1 ? "sm:text-right" : ""
                }`}
              >
                <motion.span
                  className="text-display block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ ...springs.settle, delay: 0.08 + i * 0.09 }}
                >
                  <ProximityText text={line} />
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="text-ink md:text-ink-soft mt-(--hero-gap-sm) max-w-[46ch] text-[clamp(1.25rem,5.8vw,1.5rem)] leading-[1.25] text-pretty md:mt-6 md:text-[length:var(--text-body)] md:leading-[1.6] xl:absolute xl:top-4 xl:right-0 xl:mt-0 xl:w-96"
            {...rise(0.38)}
          >
            <WaveText text="I take products from idea to launch, and I obsess over how they feel as much as how they work." />
          </motion.p>
        </div>
      </div>

      <motion.div
        aria-hidden
        className="bg-line h-px origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ ...springs.settle, delay: 0.5 }}
      />

      <motion.div
        className="mt-[calc(var(--hero-gap-sm)+0.5rem)] flex flex-col gap-(--hero-gap-sm) md:mt-8 md:flex-row md:items-center md:justify-between md:gap-10"
        {...rise(0.55)}
      >
        <IdeaToProduct />
        <DotButton label="See my work" href="#works" />
      </motion.div>
    </div>
  </section>
);

export default Hero;
