"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/constants";



const SocialMedia = () => {
  return (
    <motion.div
      className="flex items-end justify-center md:flex-col "
      
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.15, ease: "easeOut" }
        }
      }}
    >
      {socialLinks.map(({ icon: Icon, href, label }, i) => (
        <motion.a
          key={label + i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          // whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          <div className="group btn-circle">
            <Icon className="btn-circle-icon" />
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialMedia;
