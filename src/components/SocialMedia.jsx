import React from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://github.com/Afoojnr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <AiFillGithub />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/abdulhamid-afolabi-065b38160"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href="http://twitter.com/Afoojnr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <BsTwitter />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
