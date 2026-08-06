"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";
import { IndustrialBackground } from "@/components/ui/IndustrialBackground";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  fullHeight?: boolean;
  kenBurns?: boolean;
  imageSrc?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  fullHeight = true,
  kenBurns = true,
  imageSrc,
}: HeroProps) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const el = scopeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFocused(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLElement>(".hero-animate");
      gsap.set(elements, { willChange: "transform, opacity" });
      gsap.fromTo(
        elements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: prefersReducedMotion() ? 0.1 : 0.9,
          ease: "power2.out",
          stagger: 0.14,
          delay: 0.15,
          onComplete: () => {
            gsap.set(elements, { willChange: "auto" });
          },
        }
      );
    },
    { scope: scopeRef }
  );

  return (
    <section
      className={`group relative overflow-hidden ${
        fullHeight ? "min-h-screen flex items-center" : ""
      }`}
      onMouseEnter={() => setFocused(true)}
      onFocus={() => setFocused(true)}
      tabIndex={-1}
    >
      <IndustrialBackground
        blur={kenBurns}
        focused={focused}
        priority
        imageSrc={imageSrc}
        kenBurns={kenBurns}
      />

      <div
        ref={scopeRef}
        className={`container-wide relative w-full ${
          fullHeight ? "py-16 md:py-24 lg:py-32" : "py-16 md:py-20"
        }`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="hero-animate opacity-0 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-sm sm:text-sm">
              {subtitle}
            </p>
            <h1 className="hero-animate opacity-0 mt-4 heading-xl text-white drop-shadow-lg">
              {title}
            </h1>
            {description && (
              <p className="hero-animate opacity-0 mt-6 text-lg leading-relaxed text-steel-200 md:text-xl drop-shadow-md">
                {description}
              </p>
            )}

            <div className="hero-animate opacity-0 mt-10 flex flex-col items-start gap-4 sm:flex-row">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary min-w-[160px]">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn-secondary min-w-[160px]"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
