"use client";

import { useEffect } from "react";

export function GsapReady() {
  useEffect(() => {
    document.documentElement.classList.add("gsap-ready");
  }, []);

  return null;
}
