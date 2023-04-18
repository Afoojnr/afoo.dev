import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
const abouts = [
  {
    title: "web Development",
    description:
      "i am a frontend developer with a passion for building beautiful and functional websites",
    imgUrl: images.about01,
  },
  {
    title: "FrontEnd Dev",
    description: "i am a good web developer",
    imgUrl: images.about02,
  },
  {
    title: "UI/Ux",
    description: "i am a good web developer",
    imgUrl: images.about03,
  },
  {
    title: "Machine Learning",
    description: "i am a good web developer",
    imgUrl: images.about04,
  },
];
const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Apps</span> <br /> means{" "}
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
