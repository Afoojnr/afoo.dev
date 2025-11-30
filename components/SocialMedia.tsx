"use client";

import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="flex items-end justify-center md:flex-col">
      {/* GitHub */}
      <a
        href="https://github.com/Afoojnr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <div className="group btn-circle">
          <AiFillGithub className="btn-circle-icon" />
        </div>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/abdulhamid-afolabi-065b38160"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <div className="group btn-circle">
          <BsLinkedin className="btn-circle-icon" />
        </div>
      </a>

      {/* Twitter */}
      <a
        href="http://twitter.com/Afoojnr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <div className="group btn-circle">
          <BsTwitter className="btn-circle-icon" />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
