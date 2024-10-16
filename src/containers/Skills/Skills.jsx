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
    name: "NextJS",
    proficiency: 65,
    image: images.next,
  },
  {
    name: "Sass",
    proficiency: 65,
    image: images.sass,
  },
  {
    name: "Tailwind",
    proficiency: 65,
    image: images.tailwind,
  },
   {
    name: "Flutter",
    proficiency: 75,
    image: images.flutter,
  },
];

const experiences = [
  {
    name: " Bootcamp",
    company: " Google",
    description:
      "I participated in the bootcamp organized by the Google Developer Student Club in my Alma Mater ",
    year: 2021,
  },
  {
    name: "Internship ",
    company: "Altschool Africa",
    description: "I gained some technical skills at Altschool Africa",
    year: 2022,
  },
    {
    name: "Work Study",
    company: "Neo64 GmbH",
    description: "I’ve worked as a front-end developer, focusing on building responsive and user-friendly interfaces using Svelte and Flutte",
    year: "July 2023 - August 2024",
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        Skills <span>&</span> Experience
      </h2>
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
