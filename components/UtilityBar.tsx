// "use client";

// import { FaFileDownload } from "react-icons/fa";

// import ThemeToggle from "./ThemeToggle";

// const UtilityBar = () => {
//   return (
//     <div className="flex items-end gap-5 md:gap-0 justify-center md:flex-col">
//       <ThemeToggle />

//       <a href="/afoo_cv.pdf" download aria-label="Download CV">
//         <div className="group btn-circle">
//           <FaFileDownload className="btn-circle-icon" />
//         </div>
//       </a>
//     </div>
//   );
// };

// export default UtilityBar;

"use client";

import { FaFileDownload } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const UtilityBar = () => {
  return (
    <motion.div
      className="flex items-end gap-5 md:gap-0 justify-center md:flex-col"

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
      {/* Theme Toggle */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 }
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <ThemeToggle />
      </motion.div>

      {/* Download Button */}
      <motion.a
        href="/afoo_cv.pdf"
        download
        aria-label="Download CV"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 }
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        <div className="group btn-circle">
          <FaFileDownload className="btn-circle-icon" />
        </div>
      </motion.a>
    </motion.div>
  );
};

export default UtilityBar;
