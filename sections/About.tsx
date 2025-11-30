"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { images } from "@/constants/images";
import SectionWrap from "@/components/SectionWrap";

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-start">
      <h1 className="section-title">
        <span className="text-primary">About</span> Me
      </h1>

      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-0">
        <motion.div
          className="flex w-full flex-col gap-4 lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="text-justify text-sm leading-snug md:text-base">
              Hi, I’m Abdulhamid, and I love building things people use. I
              started coding in 2019 with Python, mainly to apply machine
              learning to my chemistry work and automate small things like
              reminders for family birthdays. In 2021, I tried HTML and CSS
              “just to see what it’s like”… and I got hooked immediately. Seeing
              instant results on screen and building my first profile page —
              that feeling made me fall in love with frontend development.
            </p>

            <p className="my-1 text-justify text-sm leading-snug md:text-base">
              Fast-forward to today: I’ve had the privilege of working with two
              startups and am now a co-founder of{" "}
              <a
                href="https://propatishq.com"
                target="blank"
                className="link text-primary"
              >
                Propatis HQ
              </a>
              , where we focus on shipping products in the real estate sector.
              Alongside that, I’m also pursuing a PhD in Materials Chemistry,
              balancing my love for both research and building software.
            </p>

            <p className="text-justify text-sm leading-snug md:text-base">
              Outside coding and the lab, I enjoy playing football, gaming,
              spending time with family, and reading books on personal
              development and faith. I also share my learning journey through
              <a
                href="https://medium.com/@afoojnr"
                target="blank"
                className="link text-primary mx-1"
              >
                articles
              </a>
              and
              <a
                href="https://www.youtube.com/@codewithafoo"
                target="blank"
                className="link text-primary ml-1"
              >
                videos
              </a>
              .
            </p>

            <p className="text-sm italic opacity-70 md:text-base">
              A quote I try to live by: Dream big? Do big!
            </p>
          </div>
        </motion.div>

        <div className="flex w-full items-center justify-center p-7 lg:w-[40%] lg:p-5">
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 0, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: 10, y: 10 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                opacity: { duration: 0.3, delay: 0.3 },
                scale: { duration: 0.7, ease: "easeOut", delay: 0.2 },
                x: { duration: 0.6, delay: 0.8, ease: [0.4, 0.64, 0.61, 1] },
                y: { duration: 0.6, delay: 0.8, ease: [0.4, 0.64, 0.61, 1] }
              }}
              className="border-primary absolute top-0 left-0 aspect-square w-[70vw] rounded-xl border shadow-lg md:w-[50vw] lg:w-[20vw]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 0, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x: -10, y: -10 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                opacity: { duration: 0.3, delay: 0.3 },
                scale: { duration: 0.7, ease: "easeOut", delay: 0.2 },
                x: { duration: 0.6, delay: 0.8, ease: [0.4, 0.64, 0.61, 1] },
                y: { duration: 0.6, delay: 0.8, ease: [0.4, 0.64, 0.61, 1] }
              }}
              className="relative z-1 aspect-square w-[70vw] rounded-xl shadow-2xl md:w-[50vw] lg:w-[20vw]"
            >
              <Image
                src={images.headshot.src}
                alt="Abdulhamid Afolabi"
                fill
                className="rounded-xl object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrap(About);
