"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface RandomFadeImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  minDelay?: number;
  maxDelay?: number;
}

export function RandomFadeImage({
  src,
  alt,
  fill,
  width,
  height,
  className = "",
  sizes,
  priority,
  minDelay = 0,
  maxDelay = 2,
}: RandomFadeImageProps) {
  const [ready, setReady] = useState(false);
  const delay = Math.random() * (maxDelay - minDelay) + minDelay;

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${className}`}
      style={{
        opacity: ready ? 1 : 0,
        transitionDelay: `${delay}s`,
      }}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      )}
    </div>
  );
}
