import React from "react";

import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const skills = [
  {
    name: "HTML",
    proficiency: 90,
    image: images.html,
  },
  {
    name: "CSS",
    proficiency: 85,
    image: images.css,
  },
  {
    name: "JavaScript",
    proficiency: 95,
    image: images.javascript,
  },
  {
    name: "React",
    proficiency: 80,
    image: images.react,
  },
  {
    name: "Git",
    proficiency: 70,
    image: images.git,
  },
  {
    name: "Typescript",
    proficiency: 65,
    image: images.typescript,
  },
  {
    name: "Sass",
    proficiency: 65,
    image: images.sass,
  },
  {
    name: "Tailwind",
    proficiency: 65,
    image: images.flutter,
  },
];

const experiences = [
  {
    name: "Bootcamp",
    company: "Altschool Africa",
    description: "Alt school is in nigeria and very cool place",
    year: 2020,
  },
  {
    name: "Internship ",
    company: "Altschool Africa",
    description: "I worked as a frontend dev ",
    year: 2021,
  },
  {
    name: "Junior Dev",
    company: "Altschool Africa",
    description: "I worked as a frontend dev ",
    year: 2022,
  },
  {
    name: "Senior Dev",
    company: "Altschool Africa",
    description: "I worked as a frontend dev ",
    year: 2023,
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text"> Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.image} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences.map((exp) => (
            <>
              <motion.div className="app__skills-exp-item" key={exp.year}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{exp.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-tooltip-id={exp.name}
                    // data-tooltip-content="Hello world!"
                  >
                    <h4 className="bold-text">{exp.name}</h4>
                    <p className="p-text">{exp.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={exp.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="skills-tooltip"
                  >
                    {exp.description}
                  </ReactTooltip>
                </motion.div>
              </motion.div>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
