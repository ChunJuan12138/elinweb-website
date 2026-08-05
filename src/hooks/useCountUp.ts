"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";

interface UseCountUpOptions {
  value: string;
  duration?: number;
  ease?: string;
  start?: string;
  once?: boolean;
}

function parseNumericPrefix(value: string): { number: number; suffix: string } {
  const match = value.match(/^([0-9]+)(.*)$/);
  if (match) {
    return { number: parseInt(match[1], 10), suffix: match[2] };
  }
  return { number: 0, suffix: value };
}

export function useCountUp<T extends HTMLElement>(options: UseCountUpOptions) {
  const {
    value,
    duration = 2,
    ease = "power2.out",
    start = "top 85%",
    once = true,
  } = options;

  const ref = useRef<T>(null);
  const { number, suffix } = parseNumericPrefix(value);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (prefersReducedMotion()) return;

      const setText = gsap.quickSetter(ref.current, "textContent");
      const target = { value: 0 };
      gsap.fromTo(
        target,
        { value: 0 },
        {
          value: number,
          duration,
          ease,
          snap: { value: 1 },
          scrollTrigger: {
            trigger: ref.current,
            start,
            once,
          },
          onUpdate: () => {
            setText(`${Math.round(target.value)}${suffix}`);
          },
        }
      );
    },
    { scope: ref, dependencies: [value, number, suffix, duration, ease, start, once] }
  );

  return [ref, value] as const;
}
