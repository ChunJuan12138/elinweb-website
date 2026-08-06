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
  priority?: boolean;
  kenBurns?: boolean;
}

export function IndustrialBackground({
  className = "",
  blur = false,
  focused = false,
  children,
  showOverlay = true,
  imageSrc = "/images/industrial/steel-mill.jpg",
  priority = false,
  kenBurns = false,
}: IndustrialBackgroundProps) {
  const sceneTransform = kenBurns
    ? ""
    : blur
    ? focused
      ? "scale-[1.03] opacity-100"
      : "scale-100 opacity-95"
    : "scale-100 opacity-100";

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div
        className={`absolute -inset-[5%] will-change-transform ${sceneTransform} ${
          kenBurns
            ? "animate-ken-burns"
            : "transition-all duration-700 ease-out"
        }`}
        aria-hidden="true"
      >
        <Image
          src={imageSrc}
          alt="工业场景背景"
          fill
          className="object-cover"
          priority={priority}
          sizes="100vw"
        />
      </div>

      {/* readability overlay - lighter for brighter industrial photos */}
      {showOverlay && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/[0.72] via-primary-900/[0.52] to-primary-800/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-transparent to-primary-900/30" />
        </>
      )}

      {children}
    </div>
  );
}
