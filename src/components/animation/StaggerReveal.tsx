"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  childSelector?: string;
  selector?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
}

export function StaggerReveal({
  children,
  className = "",
  childSelector = ".reveal",
  selector,
  y = 40,
  duration = 0.7,
  stagger = 0.08,
  start = "top 85%",
  once = true,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const targetSelector = selector || childSelector;

  useGSAP(
    () => {
      if (!ref.current) return;

      const targets = gsap.utils.toArray<HTMLElement>(
        ref.current.querySelectorAll(targetSelector)
      );
      if (targets.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { y: 0, opacity: 1, willChange: "auto" });
        return;
      }

      gsap.set(targets, { willChange: "transform, opacity" });

      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            once,
          },
          onComplete: () => {
            gsap.set(targets, { willChange: "auto" });
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
