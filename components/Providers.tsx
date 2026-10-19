"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";

import Cursor from "./Cursor";
import Spotlight from "./Spotlight";

type ProvidersProps = {
  children: React.ReactNode;
};

/**
 * Client-side context for the whole app: theme switching and the shared
 * motion config, which honours the visitor's reduced-motion setting.
 * @param children - the page tree
 * @returns the providers wrapping the page
 */
const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    // The page crossfades as one image (see lib/theme.ts), so per-element
    // transitions must not also run and fight it
    disableTransitionOnChange
  >
    <MotionConfig reducedMotion="user">
      {children}
      <Spotlight />
      <Cursor />
    </MotionConfig>
  </ThemeProvider>
);

export default Providers;
