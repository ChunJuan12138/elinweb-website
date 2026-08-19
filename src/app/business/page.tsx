import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { ContactSection } from "@/components/sections/ContactSection";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { FadeInUp } from "@/components/animation/FadeInUp";
import Image from "next/image";
import type { ReactNode } from "react";

const services: {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
}[] = [
  {
    title: "设备与备品备件供应",
    description:
      "以设备类为核心，覆盖仪表、电气、机械大类及流量、分析、控制、高低压、变频、自动化、传动、泵阀等细分品类；原燃料等品类同步拓展。",
    image: "/images/illustration_10.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="1" y="3" width="22" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="1" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "专业技术服务",
    description:
      "电气、机械、自动化、仪表专业工程师团队，提供选型、安装指导、调试、故障诊断、改造升级等现场服务，24 小时响应。",
    image: "/images/illustration_03.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
        <line x1="9.69" y1="8" x2="21.17" y2="8" />
        <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
        <line x1="9.69" y1="16" x2="3.34" y2="17.94" />
        <line x1="14.31" y1="16" x2="2.83" y2="16" />
        <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
      </svg>
    ),
  },
  {
    title: "仪表与环保运维",
    description:
      "烟气监测、水质监测等在线监测系统运维，自营承接并与内蒙古环投深度合作联合实施。",
    image: "/images/illustration_04.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "物流与交付服务",
    description:
      "到货验收、卸货协调、现场配送——交付的最后一公里。",
    image: "/images/illustration_05.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="1" y="3" width="15" height="13" />
        <polyline points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "售后与陪伴服务",
    description:
      "现场问题响应、退换货协调、使用指导、备件补充——售后的最后一公里。",
    image: "/images/illustration_02.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "工程协同",
    description:
      "与设计院、施工检修单位联动，参与大型项目设备选型、供应、安装、检修全流程。",
    image: "/images/illustration_01.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
      </svg>
    ),
  },
];

const serviceProcess = [
  "需求确认",
  "选型报价",
  "合同签订",
  "供货交付",
  "验收确认",
  "售后跟踪",
];

function ServiceCard({
  title,
  description,
  image,
  icon,
}: {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-accent/60 bg-white/10 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white/15 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
          {icon}
        </div>
        <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-300">
          {description}
        </p>
        <a
          href="/contact"
          className="mt-5 inline-flex items-center text-sm font-semibold text-accent transition-colors hover:text-white"
        >
          了解详情
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function BusinessPage() {
  return (
    <>
      <Hero
        title="服务业务"
        description="服务包钢等大型工矿企业及包头周边工矿客户，以及上游设备、材料生产制造企业。"
        primaryCta={{ label: "核心优势", href: "/advantages" }}
        imageSrc="/images/industrial/pipes-valves.jpg"
      />

      <Section
        background="image"
        imageSrc="/images/industrial/machinery.jpg"
        fullHeight={false}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeInUp>
            <div className="rounded-xl border border-accent/60 bg-white/10 p-6 shadow-sm backdrop-blur-sm md:p-8 lg:p-10">
              <h2 className="heading-lg text-white drop-shadow-md">
                连接上下游的本地化服务枢纽
              </h2>
              <p className="mt-4 body-lg text-steel-200 drop-shadow-md">
                我们的服务对象包括包钢等大型工矿企业及包头周边工矿客户，同时也面向上游设备、材料生产制造企业。
              </p>
              <p className="mt-4 body-lg text-steel-200 drop-shadow-md">
                对下游客户，我们是随叫随到的现场服务团队；对上游厂家，我们是打通本地市场、走完最后一公里的可靠伙伴。
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <PlaceholderImage
              label="工业现场服务与交付"
              aspectRatio="aspect-[4/3]"
              variant="industrial"
              imageSrc="/images/industrial/pipes-valves.jpg"
            />
          </FadeInUp>
        </div>
      </Section>

      <Section
        id="services"
        background="image"
        imageSrc="/images/industrial/electrical-room.jpg"
        fullHeight={false}
      >
        <SectionHeader
          title="服务能力"
          description="需求确认 → 选型报价 → 合同签订 → 供货交付 → 验收确认 → 售后跟踪，全流程专人对接"
        />
        <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </StaggerReveal>

        <FadeInUp direction="up" distance={30} className="mt-16">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 md:gap-4">
            {serviceProcess.map((step, index) => (
              <div key={step} className="flex items-center gap-3 md:gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md md:h-12 md:w-12">
                    {index + 1}
                  </div>
                  <span className="mt-2 text-xs font-medium text-steel-300 md:text-sm">
                    {step}
                  </span>
                </div>
                {index < serviceProcess.length - 1 && (
                  <span className="text-lg text-accent md:text-xl" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeInUp>
      </Section>

      <ContactSection showMap={false} />
    </>
  );
}
