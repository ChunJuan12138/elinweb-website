import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { FadeInUp } from "@/components/animation/FadeInUp";
import { CountUpContainer } from "@/components/animation/CountUpContainer";
import { RandomFadeImage } from "@/components/ui/RandomFadeImage";
import Link from "next/link";
import type { ReactNode } from "react";

const stats: { value: string; label: string; icon: ReactNode }[] = [
  {
    value: "300+",
    label: "余家国内外品牌厂商",
    icon: (
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
    ),
  },
  {
    value: "5000万+",
    label: "年营收",
    icon: (
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
    ),
  },
  {
    value: "14+",
    label: "年服务沉淀",
    icon: (
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
    ),
  },
];

const capabilities: { title: string; description: string; icon: ReactNode }[] =
  [
    {
      title: "设备类供应为核心",
      description: "仪表、电气、机械等多品类覆盖，满足工矿企业一站式采购需求。",
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "专业服务工程师团队",
      description:
        "电气、机械、自动化、仪表各专业工程师，7×24 小时现场响应。",
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
        "与内蒙古科技大学深度合作，技术服务有科研支撑。",
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
        "与中冶赛迪、中冶京诚、包钢设计院等深度合作，大型项目全程协同。",
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

export default function HomePage() {
  return (
    <>
     <Hero
       title="立足包头、辐射包头周边工矿企业的本地化工业供应链服务商"
       description="连接上游制造与下游生产，让两端各自专注专业。我们以服务为核心，卖货只是服务的一部分。"
       primaryCta={{ label: "立即咨询", href: "/#contact" }}
       secondaryCta={{ label: "服务业务", href: "/business" }}
       imageSrc="/images/industrial/steel-mill.jpg"
       logoSrc="/images/logo.png"
       logoAlt="艺林工业供应链"
       logoPlain
     />

      <Section
        background="image"
        imageSrc="/images/industrial/machinery.jpg"
        fullHeight={false}
        className="py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <FadeInUp direction="up">
            <div>
              <h2 className="heading-lg text-white">公司简介</h2>
              <p className="mt-4 body-lg text-steel-200">
                我们是一家本地化工业供应链服务商——立足包头、辐射包头周边工矿企业，连接上游制造与下游生产，让两端各自专注专业。
              </p>
              <div className="mt-8">
                <Link
                  href="/business"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-accent/90"
                >
                  服务业务
                </Link>
              </div>
            </div>
         </FadeInUp>
        </div>

        <FadeInUp direction="up" distance={30}>
          <div className="mx-auto mt-12 max-w-4xl rounded-xl border border-accent/60 bg-white/10 p-6 text-center shadow-sm backdrop-blur-sm md:p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              以服务为核心，卖货只是服务的一部分
            </h3>
            <p className="mt-6 body-lg text-steel-200">
              我们与震坤行、欧冶等平台有相似之处，但本质不同：他们侧重卖货，服务是附带；我们以服务为核心，卖货只是服务的一部分。
            </p>
            <p className="mt-4 body-lg text-steel-200">
              让客户专注生产与制造，交付与售后的最后一公里，交给艺林。我们与客户共生共长。
            </p>
          </div>
        </FadeInUp>
      </Section>

      <Section
        background="image"
        imageSrc="/images/industrial/electrical-room.jpg"
      >
        <SectionHeader
          title="公司沿革与规模实力"
          description="2009 年起步开展业务，2010 年注册包头市艺林贸易有限责任公司；历经十余年发展，现以内蒙古艺林供应链科技有限责任公司为主体公司运营。"
        />
        <div className="mt-12">
          <CountUpContainer>
            <StaggerReveal
              selector=".stat-strip-item"
              direction="up"
              distance={30}
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
                <div className="absolute left-8 right-8 top-1/2 hidden h-px -translate-y-1/2 bg-white/10 md:block" />
                <div className="relative grid gap-8 md:grid-cols-3">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="stat-strip-item flex flex-col items-center gap-3 text-center"
                    >
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
                        {item.icon}
                      </div>
                      <p
                        data-count-up={item.value}
                        className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                      >
                        {item.value}
                      </p>
                      <p className="text-sm text-steel-300">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerReveal>
          </CountUpContainer>
        </div>
      </Section>

      <Section
        background="image"
        imageSrc="/images/industrial/pipes-valves.jpg"
        fullHeight={false}
      >
        <SectionHeader title="核心能力" />
        <StaggerReveal selector=".bento-card" direction="up" distance={30} className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="bento-card h-full"
              >
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  animate={false}
                />
              </div>
            ))}
          </StaggerReveal>
      </Section>
      <Section
        id="contact"
        background="solid-primary"
        fullHeight={false}
        className="py-20 md:py-28"
      >
        <FadeInUp direction="up" distance={30}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-lg text-white">
              让交付与售后的最后一公里，交给艺林
            </h2>
            <p className="mt-4 body-lg text-steel-200">
              无论您是下游工矿企业需要设备供应与现场服务，还是上游制造商希望打通包头市场，欢迎与我们联系，专人对接。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:04722110904"
                className="btn-primary min-w-[180px]"
              >
                0472-2110904
              </a>
              <a
                href="mailto:yuanzhongke@elincom.cn"
                className="btn-secondary min-w-[180px]"
              >
                yuanzhongke@elincom.cn
              </a>
            </div>
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-steel-300">
              <span>电话</span>
              <a
                href="tel:04722110904"
                className="text-white transition-colors hover:text-accent"
              >
                0472-2110904
              </a>
              <span className="hidden sm:inline" aria-hidden="true">
                |
              </span>
              <span>邮箱</span>
              <a
                href="mailto:yuanzhongke@elincom.cn"
                className="text-white transition-colors hover:text-accent"
              >
                yuanzhongke@elincom.cn
              </a>
              <span className="hidden sm:inline" aria-hidden="true">
                |
              </span>
              <span>地址 包头市昆都仑区包钢中桥停车场北</span>
            </p>
            <div className="mt-8">
              <a
                href="https://uri.amap.com/search?keyword=%E5%8C%85%E5%A4%B4%E5%B8%82%E6%98%86%E9%83%BD%E4%BB%91%E5%8C%BA%E5%8C%85%E9%92%A2%E4%B8%AD%E6%A1%A5%E5%81%9C%E8%BD%A6%E5%9C%BA%E5%8C%97"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block w-full max-w-2xl overflow-hidden rounded-xl border border-accent/60 bg-white/5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg"
                aria-label="在地图中查看公司位置"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <RandomFadeImage
                    src="/images/map.jpg"
                    alt="公司位置地图（点击在高德地图中打开导航）"
                    fill
                    className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 672px"
                    minDelay={0.3}
                    maxDelay={1.5}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-white drop-shadow-md">
                      包头市昆都仑区包钢中桥停车场北
                    </p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      导航
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </FadeInUp>
      </Section>
    </>
  );
}
