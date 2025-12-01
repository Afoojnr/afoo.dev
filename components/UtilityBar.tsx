"use client";

import { FaFileDownload } from "react-icons/fa";

import ThemeToggle from "./ThemeToggle";

const UtilityBar = () => {
  return (
    <div className="flex items-end gap-5 md:gap-0 justify-center md:flex-col">
      <ThemeToggle />

      <a href="/afoo_cv.pdf" download aria-label="Download CV">
        <div className="group btn-circle">
          <FaFileDownload className="btn-circle-icon" />
        </div>
      </a>
    </div>
  );
};

export default UtilityBar;
