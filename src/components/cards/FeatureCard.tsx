"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  animate?: boolean;
}

export function FeatureCard({ icon, title, description, animate = true }: FeatureCardProps) {
  const ref = useScrollReveal<HTMLDivElement>({ y: 48, duration: 0.7, start: "top 88%", enabled: animate });

  const baseClass =
    "feature-card group relative overflow-hidden rounded-xl border border-steel-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg md:p-8";

  return (
    <>
      <noscript>
        <style>{`.feature-card { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
      <div ref={ref} className={animate ? `opacity-0 ${baseClass}` : baseClass}>
        <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>
          <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-steel-600">{description}</p>
        </div>
      </div>
    </>
  );
}
