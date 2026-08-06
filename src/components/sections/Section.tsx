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
      <h2 className={`heading-lg ${light ? "text-white" : ""}`}>{title}</h2>
      {description && (
        <p className={`mt-4 body-lg ${light ? "text-steel-200" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

type BackgroundType = "white" | "muted" | "primary" | "solid-primary" | "image";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: BackgroundType;
  fullHeight?: boolean;
  imageSrc?: string;
  overlay?: "light" | "medium" | "heavy";
  imageClassName?: string;
  id?: string;
}

const overlayClasses = {
  light: "bg-primary-950/55",
  medium: "bg-primary-950/70",
  heavy: "bg-primary-950/82",
};

export function Section({
  children,
  className = "",
  background = "white",
  fullHeight = true,
  imageSrc = "/images/industrial/steel-mill.jpg",
  overlay = "medium",
  imageClassName = "",
  id,
}: SectionProps) {
  const useImage =
    background === "white" || background === "muted" || background === "image";

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
          <div className={`absolute -inset-[5%] ${imageClassName}`}>
            <Image
              src={imageSrc}
              alt="工业场景背景"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </div>
          {/* readability overlay */}
          <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-primary-900/20" />
        </div>
      )}

      {background === "primary" && (
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage: `url("${imageSrc}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px) brightness(0.4)",
          }}
        />
      )}

      <div className="container-wide relative z-10">{children}</div>
    </section>
  );
}
