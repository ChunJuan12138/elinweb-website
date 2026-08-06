"use client";

import { ReactNode, memo } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  batch?: boolean;
}

export const StatCard = memo(function StatCard({ value, label, icon, batch = true }: StatCardProps) {
  const cardRef = useScrollReveal<HTMLDivElement>({ y: 40, duration: 0.6, start: "top 88%", enabled: !batch });
  const [valueRef] = useCountUp<HTMLParagraphElement>({ value, duration: 2, start: "top 88%", enabled: !batch });

  return (
    <>
      <noscript>
        <style>{`.stat-card { opacity: 1 !important; transform: none !important; }`}</style>
      </noscript>
      <div ref={cardRef} className={`${batch ? "reveal opacity-0" : "opacity-0"} stat-card group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10`}>
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {icon && (
          <div className="relative mx-auto mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
            {icon}
          </div>
        )}
        <p ref={valueRef} data-count-up={batch ? value : undefined} className="relative text-3xl font-bold text-white md:text-4xl">{value}</p>
        <p className="relative mt-2 text-sm text-steel-300">{label}</p>
      </div>
    </>
  );
});
