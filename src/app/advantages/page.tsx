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
    description:
      "商品与服务分离计价，服务费明码标价，让客户看得懂、算得清。",
  },
];

export default function AdvantagesPage() {
  return (
    <>
      <Hero
        title="核心优势"
        subtitle="为什么选择我们"
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
              imageSrc="/images/industrial/mining-truck.jpg"
            />
          </FadeInUp>
          <FadeInUp delay={0.15} className="order-1 lg:order-2">
            <div>
              <p className="inline-block rounded-full border border-accent/60 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-sm sm:text-sm">
                差异化价值
              </p>
              <h2 className="mt-3 heading-lg text-white">不是卖货，是做服务</h2>
              <p className="mt-4 body-lg text-steel-200">
                我们与震坤行、欧冶等平台有相似之处，但本质不同：他们侧重卖货，服务是附带；我们以服务为核心，卖货只是服务的一部分。
              </p>
            </div>
          </FadeInUp>
        </div>
      </Section>

      <Section
        background="image"
        imageSrc="/images/industrial/pipes-valves.jpg"
        overlay="heavy"
      >
        <SectionHeader title="六大核心优势" subtitle="核心竞争力" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <StaggerReveal className="contents">
            {advantages.map((item) => (
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
