"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";

import Cursor from "./Cursor";
import HashScroll from "./HashScroll";
import Spotlight from "./Spotlight";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    // lib/theme.ts handles the crossfade
    disableTransitionOnChange
  >
    <MotionConfig reducedMotion="user">
      {children}
      <Spotlight />
      <HashScroll />
      <Cursor />
    </MotionConfig>
  </ThemeProvider>
);

export default Providers;
