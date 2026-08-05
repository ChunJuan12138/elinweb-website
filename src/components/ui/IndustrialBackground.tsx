"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface IndustrialBackgroundProps {
  className?: string;
  blur?: boolean;
  focused?: boolean;
  children?: ReactNode;
  showOverlay?: boolean;
  imageSrc?: string;
}

export function IndustrialBackground({
  className = "",
  blur = false,
  focused = false,
  children,
  showOverlay = true,
  imageSrc = "/images/industrial/steel-mill.jpg",
}: IndustrialBackgroundProps) {
  const sceneBlur = blur && !focused ? "blur-[3px] scale-105" : "blur-0 scale-100";

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className={`absolute -inset-[5%] transition-all duration-700 ease-out ${sceneBlur}`}
        aria-hidden="true"
      >
        <Image
          src={imageSrc}
          alt="工业场景背景"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* readability overlay */}
      {showOverlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/[0.92] via-slate-950/[0.75] to-slate-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/50" />
        </>
      )}

      {children}
    </div>
  );
}
