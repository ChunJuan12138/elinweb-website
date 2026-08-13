"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "company-intro", label: "公司简介" },
  { id: "company-history", label: "公司沿革" },
  { id: "core-capabilities", label: "核心能力" },
  { id: "contact-cta", label: "联系我们" },
];

export function FloatingHomeNav() {
  const [activeId, setActiveId] = useState<string>(navItems[0].id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.6;
      setVisible(scrollY > heroHeight);

      let current = navItems[0].id;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            current = item.id;
          }
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!visible) return null;

  return (
    <nav
      className="fixed bottom-8 left-8 z-40 hidden rounded-2xl border border-white/10 bg-black/50 p-3 shadow-xl backdrop-blur-md md:block"
      aria-label="首页快速导航"
    >
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                  isActive
                    ? "scale-110 bg-accent/90 font-bold text-white shadow-lg"
                    : "bg-transparent text-sm text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    isActive ? "h-2.5 w-2.5 bg-white" : "h-2 w-2 bg-white/40"
                  }`}
                />
                <span className={`whitespace-nowrap transition-all duration-300 ${isActive ? "text-base" : ""}`}>
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
