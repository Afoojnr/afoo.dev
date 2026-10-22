"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/constants";
import { reveal, stagger } from "@/lib/motion";

const Skills = () => {
  const t = useTranslations("experience");

  return (
    <div className="mt-16 md:mt-20">
      <Reveal>
        <div className="border-ink border-t-2 pt-4">
          <h3 className="text-lead font-semibold">{t("skills")}</h3>
        </div>
      </Reveal>

      {/* columns rise one after another, then their skills follow */}
      <motion.div
        className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-8"
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillGroups.map(group => (
          <motion.div key={group.id} variants={stagger(0.05)}>
            <motion.h4
              variants={reveal}
              className="text-caption text-ink-soft border-line border-b pb-3 uppercase"
            >
              {t(`skillGroups.${group.id}`)}
            </motion.h4>
            <ul className="mt-4 space-y-3">
              {group.skills.map(skill => (
                <motion.li
                  key={skill.name}
                  variants={reveal}
                  whileHover={{ x: 3 }}
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
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
