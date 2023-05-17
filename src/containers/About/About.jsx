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
        <span> About</span> me
      </h2>
      {/* <div className="app__profiles"> */}
      <motion.div
        whileInView={{ opacity: 1 }}
        // whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="app__profile-item"
        // key={about.title + index}
      >
        <img src={images.about02} alt="Afolabi" />
        <p className="p-text">
          <span style={{ color: "black" }}> 👋 Hello! I'm Abdulhamid </span>{" "}
          <br />
          Despite pursuing my Master's degree in Material Science, my unwavering
          passion for web development remains at the forefront. While my
          academic focus lies in Material Science, I am dedicated to expanding
          my knowledge and skills in the dynamic realm of web development. By
          day
          <span
            style={{
              color: "gold",
            }}
          >
            ☼
          </span>{" "}
          , I delve into the world of material properties prediction using
          machine learning, while by night{" "}
          <span
            style={{
              color: "blue",
            }}
          >
            ☾
          </span>
          , I channel my creativity as a front-end web developer. I'm passionate
          about leveraging both disciplines to create stunning websites and
          unlock insights in the field of materials science. Let's bring
          innovation to life together!
        </p>
      </motion.div>
      {/* </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
