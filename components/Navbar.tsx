"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from "framer-motion";

import FloatingOrb from "./FloatingOrb";
import { navItems } from "@/constants";
import UtilityBar from "./UtilityBar";
import Logo from "./Logo";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // 1. Scroll Trigger Logic
  useMotionValueEvent(scrollY, "change", latest => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // 2. Prevent Body Scroll
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  // 3. Close on ESC
  useEffect(() => {
    if (!toggle) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setToggle(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  const navVariants = {
    visible: { y: 0 },
    hidden: { y: "-100%" }
  };

  return (
    <>
      {/* --- MAIN NAVBAR BACKGROUND & DESKTOP CONTENT --- */}
      <motion.nav
        variants={navVariants}
        animate={hidden && !toggle ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="bg-background/25 border-background/20 fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b px-8 py-4 backdrop-blur-xs"
      >
        <Link
          href="/"
          className="flex items-center justify-start"
          aria-label="Home"
        >
          <Logo />
        </Link>

        {/* Desktop Links */}
        <motion.ul className="hidden flex-1 list-none items-center justify-center md:flex">
          {navItems
            .filter(item => item.toLowerCase() !== "contact")
            .map(item => (
              <li
                key={item}
                // className="mx-4 cursor-pointer flex flex-col items-center group"
                className="group relative mx-4 cursor-pointer"
              >
                <Link
                  href={`#${item}`}
                  className="text-foreground group-hover:text-primary after:bg-primary text-sm font-semibold tracking-wide uppercase transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full"
                >
                  {item}
                </Link>
              </li>
            ))}
        </motion.ul>

        {/* Desktop Button */}
        <motion.div className="hidden items-center md:flex">
          <Link href="#contact" className="btn-primary px-5 py-2">
            Contact
          </Link>
        </motion.div>
      </motion.nav>

      {/* --- MOBILE Toggle Button  --- */}

      <motion.div
        variants={navVariants}
        animate={hidden && !toggle ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 right-0 z-100 flex h-[74px] items-center p-4 md:hidden" // Height matches navbar roughly to align vertically
      >
        <AnimatedMenuButton
          open={toggle}
          onClick={() => setToggle(prev => !prev)}
        />
      </motion.div>

      {/* --- MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {toggle && (
          <div>
            {/* Blur Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-foreground/60 fixed inset-0 z-70 cursor-pointer touch-none backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setToggle(false)}
            />

            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`bg-accent border-border fixed top-0 right-0 bottom-0 z-80 flex h-screen w-3/4 max-w-xs min-w-60 flex-col items-center overflow-y-auto border-l px-6 pt-24 pb-8 shadow-2xl md:hidden`}
              onClick={e => e.stopPropagation()}
            >
              <ul className="mb-6 flex h-[80%] w-full flex-col items-center justify-center gap-3">
                {navItems.map(item => (
                  <li key={item} className="my-2 w-full text-center">
                    <a
                      href={`#${item}`}
                      onClick={() => setToggle(false)}
                      className="text-foreground text-md hover:text-primary block py-2 font-semibold tracking-wide uppercase transition-all duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <UtilityBar />
              <FloatingOrb
                size={56}
                delay={1}
                duration={4.5}
                yOffset={18}
                shadow={null}
                className="right-2 bottom-8 rounded-full"
              />
              <FloatingOrb
                size={100}
                delay={1}
                duration={4.5}
                yOffset={18}
                shadow={null}
                className="-top-10 left-2 rounded-full"
              />
              <FloatingOrb
                size={80}
                delay={0.6}
                duration={7}
                yOffset={22}
                className="top-1/3 right-0 translate-x-2 translate-y-1/2 rounded-full"
                style={{
                  opacity: 0.7
                }}
              />
              <FloatingOrb
                size={50}
                delay={0.6}
                duration={7}
                yOffset={22}
                className="bottom-1/3 left-2 translate-x-2 -translate-y-6 rounded-full"
                style={{
                  opacity: 0.7
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

const AnimatedMenuButton = ({
  open,
  onClick
}: {
  open: boolean;
  onClick: () => void;
}) => (
  <button
    className="bg-primary pointer-events-auto flex h-9 w-9 flex-col items-center justify-center space-y-2 rounded-full transition-[background] duration-200 focus:outline-none"
    aria-label={open ? "Close menu" : "Open menu"}
    onClick={onClick}
    type="button"
  >
    <span
      className={`bg-primary-foreground h-0.5 w-5 rounded transition-all duration-500 ease-in-out ${
        open ? "translate-y-1 rotate-45" : ""
      }`}
    />
    <span
      className={`bg-primary-foreground h-0.5 w-5 rounded transition-all duration-500 ease-in-out ${
        open ? "-translate-y-1.5 -rotate-45" : ""
      }`}
    />
  </button>
);

export default Navbar;
