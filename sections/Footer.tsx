"use client";

import SectionWrap from "@/components/SectionWrap";
import SocialMedia from "@/components/SocialMedia";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-5 px-2 py-8">
      <div className="md:hidden">
        <SocialMedia />
      </div>

      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Abdulhamid Afolabi</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SectionWrap(Footer);
