"use client";

import { useState } from "react";

import { IndustrialBackground } from "./IndustrialBackground";

interface PlaceholderImageProps {
  label: string;
  aspectRatio?: string;
  className?: string;
  variant?: "default" | "industrial";
  imageSrc?: string;
}

export function PlaceholderImage({
  label,
  aspectRatio = "aspect-video",
  className = "",
  variant = "default",
  imageSrc,
}: PlaceholderImageProps) {
  const [focused, setFocused] = useState(false);

  if (variant === "industrial") {
    return (
      <div
        className={`group relative flex items-end justify-center overflow-hidden rounded-xl ${aspectRatio} ${className}`}
        onMouseEnter={() => setFocused(true)}
        onMouseLeave={() => setFocused(false)}
      >
        {imageSrc ? (
          <>
            <IndustrialBackground
              blur
              focused={focused}
              showOverlay={false}
              imageSrc={imageSrc}
              imageBlur={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-primary-950/20 to-transparent" />
            <div className="relative z-10 px-6 pb-6 text-center">
              <p className="text-sm font-semibold text-white drop-shadow-md">
                {label}
              </p>
            </div>
          </>
        ) : (
          <>
            <IndustrialBackground blur focused={focused} showOverlay imageSrc={imageSrc} imageBlur={false} />
            <div className="relative z-10 px-6 text-center">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold text-white drop-shadow-md">{label}</p>
              <p className="mt-1 text-xs text-steel-300">图片占位，后续替换</p>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-steel-300 bg-steel-50 ${aspectRatio} ${className}`}
    >
      <div className="text-center px-6">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-steel-200 text-steel-700">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-steel-700">{label}</p>
        <p className="mt-1 text-xs text-steel-700">图片占位，后续替换</p>
      </div>
    </div>
  );
}
