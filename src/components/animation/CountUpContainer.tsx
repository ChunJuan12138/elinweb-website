"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";

interface CountUpContainerProps {
  children: ReactNode;
  className?: string;
  selector?: string;
  duration?: number;
  stagger?: number;
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

export function CountUpContainer({
  children,
  className = "",
  selector = "[data-count-up]",
  duration = 2,
  stagger = 0.15,
  ease = "power2.out",
  start = "top 85%",
  once = true,
}: CountUpContainerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const elements = gsap.utils.toArray<HTMLElement>(
        ref.current.querySelectorAll(selector)
      );
      if (elements.length === 0) return;

      if (prefersReducedMotion()) return;

      const data = elements.map((el) => {
        const raw = el.dataset.countUp || el.textContent || "0";
        const { number, suffix } = parseNumericPrefix(raw);
        return { el, number, suffix, obj: { value: 0 } };
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start,
          once,
        },
        onComplete: () => {
          gsap.set(elements, { willChange: "auto" });
        },
      });

      data.forEach(({ el, number, suffix, obj }, index) => {
        let lastText = "";

        tl.fromTo(
          obj,
          { value: 0 },
          {
            value: number,
            duration,
            ease,
            snap: { value: 1 },
            onUpdate: () => {
              const text = `${Math.round(obj.value)}${suffix}`;
              if (text === lastText) return;
              lastText = text;
              el.textContent = text;
            },
          },
          index * stagger
        );
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
