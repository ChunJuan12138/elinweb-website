"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";

type RevealDirection = "up" | "down" | "left" | "right";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  childSelector?: string;
  selector?: string;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
}

const directionOffset: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
};

export function StaggerReveal({
  children,
  className = "",
  childSelector = ".reveal",
  selector,
  direction = "up",
  distance = 40,
  duration = 0.7,
  stagger = 0.08,
  start = "top 85%",
  once = true,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const targetSelector = selector || childSelector;
  const offset = directionOffset[direction];

  // Fallback: if the reveal animation never fires (e.g. static export without
  // scroll, or ScrollTrigger fails to initialize), force the content visible
  // after a short delay so the page remains usable and SEO-friendly.
  useEffect(() => {
    if (!ref.current) return;
    const targets = Array.from(
      ref.current.querySelectorAll<HTMLElement>(targetSelector),
    );
    if (targets.length === 0) return;

    const timer = setTimeout(() => {
      targets.forEach((el) => {
        const computed = window.getComputedStyle(el);
        if (parseFloat(computed.opacity) < 0.1) {
          gsap.set(el, { x: 0, y: 0, opacity: 1, willChange: "auto" });
        }
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [targetSelector]);

  useGSAP(
    () => {
      if (!ref.current) return;

      const targets = gsap.utils.toArray<HTMLElement>(
        ref.current.querySelectorAll(targetSelector),
      );
      if (targets.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { x: 0, y: 0, opacity: 1, willChange: "auto" });
        return;
      }

      gsap.set(targets, { willChange: "transform, opacity" });

      gsap.fromTo(
        targets,
        { x: offset.x * distance, y: offset.y * distance, opacity: 0 },
        {
          x: 0,
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
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
