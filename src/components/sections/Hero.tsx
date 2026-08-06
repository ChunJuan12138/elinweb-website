"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { IndustrialBackground } from "@/components/ui/IndustrialBackground";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
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
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
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
      className="group relative overflow-hidden"
      onMouseEnter={() => setFocused(true)}
      onFocus={() => setFocused(true)}
      tabIndex={-1}
    >
      <IndustrialBackground blur focused={focused} priority />

      <div ref={scopeRef} className="container-wide relative py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="hero-animate opacity-0 text-sm font-semibold uppercase tracking-wider text-accent">
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
