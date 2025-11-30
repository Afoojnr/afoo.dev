"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface TypingTextProps {
  text: string;
  speed?: number;
}

const TypingText = ({ text, speed = 30 }: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className="text-left whitespace-pre-wrap">
      {displayed}
    </span>
  );
};

export default TypingText;
