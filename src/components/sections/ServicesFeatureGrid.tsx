"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";

interface ServicesFeatureGridProps {
  children: ReactNode;
  className?: string;
}

export function ServicesFeatureGrid({ children, className = "" }: ServicesFeatureGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const items = gsap.utils.toArray<HTMLElement>(ref.current.children);
      if (prefersReducedMotion()) {
        gsap.set(items, { y: 0, opacity: 1 });
        return;
      }

      gsap.fromTo(
        items,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={`services-feature-grid ${className}`}>
      {children}
    </div>
  );
}
