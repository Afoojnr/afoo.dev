"use client";

import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "@/constants";
import ExperienceCard from "./ExperienceCard";
import Skills from "./Skills";
import SectionWrap from "@/components/SectionWrap";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center"
    >
      <motion.div>
        <h1 className="section-title">
          Skills <span className="text-primary"> & </span> Experience
        </h1>
      </motion.div>

      <div className="flex w-full flex-col overflow-hidden">
        <VerticalTimeline lineColor="var(--accent)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <Skills />
    </section>
  );
};

export default SectionWrap(Experience);
