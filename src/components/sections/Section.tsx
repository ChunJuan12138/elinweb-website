import { ReactNode } from "react";
import Image from "next/image";

interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  description,
  centered = true,
  light = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className={`heading-lg ${light ? "text-white drop-shadow-md" : ""}`}>{title}</h2>
      {description && (
        <p className={`mt-4 body-lg ${light ? "text-steel-200 drop-shadow-md" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

type BackgroundType = "image" | "solid-primary";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: BackgroundType;
  fullHeight?: boolean;
  imageSrc?: string;
  imageClassName?: string;
  imageBlur?: boolean;
  id?: string;
}

export function Section({
  children,
  className = "",
  background = "image",
  fullHeight = true,
  imageSrc = "/images/industrial/steel-mill.jpg",
  imageClassName = "",
  imageBlur = true,
  id,
}: SectionProps) {
  const useImage = background === "image";

  return (
    <section
      id={id}
      className={`group relative overflow-hidden ${
        fullHeight ? "min-h-screen flex flex-col justify-center" : ""
      } ${useImage ? "text-white" : ""} ${
        background === "solid-primary" ? "bg-primary-950 text-white" : ""
      } ${className}`}
    >
      {useImage && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className={`absolute -inset-[5%] ${imageBlur ? "blur-sm" : ""} ${imageClassName}`}>
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
              loading="lazy"
            />
          </div>
          {/* readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-primary-900/20" />
        </div>
      )}

      <div className="container-wide relative z-10">{children}</div>
    </section>
  );
}
