"use client";

import { useEffect, useState } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  splitBy?: "chars" | "words";
}

export function BlurText({
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  duration = 0.6,
  splitBy = "chars",
}: BlurTextProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const items = splitBy === "words" ? text.split(" ") : text.split("");

  return (
    <span className={className} aria-label={text}>
      {items.map((item, index) => (
        <span
          key={index}
          className="inline-block transition-all will-change-[filter,opacity,transform]"
          style={{
            transitionDuration: `${duration}s`,
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transitionDelay: mounted ? `${index * stagger}s` : "0s",
            filter: mounted ? "blur(0px)" : "blur(10px)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(10px)",
          }}
        >
          {item === " " ? "\u00A0" : item}
          {splitBy === "words" && index < items.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}
