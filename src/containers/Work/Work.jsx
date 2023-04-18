import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
const works = [
  {
    title: "Bakery Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: images.about01,
    url: "https://www.example.com/project-a",
    gitUrl: "https://www.github.com",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project B",
    description:
      "Praesent vel libero euismod, malesuada nulla eget, eleifend mi.",
    image: images.about02,
    url: "https://www.example.com/project-b",
    gitUrl: "https://www.github.com",
    technologies: ["React", "Firebase", "Bootstrap"],
  },
  {
    title: "Project C",
    description: "Nam sit amet elit sed nibh sollicitudin congue.",
    image: images.about03,
    url: "https://www.example.com/project-c",
    gitUrl: "https://www.github.com",
    technologies: ["Vue.js", "AWS", "Sass"],
  },
  {
    title: "Project C",
    description: "Nam sit amet elit sed nibh sollicitudin congue.",
    image: images.about04,
    url: "https://www.example.com/project-c",
    gitUrl: "https://www.github.com",
    technologies: ["Vue.js", "AWS", "Sass"],
  },
];

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {works.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.image} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.url} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.gitUrl} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    whileInView={{ scale: [0, 1] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text " style={{ marginTop: 10 }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__work"),
  "work",
  "app__primarybg"
);