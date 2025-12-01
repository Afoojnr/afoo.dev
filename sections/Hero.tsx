"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

import FloatingOrb from "@/components/FloatingOrb";

const Hero = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const burstItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="bg-accent relative flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex w-min flex-col gap-5"
      >
        <motion.p variants={burstItem} className="font-medium md:text-lg">
          👋 Hi, I’m
        </motion.p>

        <motion.div variants={burstItem}>
          <h1 className="text-foreground mb-2 flex flex-col text-5xl font-extrabold md:flex-row md:gap-5 md:text-7xl">
            Afolabi <span>Abdulhamid.</span>
          </h1>

          <h2 className="text-primary flex flex-col text-3xl font-bold md:flex-row md:gap-5 md:text-[3.5rem]">
            I turn ideas into products.
          </h2>
        </motion.div>

        <motion.p
          variants={burstItem}
          className="text-muted-foreground max-w-2xl leading-snug md:text-xl"
        >
          I’m a software engineer who builds products people actually use,
          taking them from idea to launch. With 3+ years of experience in
          frontend development (web and mobile), I also stretch into backend and
          product design to help deliver complete, well-crafted solutions.
        </motion.p>

        <motion.div variants={burstItem} className="mt-2 flex md:mt-4">
          <Link
            href="#works"
            className="btn-primary w-full px-8 py-3 text-center md:w-[300px]"
          >
            See my work
          </Link>
        </motion.div>
      </motion.div>

      <FloatingOrb
        size={20}
        yOffset={20}
        duration={6}
        className="top-1/5 left-1/5 -translate-y-1/2 rounded-full"
        style={{ opacity: 0.45 }}
      />
      <FloatingOrb
        size={40}
        yOffset={20}
        duration={6}
        className="top-1/4 left-1/2 rounded-full"
        style={{ opacity: 0.45 }}
      />
      <FloatingOrb
        size={112}
        yOffset={20}
        duration={6}
        className="top-1/2 left-12 hidden -translate-y-1/2 rounded-full md:block"
        style={{ opacity: 0.45 }}
      />

      <FloatingOrb
        size={200}
        yOffset={20}
        duration={6}
        className="top-2 right-0 hidden md:block -translate-y-1/2 rounded-full"
        style={{ opacity: 0.75 }}
      />
       <FloatingOrb
        size={150}
        yOffset={20}
        duration={6}
        className="top-1 right-0 md:hidden  rounded-full"
        style={{ opacity: 0.75 }}
      />
      <FloatingOrb
        size={72}
        delay={0.6}
        duration={7}
        yOffset={22}
        className="bottom-16 left-1/4 rounded-full"
        style={{
          opacity: 0.7
        }}
      />
      <FloatingOrb
        size={56}
        delay={1}
        duration={4.5}
        yOffset={18}
        shadow={null}
        className="right-24 bottom-8 hidden rounded-full md:block"
      />

      <FloatingOrb
        size={80}
        delay={0.6}
        duration={7}
        yOffset={22}
        className="right-0 bottom-6 translate-x-2 translate-y-1/2 rounded-full"
        style={{
          opacity: 0.7
        }}
      />
      <FloatingOrb
        size={50}
        delay={0.6}
        duration={7}
        yOffset={22}
        className="bottom-1/3 left-2 translate-x-2 -translate-y-6 rounded-full md:hidden"
        style={{
          opacity: 0.35
        }}
      />
    </section>
  );
};
export default Hero;
