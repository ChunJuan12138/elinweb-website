import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {subtitle}
        </p>
      )}
      <h2 className={`mt-3 heading-lg ${light ? "text-white" : ""}`}>{title}</h2>
      {description && (
        <p className={`mt-4 body-lg ${light ? "text-steel-300" : ""}`}>{description}</p>
      )}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "muted" | "primary";
  fullHeight?: boolean;
}

export function Section({
  children,
  className = "",
  background = "white",
  fullHeight = true,
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    muted: "bg-steel-50",
    primary: "bg-primary-950",
  };

  return (
    <section
      className={`section ${bgClasses[background]} ${
        fullHeight ? "min-h-screen flex flex-col justify-center" : ""
      } ${className}`}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
}
