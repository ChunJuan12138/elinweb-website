import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { FadeInUp } from "@/components/animation/FadeInUp";

const serviceScopes = [
  {
    title: "设备与备品备件供应",
    description:
      "以设备类为核心，覆盖仪表、电气、机械大类及细分品类；原燃料等品类同步拓展。",
  },
  {
    title: "专业技术服务",
    description:
      "电气、机械、自动化、仪表专业工程师团队，选型、安装指导、调试、故障诊断、改造升级，24 小时响应。",
  },
  {
    title: "仪表与环保运维",
    description:
      "烟气监测、水质监测等在线监测系统运维，自营承接并与内蒙古环投深度合作联合实施。",
  },
  {
    title: "物流与交付服务",
    description:
      "到货验收、卸货协调、现场配送 —— 交付的最后一公里。",
  },
  {
    title: "售后与陪伴服务",
    description:
      "现场问题响应、退换货协调、使用指导、备件补充 —— 售后的最后一公里。",
  },
  {
    title: "工程协同",
    description:
      "与设计院、施工检修单位联动，参与大型项目设备选型、供应、安装、检修全流程。",
  },
];

const serviceProcess = [
  { title: "需求确认", description: "专人对接。" },
  { title: "选型报价", description: "多品牌比价，输出透明选型方案与报价。" },
  { title: "合同签订", description: "明确服务范围、交付标准与计价方式。" },
  { title: "供货交付", description: "协调物流与现场验收，完成最后一公里交付。" },
  { title: "验收确认", description: "按合同标准验收，确保质量与数量闭环。" },
  { title: "售后跟踪", description: "持续跟踪使用状态，快速响应后续需求。" },
];

export default function BusinessPage() {
  return (
    <>
      <Hero
        title="服务业务"
        subtitle="服务与业务介绍"
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
            <div>
              <p className="inline-block rounded-full border border-accent/60 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-sm sm:text-sm">
                服务对象
              </p>
              <h2 className="mt-3 heading-lg text-white">连接上下游的本地化服务枢纽</h2>
              <p className="mt-4 body-lg text-steel-200">
                我们的服务对象包括包钢等大型工矿企业及包头周边工矿客户，同时也面向上游设备、材料生产制造企业。
              </p>
              <p className="mt-4 body-lg text-steel-200">
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
        background="image"
        imageSrc="/images/industrial/electrical-room.jpg"
        overlay="heavy"
      >
        <SectionHeader
          title="业务范围"
          subtitle="六大业务板块"
          description="从设备供应到技术服务，从物流交付到工程协同，覆盖工业供应链全链条。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StaggerReveal className="contents">
            {serviceScopes.map((item) => (
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
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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

      <Section
        background="image"
        imageSrc="/images/industrial/steel-mill.jpg"
        fullHeight={false}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeInUp className="order-2 lg:order-1">
            <PlaceholderImage
              label="专业技术服务团队"
              aspectRatio="aspect-[4/3]"
              variant="industrial"
              imageSrc="/images/industrial/electrical-room.jpg"
            />
          </FadeInUp>
          <FadeInUp delay={0.15} className="order-1 lg:order-2">
            <div>
              <p className="inline-block rounded-full border border-accent/60 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-sm sm:text-sm">
                服务流程
              </p>
              <h2 className="mt-3 heading-lg text-white">专人对接，全流程闭环</h2>
              <p className="mt-4 body-lg text-steel-200">
                需求确认 → 选型报价 → 合同签订 → 供货交付 → 验收确认 → 售后跟踪，全流程专人对接。
              </p>
            </div>
          </FadeInUp>
        </div>
      </Section>

      <Section
        background="image"
        imageSrc="/images/industrial/mining-truck.jpg"
        overlay="heavy"
        fullHeight={false}
      >
        <SectionHeader title="服务流程" subtitle="标准化服务路径" light />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StaggerReveal className="contents">
            {serviceProcess.map((item, index) => (
              <FeatureCard
                key={item.title}
                icon={
                  <span className="text-lg font-bold">{String(index + 1).padStart(2, "0")}</span>
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
