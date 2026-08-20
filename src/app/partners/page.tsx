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

const benefitIcons = [
  <svg key="local" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="design" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="engineer" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>,
  <svg key="service" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="academy" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>,
  <svg key="payment" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
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
            <div className="rounded-xl border border-accent/60 bg-white/10 p-6 shadow-sm backdrop-blur-sm md:p-8 lg:p-10">
              <h2 className="heading-lg text-white drop-shadow-md">
                您的产品走了十万八千里，最后一公里我们来跑
              </h2>
              <p className="mt-4 body-lg text-steel-200 drop-shadow-md">
                您的产品从工厂出发，走了生产、质检、出厂，您全程专业。但从出厂到客户现场、再到售后，这最后一公里：物流配送、到货验收、现场问题、退换协调、使用指导……既耗精力又难覆盖。
              </p>
              <p className="mt-4 body-lg text-steel-200 drop-shadow-md">
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
        fullHeight={false}
      >
        <SectionHeader
          title="与艺林合作，您将获得"
          description="产品+本地服务，共同服务好每一个客户。"
        />
        <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={benefitIcons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </StaggerReveal>
      </Section>
    </>
  );
}
