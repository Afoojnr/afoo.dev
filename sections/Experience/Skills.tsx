import Image, { StaticImageData } from "next/image";
import { motion, easeOut } from "framer-motion";

import { skills } from "@/constants";

const Skills = () => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillAnim = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: easeOut }
    }
  };

  return (
    <motion.div
      className="mt-10 flex flex-row flex-wrap justify-center gap-2 md:w-2/3 lg:gap-10"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skills.map((s, index) => (
        <motion.div key={s.name + index} variants={skillAnim}>
          <SkillIcon name={s.name} icon={s.icon} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;

const SkillIcon = ({ name, icon }: { name: string; icon: StaticImageData }) => (
  <div className="flex flex-col items-center">
    <div className="bg-muted border-border flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border hover:scale-110 lg:h-20 lg:w-20">
      <Image
        src={icon}
        alt={name}
        className="h-8 w-8 object-contain lg:h-12 lg:w-12"
      />
    </div>
    <p className="text-muted-foreground mt-2 text-sm">{name}</p>
  </div>
);
