import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { FadeInUp } from "@/components/animation/FadeInUp";

const benefits = [
  {
    title: "本地贴身服务",
    description: "我们在包头、在工矿现场，替您走完最后这段路。",
  },
  {
    title: "设计院入口",
    description:
      "与中冶赛迪、中冶京诚、中冶东方、首钢国际、包钢设计院深度合作——大型项目设备选型，您的产品有机会设计进项目方案。",
  },
  {
    title: "工程单位协同",
    description:
      "与上海宝冶、中国二冶、内蒙古环投、包钢西创建设、包钢综企等深度合作——从供应到安装、检修、运维全程落地。",
  },
  {
    title: "专业服务承接",
    description:
      "电气、机械、自动化、仪表专业工程师团队 24 小时现场响应，售后无忧。",
  },
  {
    title: "高校科研支撑",
    description: "与内蒙古科技大学产学研合作，技术问题有研究力量兜底。",
  },
  {
    title: "长期稳定回款",
    description: "服务对象为包钢等大型工矿企业，资质正规、信用良好。",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Hero
        title="供应商合作邀请"
        description="您专注制造，交付与售后的最后一公里，交给艺林。"
        primaryCta={{ label: "生态网络", href: "/ecosystem" }}
        imageSrc="/images/industrial/machinery.jpg"
      />

      <Section
        background="image"
        imageSrc="/images/industrial/steel-mill.jpg"
        fullHeight={false}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeInUp>
            <div>
              <h2 className="heading-lg text-white">
                您的产品走了十万八千里，最后一公里我们来跑
              </h2>
              <p className="mt-4 body-lg text-steel-200">
                您的产品从工厂出发，走了生产、质检、出厂，您全程专业。但从出厂到客户现场、再到售后，这最后一公里：物流配送、到货验收、现场问题、退换协调、使用指导……既耗精力又难覆盖。
              </p>
              <p className="mt-4 body-lg text-steel-200">
                这一公里，正是我们的主场。
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <PlaceholderImage
              label="供应商合作与交付协同"
              aspectRatio="aspect-[4/3]"
              variant="industrial"
              imageSrc="/images/industrial/machinery.jpg"
            />
          </FadeInUp>
        </div>
      </Section>

      <Section
        background="image"
        imageSrc="/images/industrial/pipes-valves.jpg"
      >
        <SectionHeader
          title="与艺林合作，您将获得"
          description="产品+本地服务，共同服务好每一个客户。"
        />
        <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                }
                title={item.title}
                description={item.description}
              />
            ))}
          </StaggerReveal>
      </Section>
    </>
  );
}
