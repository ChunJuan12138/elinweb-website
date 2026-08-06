"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";

interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
  once?: boolean;
}

export function FadeInUp({
  children,
  className = "",
  y = 40,
  duration = 0.7,
  delay = 0,
  start = "top 85%",
  once = true,
}: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      if (prefersReducedMotion()) {
        gsap.set(ref.current, { y: 0, opacity: 1, willChange: "auto" });
        return;
      }

      gsap.set(ref.current, { willChange: "transform, opacity" });

      gsap.fromTo(
        ref.current,
        { y, opacity: 0 },
        {
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
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`reveal opacity-0 ${className}`}>
      {children}
    </div>
  );
}
