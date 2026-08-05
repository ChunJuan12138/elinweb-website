"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "公司简介", href: "/company" },
  { label: "服务业务", href: "/business" },
  { label: "核心优势", href: "/advantages" },
  { label: "收费标准", href: "/pricing" },
  { label: "供应商合作", href: "/partners" },
  { label: "生态网络", href: "/ecosystem" },
  { label: "发展历程", href: "/history" },
  { label: "联系我们", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="container-wide flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative flex h-[72px] w-[100px] items-center justify-center overflow-hidden rounded-lg bg-primary-50 transition-all duration-500 group-hover:bg-primary-100 md:h-[88px] md:w-[110px]">
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
            <span className="text-lg font-bold leading-tight text-primary md:text-xl">
              艺林工业供应链
            </span>
            <span className="text-xs text-steel-500">
              包钢本土化工业供应链全包服务商
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            合作咨询
          </Link>
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
            <Link href="/contact" className="btn-primary w-full text-center"
            >
              合作咨询
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
