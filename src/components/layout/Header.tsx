"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于艺林", href: "/about" },
  { label: "服务能力", href: "/services" },
  { label: "联系我们", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-200 bg-white/95 backdrop-blur">
      <div className="container-wide flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="艺林工业供应链"
            width={160}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="hidden text-lg font-bold text-primary lg:inline">
            艺林工业供应链
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-steel-700 transition hover:text-primary"
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
          className="inline-flex items-center justify-center rounded-md p-2 text-steel-700 md:hidden"
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
        <div className="border-t border-steel-200 bg-white md:hidden">
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
            <Link href="/contact" className="btn-primary w-full text-center">
              合作咨询
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
