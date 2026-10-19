"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

import { springs } from "@/lib/motion";

type CopyButtonProps = {
  text: string;
  label: string;
};

const RESET_AFTER_MS = 1800;

/**
 * Shows a value (an email address, say) as a button that copies it. The icon
 * swaps to a check on a spring and a live region confirms for screen readers.
 * @param text - the value to copy and display
 * @param label - what the value is, for the accessible name
 * @returns the copy button
 */
const CopyButton = ({ text, label }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Clipboard can be blocked; selecting the text by hand still works
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), RESET_AFTER_MS);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}: ${text}`}
      className="group text-ink border-line hover:border-ink inline-flex max-w-full items-center gap-3 rounded-full border py-3 pr-4 pl-6 font-semibold transition-[border-color,transform] duration-200 active:scale-[0.97]"
    >
      <span className="min-w-0 text-left break-all">{text}</span>
      <span
        className="relative grid size-5 shrink-0 place-items-center"
        aria-hidden
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={copied ? "done" : "copy"}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={springs.press}
            className="absolute"
          >
            {copied ? (
              <FiCheck className="text-live size-5" />
            ) : (
              <FiCopy className="text-ink-soft group-hover:text-ink size-4 transition-colors" />
            )}
          </motion.span>
        </AnimatePresence>
      </span>
      <span role="status" className="sr-only">
        {copied ? `${label} copied` : ""}
      </span>
    </button>
  );
};

export default CopyButton;
