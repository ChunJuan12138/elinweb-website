"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { IndustrialBackground } from "@/components/ui/IndustrialBackground";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showLogo?: boolean;
  children?: ReactNode;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  showLogo = false,
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLElement>(".hero-animate");
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
      <IndustrialBackground blur focused={focused} />

      <div ref={scopeRef} className="container-wide relative py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            {showLogo && (
              <div className="hero-animate opacity-0 group/logo mb-8 inline-flex items-center gap-4 rounded-xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/15">
                <div className="relative h-16 w-40 shrink-0 transition-transform duration-500 group-hover/logo:scale-105">
                  <Image
                    src="/images/logo.png"
                    alt="艺林工业供应链"
                    fill
                    className="object-contain object-left drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                    priority
                  />
                </div>
                <div className="hidden flex-col border-l border-white/20 pl-4 sm:flex">
                  <span className="text-lg font-bold text-white">艺林工业供应链</span>
                  <span className="text-xs text-steel-300">深耕包钢 14 年+</span>
                </div>
              </div>
            )}

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

          <div className="relative hidden lg:block">
            {children || (
              <div className="group/card relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl ring-1 ring-white/5 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover/card:opacity-100"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(194,58,37,0.15) 0%, transparent 60%)`,
                  }}
                />
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <div className="relative h-28 w-64 transition-transform duration-700 group-hover/card:scale-110">
                    <Image
                      src="/images/logo.png"
                      alt="艺林工业供应链"
                      fill
                      className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      priority
                    />
                  </div>
                  <p className="mt-6 text-lg font-medium text-white">内蒙古艺林工业供应链科技有限公司</p>
                  <p className="mt-2 text-sm text-steel-300">
                    工业仪表 · 电气 · 矿山设备 · 阀门 · 执行机构 · 空压机 · 钢丝绳
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
