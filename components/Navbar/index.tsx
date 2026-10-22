"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import LocaleSwitch from "@/components/LocaleSwitch";
import Logo from "@/components/Logo";
import { navItems } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { springs } from "@/lib/motion";
import CvKey from "./CvKey";
import MobileSheet from "./MobileSheet";
import NavLinks from "./NavLinks";

const sectionLinks = navItems.filter(item => item !== "home");

const Navbar = () => {
  const t = useTranslations("nav");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navItems);

  useMotionValueEvent(scrollY, "change", latest => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 160);
    setScrolled(latest > 8);
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={springs.ui}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled ? "bg-ground border-line" : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label={t("main")}
        className="px-gutter max-w-page mx-auto flex h-16 items-center justify-between gap-6"
      >
        {/* named by hidden text, not aria-label, so the name and visible logo never disagree */}
        <Link href="#home">
          <span className="sr-only">{t("backToTop")}</span>
          <Logo />
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <NavLinks items={sectionLinks} active={active} />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <LocaleSwitch />
            <CvKey />
          </div>
          <MobileSheet items={sectionLinks} active={active} />
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
