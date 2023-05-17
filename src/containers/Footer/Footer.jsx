import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        Take a <span> coffee & chat </span> with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a
            href="mailto:afolabiabdulhamid4@gmail.com"
            target="blank"
            className="p-text"
          >
            afolabiabdulhamid4@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+491630828877" target="blank" className="p-text">
            +491630828877
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="whatsapp" />
          <a
            href="https://wa.me/+491630828877"
            target="blank"
            className="p-text"
          >
            +491630828877
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
