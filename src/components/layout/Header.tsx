"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "公司简介", href: "/company" },
  { label: "服务业务", href: "/business" },
  { label: "核心优势", href: "/advantages" },
  { label: "收费标准", href: "/pricing" },
  { label: "供应商合作", href: "/partners" },
  { label: "生态网络", href: "/ecosystem" },
  { label: "发展历程", href: "/history" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-steel-200 bg-white/95 shadow-md backdrop-blur"
          : "border-b border-white/10 bg-white/80 shadow-sm backdrop-blur"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between md:h-24">
        <Link href="/company" className="group flex items-center gap-4">
          <div
            className={`relative flex items-center justify-center overflow-hidden rounded-lg bg-primary-50 transition-all duration-500 group-hover:bg-primary-100 ${
              scrolled ? "h-[56px] w-[80px] md:h-[64px] md:w-[90px]" : "h-[72px] w-[100px] md:h-[88px] md:w-[110px]"
            }`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.6)_50%,transparent_75%)] translate-x-[-100%] transition-transform duration-1000 group-hover:translate-x-[100%]" />
            <Image
              src="/images/logo.png"
              alt="艺林工业供应链"
              fill
              className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          <div className="hidden flex-col justify-center lg:flex">
            <span className={`font-bold leading-tight transition-all duration-300 ${scrolled ? "text-lg text-primary md:text-xl" : "text-xl text-primary md:text-2xl"}`}>
              艺林工业供应链
            </span>
            <span className={`transition-all duration-300 ${scrolled ? "text-[10px] text-steel-500" : "text-xs text-steel-500"}`}>
              包钢本土化工业供应链服务商
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-steel-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="切换导航"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-steel-200 bg-white lg:hidden">
          <div className="container-wide flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-steel-700 hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
