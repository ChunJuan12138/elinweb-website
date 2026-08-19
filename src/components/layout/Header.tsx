"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "关于艺林", href: "/company" },
  { label: "服务业务", href: "/business" },
  { label: "核心优势", href: "/advantages" },
  { label: "收费标准", href: "/pricing" },
  { label: "合作生态", href: "/ecosystem" },
  { label: "发展历程", href: "/history" },
];

const contactCta = { label: "联系我们", href: "/contact" };

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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
          : "border-b border-white/10 bg-gradient-to-b from-black/70 via-black/40 to-transparent text-white backdrop-blur-sm"
      }`}
    >
      <div className="container-wide flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="group flex items-center gap-4">
          <div
            className={`relative flex items-center justify-center overflow-hidden rounded-lg transition-all duration-500 ${
              scrolled
                ? "h-[56px] w-[80px] bg-primary-50 group-hover:bg-primary-100 md:h-[64px] md:w-[90px]"
                : "h-[72px] w-[100px] border border-white/20 bg-white/10 md:h-[88px] md:w-[110px]"
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
            <span className={`font-bold leading-tight transition-all duration-300 ${scrolled ? "text-lg text-primary md:text-xl" : "text-xl text-white md:text-2xl"}`}>
              艺林工业供应链
            </span>
            <span className={`text-xs transition-all duration-300 ${scrolled ? "text-steel-700" : "text-white/80"}`}>
              包钢本土化工业供应链服务商
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                isActive(item.href)
                  ? "text-accent after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent"
                  : scrolled
                    ? "text-steel-700 hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                    : "text-white/90 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={contactCta.href}
            className="btn-primary px-5 py-2.5 text-sm"
          >
            {contactCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className={`inline-flex cursor-pointer items-center justify-center rounded-md p-2 lg:hidden ${scrolled ? "text-steel-700" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="切换导航"
          aria-expanded={mobileOpen}
        >
          <svg
            className="pointer-events-none h-6 w-6"
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

      <div
        className={`overflow-hidden border-t border-steel-200 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-wide flex flex-col gap-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium transition-colors ${
                isActive(item.href)
                  ? "text-accent"
                  : "text-steel-700 hover:text-primary"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={contactCta.href}
            className="btn-primary mt-2 text-center"
            onClick={() => setMobileOpen(false)}
          >
            {contactCta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}
