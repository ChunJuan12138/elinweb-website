"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";
import { IndustrialBackground } from "@/components/ui/IndustrialBackground";
import { FadeInUp } from "@/components/animation/FadeInUp";
import { BlurText } from "@/components/animation/BlurText";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  fullHeight?: boolean;
  kenBurns?: boolean;
  imageSrc?: string;
  imageSrcs?: string[];
  logoSrc?: string;
  logoAlt?: string;
  logoPlain?: boolean;
  children?: ReactNode;
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
  imageSrcs,
  logoSrc,
  logoAlt,
  logoPlain = false,
  children,
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
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(".hero-animate", { y: 0, opacity: 1 });
        gsap.set(".hero-scan-line", { scaleX: 1 });
        return;
      }

      const animateElements = gsap.utils.toArray<HTMLElement>(".hero-animate");
      gsap.set(animateElements, { willChange: "transform, opacity" });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(animateElements, { willChange: "auto" });
        },
      });

      // Steel imprint: title arrives with weight and slight compression release
      tl.fromTo(
        ".hero-title",
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
        },
      );

      // Inspection scan line draws beneath the title
      tl.fromTo(
        ".hero-scan-line",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.7, ease: "power2.inOut" },
        "-=0.35",
      );

      // Supporting elements follow
      tl.fromTo(
        ".hero-body",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
        "-=0.4",
      );

      tl.fromTo(
        ".hero-actions",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.45",
      );
    },
    { scope: scopeRef },
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
        imageSrcs={imageSrcs}
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
            <div className="hero-title hero-animate opacity-0">
              <h1 className="heading-xl text-white drop-shadow-lg">
                <BlurText text={title} splitBy="words" stagger={0.08} duration={0.8} />
              </h1>
              {subtitle && (
                <h2 className="heading-lg mt-4 text-white drop-shadow-lg">
                  {subtitle}
                </h2>
              )}
              <div className="hero-scan-line mt-4 h-1 w-24 origin-left rounded-full bg-accent opacity-0" />
            </div>
            {description && (
              <div className="hero-body hero-animate opacity-0 mt-6 text-lg leading-relaxed text-steel-200 md:text-xl drop-shadow-md">
                {description}
              </div>
            )}

            <div className="hero-actions hero-animate opacity-0 mt-10 flex flex-col items-start gap-4 sm:flex-row">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="btn-primary min-w-[160px]"
                >
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
          {logoSrc && (
            <FadeInUp
              direction="up"
              delay={0.2}
              className={
                logoPlain
                  ? "group relative mx-auto aspect-square w-full max-w-[360px] animate-float overflow-hidden md:max-w-[420px] lg:max-w-[520px]"
                  : "group relative mx-auto aspect-square w-full max-w-[360px] animate-float overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm"
              }
            >
              <div className="absolute inset-0 z-10 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%)] translate-x-[-100%] transition-transform duration-1000 group-hover:translate-x-[100%]" />
              <Image
                src={logoSrc}
                alt={logoAlt || ""}
                fill
                className="object-contain p-4 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 360px, (max-width: 1024px) 420px, 520px"
                priority
              />
            </FadeInUp>
          )}
        </div>

        {children && (
          <div className="hero-bottom-content mt-12 w-full">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
