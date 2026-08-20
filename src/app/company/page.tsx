import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { StatCard } from "@/components/cards/StatCard";
import Image from "next/image";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { CountUpContainer } from "@/components/animation/CountUpContainer";
import type { ReactNode } from "react";

const capabilities: {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
}[] = [
  {
    title: "设备类供应为核心",
    description:
      "多品类覆盖——仪表、电气、机械等大类及细分领域，依托稳定供应商网络与本地仓储能力，为工矿企业提供及时、可靠的设备与备品备件供应。",
    image: "/images/illustration_10.jpg",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    title: "专业服务工程师团队",
    description:
      "电气、机械、自动化、仪表各专业独立工程师，提供选型、安装指导、调试、故障诊断与改造升级，24 小时现场响应。",
    image: "/images/illustration_03.jpg",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
        />
      </svg>
    ),
  },
  {
    title: "产学研合作",
    description:
      "与内蒙古科技大学机械工程学院、自动化与电气工程学院深度合作，将科研能力转化为现场技术支撑，疑难问题有研究团队兜底。",
    image: "/images/illustration_08.jpg",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
  {
    title: "生态协同",
    description:
      "与中冶赛迪、中冶京诚、中冶东方、首钢国际、包钢设计院等设计院，上海宝冶、中国二冶、内蒙古环投、包钢西创建设、包钢综企等工程单位深度合作，大型项目全程协同。",
    image: "/images/illustration_09.jpg",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "300+", label: "余家国内外品牌厂商" },
  { value: "5000万+", label: "年营收" },
  { value: "14+", label: "年服务沉淀" },
];

function CapabilityCard({
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
    <div className="group flex h-full min-h-[420px] flex-col overflow-hidden rounded-xl border border-accent/60 bg-white/10 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white/15 hover:shadow-lg">
      <div className="relative h-[48%] min-h-[180px] overflow-hidden border-b border-white/20">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
        <div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
            {icon}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-steel-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CompanyPage() {
  return (
    <>
      <Hero
        title="公司简介"
        subtitle="本地化工业供应链服务商"
        description={
          <>
            <p className="indent-first-line">
              我们是一家本地化工业供应链服务商——立足包头、辐射包头周边工矿企业，连接上游制造与下游生产，让两端各自专注专业。
            </p>
            <p className="mt-4 indent-first-line">
              我们与部分工业品电商平台有相似之处，但本质不同：我们以服务为核心，卖货只是服务的一部分。
            </p>
            <p className="mt-4 indent-first-line">
              让客户专注生产与制造，交付与售后的最后一公里，交给艺林。我们与客户共生共长。
            </p>
          </>
        }
        primaryCta={{ label: "服务业务", href: "/business" }}
        imageSrc="/images/industrial/steel-mill.jpg"
        logoSrc="/images/logo.png"
        logoAlt="艺林工业供应链 Logo"
        logoPlain
      />

      <Section
        background="image"
        imageSrc="/images/industrial/electrical-room.jpg"
        fullHeight={false}
      >
        <SectionHeader
          title="公司沿革与规模实力"
          description="2009 年起步开展业务，2010 年注册包头市艺林贸易有限责任公司；历经十余年发展，现以内蒙古艺林工业供应链科技有限公司为主体公司运营。"
        />
        <CountUpContainer>
          <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-3">
            {stats.map((item) => (
              <StatCard
                key={item.label}
                value={item.value}
                label={item.label}
                icon={
                  item.label.includes("品牌厂商") ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5"
                      />
                    </svg>
                  ) : item.label.includes("年营收") ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )
                }
              />
            ))}
          </StaggerReveal>
        </CountUpContainer>
      </Section>

      <Section
        id="capabilities"
        background="image"
        imageSrc="/images/industrial/pipes-valves.jpg"
        fullHeight={false}
      >
        <SectionHeader
          title="核心能力"
          description="十四年本地化沉淀，构建起设备供应、专业团队、科研支撑与生态协同四位一体的服务能力。"
        />
        <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilities.map((item) => (
            <CapabilityCard key={item.title} {...item} />
          ))}
        </StaggerReveal>
      </Section>
    </>
  );
}
