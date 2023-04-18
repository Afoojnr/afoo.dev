import React, { useState } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Testimonials.scss";

const testimonials = [
  {
    name: "Perry",
    company: "Perry Luscious",
    image: images.css,
    feedback:
      "Afolabi is a good web developer and a he is going places Insha Allah. Very good design, keep it up",
  },
  {
    name: "Anex",
    company: "Anex Image",
    image: images.react,
    feedback:
      "Afolabi is a good web developer and a he is going places Insha Allah. Very good design, keep it up Afolabi is a good web developer and a he is going places Insha Allah. Very good design, keep it up",
  },
  {
    name: "Perry",
    company: "Perry Luscious",
    image: images.html,
    feedback:
      "Afolabi is a good web developer and a he is going places Insha Allah. Very good design, keep it up Afolabi is a good web developer and a he is going places Insha Allah. Very good design, keep it up ",
  },
];
const brands = [
  { name: 'NewBalance', image: images.nb },
  { name: 'Amazon', image: images.amazon },
  { name: 'Bolt', image: images.bolt },
  { name: 'Spotify', image: images.spotify},
  { name: 'Skype', image: images.skype },
];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };
  const display = testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={display.image} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{display.feedback}</p>
              <div>
                <h4 className="bold-text">{display.name}</h4>
                <h5 className="p-text">{display.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand.name}
          >
            <img src={brand.image} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);