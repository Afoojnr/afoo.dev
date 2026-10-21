"use client";

import { motion } from "motion/react";

import CvKey from "@/components/Navbar/CvKey";
import DotButton from "@/components/ui/DotButton";
import BubbleLink from "@/components/ui/BubbleLink";
import CopyButton from "@/components/ui/CopyButton";
import ProximityText from "@/components/ui/ProximityText";
import Reveal from "@/components/ui/Reveal";
import TextLink from "@/components/ui/TextLink";
import { contact, socialLinks } from "@/constants";

const Contact = () => (
  <section
    id="contact"
    data-catalogue
    aria-labelledby="contact-title"
    className="px-gutter max-w-page mx-auto flex w-full scroll-mt-16 flex-col pt-24 pb-16 [--contact-gap:clamp(1.25rem,4svh,3rem)] lg:min-h-svh lg:justify-center lg:pb-12"
  >
    <Reveal>
      <div className="border-ink flex items-baseline justify-between border-t-2 pt-4">
        <h2 id="contact-title" className="text-lead font-semibold">
          Contact
        </h2>
        <p className="text-caption text-ink-soft uppercase">Say hello</p>
      </div>
    </Reveal>

    <div className="@container mt-(--contact-gap)">
      <Reveal delay={0.06}>
        <BubbleLink href={`mailto:${contact.email}`} label="Say hello">
          <span className="block text-[length:min(23.5cqi,34svh)] leading-[0.92] font-extrabold tracking-[-0.02em] whitespace-nowrap">
            <ProximityText text="Let’s talk." />
          </span>
          <span className="sr-only">Send me an email</span>
        </BubbleLink>
      </Reveal>
    </div>

    <Reveal delay={0.14} className="mt-(--contact-gap)">
      <p className="text-lead max-w-[28ch] font-semibold text-balance">
        Have a project, collaboration, or just want to say hi?{" "}
        <span className="text-ink-soft">Send me a message!</span>
      </p>
    </Reveal>

    <motion.div
      className="mt-(--contact-gap) flex flex-wrap items-center gap-x-8 gap-y-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", duration: 0.7, bounce: 0.12, delay: 0.22 }}
    >
      <DotButton label="Say hello" href={`mailto:${contact.email}`} />
      <CopyButton text={contact.email} label="email address" />
      <CvKey />
    </motion.div>

    <Reveal delay={0.3} className="mt-(--contact-gap)">
      <ul className="flex flex-wrap gap-x-8 gap-y-3">
        {socialLinks.map(({ href, label }) => (
          <li key={label}>
            <TextLink href={href} external>
              {label}
            </TextLink>
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);

export default Contact;
