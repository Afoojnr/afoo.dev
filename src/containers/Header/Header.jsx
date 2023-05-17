import React from "react";
import { motion } from "framer-motion";

import "./Header.scss";
import { AppWrap } from "../../wrapper";

const Header = () => {
  return (
    <motion.div
      whileInView={{ y: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header"
    >
      <p className="p-text">
        <span>👋</span>
        Hi My name is
      </p>
      <h2 className="name-text">Abdulhamid Afolabi</h2>

      <h2 className="name-text">
        <span>
          I love coding for the web <br /> &lt;&gt; one line at a time &lt;/&gt;
        </span>
      </h2>
      <a href="#work" className="header__link">
        Check out my Work
      </a>
    </motion.div>
  );
};

export default AppWrap(Header, "home");
