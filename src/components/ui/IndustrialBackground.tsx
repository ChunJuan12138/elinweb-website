"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

interface IndustrialBackgroundProps {
  className?: string;
  blur?: boolean;
  focused?: boolean;
  children?: ReactNode;
  showOverlay?: boolean;
  imageSrc?: string;
  imageSrcs?: string[];
  priority?: boolean;
  kenBurns?: boolean;
  imageBlur?: boolean;
  slideshowInterval?: number;
}

export function IndustrialBackground({
  className = "",
  blur = false,
  focused = false,
  children,
  showOverlay = true,
  imageSrc = "/images/industrial/steel-mill.jpg",
  imageSrcs,
  priority = false,
  kenBurns = false,
  imageBlur = true,
  slideshowInterval = 6000,
}: IndustrialBackgroundProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = imageSrcs && imageSrcs.length > 0 ? imageSrcs : [imageSrc];

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, slideshowInterval);
    return () => clearInterval(timer);
  }, [slides.length, slideshowInterval]);

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
        } ${imageBlur ? "blur-sm" : ""}`}
        aria-hidden="true"
      >
        {slides.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={priority && index === 0}
            sizes="100vw"
            loading={priority && index === 0 ? "eager" : "lazy"}
          />
        ))}
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
