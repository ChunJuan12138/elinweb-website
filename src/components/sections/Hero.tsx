import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,58,95,0.95)_0%,rgba(15,31,50,0.98)_100%)]" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-wide relative py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {subtitle}
          </p>
          <h1 className="mt-6 heading-xl text-white">{title}</h1>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-steel-200 md:text-xl">
              {description}
            </p>
          )}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary min-w-[160px]">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary min-w-[160px]">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
