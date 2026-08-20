import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { FadeInUp } from "@/components/animation/FadeInUp";

const advantages = [
  {
    title: "本地化响应",
    description:
      "立足包头，辐射周边——厂家异地客户够不着的地方，我们就在现场；24 小时响应，随叫随到。",
  },
  {
    title: "专业工程师团队",
    description:
      "电气、机械、自动化、仪表各专业独立工程师，不是“卖完就走”，而是设备稳定运转才叫交付完成。",
  },
  {
    title: "高校科研背书",
    description:
      "与内蒙古科技大学机械工程学院、自动化与电气工程学院产学研深度合作——疑难问题有研究团队支撑。",
  },
  {
    title: "生态协同网络",
    description:
      "设计院（中冶赛迪 / 京诚 / 东方 / 首钢国际 / 包钢设计院）+ 工程单位（上海宝冶 / 中国二冶 / 内蒙环投 / 西创 / 综企）+ 高校，大型项目全流程可协同。",
  },
  {
    title: "供应链全链条",
    description:
      "从选型、供应、物流、运维到售后，一揽子解决——客户只需专注生产，其余交给我们。",
  },
  {
    title: "服务透明",
    description: "商品与服务分离计价，服务费明码标价，让客户看得懂、算得清。",
  },
];

const advantageIcons = [
  <svg key="local" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="engineer" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="academy" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>,
  <svg key="network" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="chain" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>,
  <svg key="transparent" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function AdvantagesPage() {
  return (
    <>
      <Hero
        title="核心优势"
        description="十余年的本地化沉淀，让我们成为工矿企业值得信赖的工业供应链合作伙伴。"
        primaryCta={{ label: "收费标准", href: "/pricing" }}
        imageSrc="/images/industrial/mining-truck.jpg"
      />

      <Section
        background="image"
        imageSrc="/images/industrial/steel-mill.jpg"
        fullHeight={false}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeInUp className="order-2 lg:order-1">
            <PlaceholderImage
              label="包钢现场服务"
              aspectRatio="aspect-[4/3]"
              variant="industrial"
              imageSrc="/images/illustration_06.jpg"
            />
          </FadeInUp>
          <FadeInUp delay={0.15} className="order-1 lg:order-2">
            <div className="rounded-xl border border-accent/60 bg-white/10 p-6 shadow-sm backdrop-blur-sm md:p-8 lg:p-10">
              <h2 className="heading-lg text-white drop-shadow-md">不是卖货，是做服务</h2>
              <p className="mt-4 body-lg text-steel-200 drop-shadow-md">
                我们与部分工业品电商平台有相似之处，但本质不同：我们以服务为核心，卖货只是服务的一部分。
              </p>
            </div>
          </FadeInUp>
        </div>
      </Section>

      <Section
        background="image"
        imageSrc="/images/industrial/pipes-valves.jpg"
        fullHeight={false}
      >
        <SectionHeader title="六大核心优势" />
        <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={advantageIcons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </StaggerReveal>
      </Section>
    </>
  );
}
