"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";

interface UseScrollRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  ease?: string;
  start?: string;
  once?: boolean;
  delay?: number;
  enabled?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const {
    y = 40,
    opacity = 0,
    duration = 0.7,
    ease = "power2.out",
    start = "top 85%",
    once = true,
    delay = 0,
    enabled = true,
  } = options;

  const ref = useRef<T>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (!enabled) return;
      if (prefersReducedMotion()) {
        gsap.set(ref.current, { y: 0, opacity: 1 });
        return;
      }

      gsap.fromTo(
        ref.current,
        { y, opacity },
        {
          y: 0,
          opacity: 1,
          duration,
          ease,
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start,
            once,
          },
        }
      );
    },
    { scope: ref }
  );

  return ref;
}
