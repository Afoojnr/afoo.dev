import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
const works = [
  {
    title: "Perry Luscious",
    description: "Website for a baking brand",
    image: images.perry,
    url: "http://perry-luscious.vercel.app/",
    gitUrl: "https://github.com/Afoojnr/perry_luscious",
    technologies: ["React", "CommerceJS", "Tailwind CSS"],
  },
  {
    title: "CryptoDorm",
    description:
      "CryptoDorm is a coin tracker app that gives live update of the crypto Market.",
    image: images.cryptodorm,
    url: "https://cryptodorm.vercel.app/",
    gitUrl: "https://github.com/Afoojnr/cryptodorm",
    technologies: ["React", "AntDesign", "Redux"],
  },
  {
    title: " Sumz AI",
    description: "Sumz AI is an article summarizer with GPT-4",
    image: images.sumz,
    url: "https://sumz-ai-phi.vercel.app/",
    gitUrl: "https://github.com/Afoojnr/sumz_ai",
    technologies: ["React", "Redux", "Tailwind CSS"],
  },
  {
    title: "Task Tracker",
    description: "Task tracker keeps track of your todos",
    image: images.todo,
    url: "https://task-tracker-pearl.vercel.app/",
    gitUrl: "https://github.com/Afoojnr/task-tracker",
    technologies: ["React JS"],
  },
];

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        My <span>Portfolio</span>
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
                className="app__flex app__work-hover "
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
              <div className="app__work-link">
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
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__work"), "work", "app__primarybg");
