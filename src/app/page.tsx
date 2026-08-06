import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { StatCard } from "@/components/cards/StatCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { FadeInUp } from "@/components/animation/FadeInUp";
import { CountUpContainer } from "@/components/animation/CountUpContainer";

const stats = [
  { value: "300+", label: "余家国内外品牌厂商" },
  { value: "5000万+", label: "年营收" },
  { value: "14+", label: "年服务沉淀" },
];

const capabilities = [
  {
    title: "设备类供应为核心",
    description:
      "多品类覆盖——仪表、电气、机械等大类及细分领域。",
  },
  {
    title: "专业服务工程师团队",
    description:
      "电气、机械、自动化、仪表各专业独立工程师，24 小时现场响应。",
  },
  {
    title: "产学研合作",
    description:
      "与内蒙古科技大学机械工程学院、自动化与电气工程学院深度合作，技术服务有科研支撑。",
  },
  {
    title: "生态协同",
    description:
      "与中冶赛迪、中冶京诚、中冶东方、首钢国际、包钢设计院等设计院，上海宝冶、中国二冶、内蒙古环投、包钢西创建设、包钢综企等工程单位深度合作，大型项目全程协同。",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="立足包头、辐射包头周边工矿企业的本地化工业供应链服务商"
        subtitle="内蒙古艺林供应链科技"
        description="连接上游制造与下游生产，让两端各自专注专业。我们以服务为核心，卖货只是服务的一部分。"
        primaryCta={{ label: "公司简介", href: "/company" }}
        secondaryCta={{ label: "服务业务", href: "/business" }}
        imageSrc="/images/industrial/steel-mill.jpg"
      />

      <Section background="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeInUp>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                公司简介
              </p>
              <h2 className="mt-3 heading-lg">以服务为核心的工业供应链服务商</h2>
              <p className="mt-4 body-lg">
                我们是一家本地化工业供应链服务商——立足包头、辐射包头周边工矿企业，连接上游制造与下游生产，让两端各自专注专业。
              </p>
              <p className="mt-4 body-lg">
                我们与震坤行、欧冶等平台有相似之处，但本质不同：他们侧重卖货，服务是附带；我们以服务为核心，卖货只是服务的一部分。
              </p>
              <p className="mt-4 body-lg">
                让客户专注生产与制造，交付与售后的最后一公里，交给艺林。我们与客户共生共长。
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <PlaceholderImage
              label="工业设备与供应链服务"
              aspectRatio="aspect-[4/3]"
              variant="industrial"
              imageSrc="/images/industrial/machinery.jpg"
            />
          </FadeInUp>
        </div>
      </Section>

      <Section background="muted">
        <SectionHeader
          title="公司沿革与规模实力"
          subtitle="发展历程"
          description="2009 年起步开展业务，2010 年注册包头市艺林贸易有限责任公司；历经十余年发展，现以内蒙古艺林供应链科技有限责任公司为主体公司运营。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <CountUpContainer className="contents">
            <StaggerReveal className="contents">
              {stats.map((item) => (
                <StatCard
                  key={item.label}
                  value={item.value}
                  label={item.label}
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                />
              ))}
            </StaggerReveal>
          </CountUpContainer>
        </div>
      </Section>

      <Section background="white">
        <SectionHeader
          title="核心能力"
          subtitle="服务能力"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <StaggerReveal className="contents">
            {capabilities.map((item) => (
              <FeatureCard
                key={item.title}
                icon={
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
                }
                title={item.title}
                description={item.description}
              />
            ))}
          </StaggerReveal>
        </div>
      </Section>
    </>
  );
}
