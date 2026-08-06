"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";

type RevealDirection = "up" | "down" | "left" | "right";

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  delay?: number;
  start?: string;
  once?: boolean;
}

const directionOffset: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
};

export function FadeInUp({
  children,
  className = "",
  direction = "up",
  distance = 40,
  duration = 0.7,
  delay = 0,
  start = "top 85%",
  once = true,
}: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  const offset = directionOffset[direction];

  useGSAP(
    () => {
      if (!ref.current) return;

      if (prefersReducedMotion()) {
        gsap.set(ref.current, { x: 0, y: 0, opacity: 1, willChange: "auto" });
        return;
      }

      gsap.set(ref.current, { willChange: "transform, opacity" });

      gsap.fromTo(
        ref.current,
        { x: offset.x * distance, y: offset.y * distance, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            once,
          },
          onComplete: () => {
            gsap.set(ref.current, { willChange: "auto" });
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`reveal opacity-0 ${className}`}>
      {children}
    </div>
  );
}
