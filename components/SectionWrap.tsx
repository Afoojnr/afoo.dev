import React from "react";
import { motion } from "framer-motion";

const SectionWrap = (Component: React.FC, className?: string) => {
  const HOC = () => {
    return (
      <div className={className}>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Component />
        </motion.div>
      </div>
    );
  };

  return HOC;
};

export default SectionWrap;
