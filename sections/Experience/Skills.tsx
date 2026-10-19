"use client";

import { motion } from "motion/react";
import Image from "next/image";

import Reveal from "@/components/ui/Reveal";
import { skills } from "@/constants";
import { reveal, stagger } from "@/lib/motion";

/**
 * The skills strip: a labelled block under the timeline. Icons arrive in a
 * short stagger, and each lifts slightly when hovered.
 * @returns the skills strip
 */
const Skills = () => (
  <div className="mt-16 md:mt-20">
    <Reveal>
      <div className="border-ink border-t-2 pt-4">
        <h3 className="text-lead font-semibold">Skills</h3>
      </div>
    </Reveal>

    <motion.ul
      className="mt-6 flex flex-wrap gap-x-8 gap-y-4"
      variants={stagger(0.05)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.4 }}
    >
      {skills.map(skill => (
        <motion.li
          key={skill.name}
          variants={reveal}
          whileHover={{ y: -3 }}
          className="text-ink flex items-center gap-2.5"
        >
          <Image
            src={skill.icon}
            alt=""
            width={22}
            height={22}
            className="size-[22px] object-contain"
          />
          <span>{skill.name}</span>
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

export default Skills;
