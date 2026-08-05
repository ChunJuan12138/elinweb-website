import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  showLogo?: boolean;
  children?: ReactNode;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  showLogo = false,
  children,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,39,64,0.98)_0%,rgba(15,76,129,0.92)_50%,rgba(11,39,64,0.95)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-wide relative py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            {showLogo && (
              <div className="mb-8 inline-flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="relative h-16 w-40 shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="艺林工业供应链"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
                <div className="hidden flex-col border-l border-white/20 pl-4 sm:flex">
                  <span className="text-lg font-bold text-white">艺林工业供应链</span>
                  <span className="text-xs text-steel-300">深耕包钢 14 年+</span>
                </div>
              </div>
            )}

            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              {subtitle}
            </p>
            <h1 className="mt-4 heading-xl text-white">{title}</h1>
            {description && (
              <p className="mt-6 text-lg leading-relaxed text-steel-200 md:text-xl">
                {description}
              </p>
            )}

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary min-w-[160px]">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn-secondary min-w-[160px]"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          <div className="relative hidden lg:block">
            {children || (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <div className="relative h-24 w-56">
                    <Image
                      src="/images/logo.png"
                      alt="艺林工业供应链"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <p className="mt-6 text-lg font-medium text-white">内蒙古艺林工业供应链科技有限公司</p>
                  <p className="mt-2 text-sm text-steel-300">
                    工业仪表 · 电气 · 矿山设备 · 阀门 · 执行机构 · 空压机 · 钢丝绳
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
