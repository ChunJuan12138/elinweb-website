"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HangingQR() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkContact = () => {
      if (dismissed) return;
      const hash = window.location.hash;
      const contactSection = document.getElementById("contact");
      let inView = false;
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        inView = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setVisible(hash === "#contact" || inView);
    };

    checkContact();
    window.addEventListener("hashchange", checkContact);
    window.addEventListener("scroll", checkContact, { passive: true });
    return () => {
      window.removeEventListener("hashchange", checkContact);
      window.removeEventListener("scroll", checkContact);
    };
  }, [dismissed]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  if (!visible) return null;

  return (
    <div className="fixed right-4 top-20 z-50 hidden md:block">
      <div className="origin-top animate-swing">
        {/* Lanyard string */}
        <div className="mx-auto h-16 w-0.5 bg-gradient-to-b from-white/60 to-white/20" />
        {/* QR card */}
        <div className="relative rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md">
          <button
            onClick={handleDismiss}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-steel-700 text-white transition hover:bg-steel-600"
            aria-label="关闭"
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative h-28 w-28 overflow-hidden rounded-lg bg-white p-1">
            <Image
              src="/images/qr-code.png"
              alt="扫码联系我们"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-2 text-center text-xs text-white drop-shadow-md">
            扫码联系我们
          </p>
        </div>
      </div>
    </div>
  );
}
