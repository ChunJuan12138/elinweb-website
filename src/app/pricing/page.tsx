import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { FadeInUp } from "@/components/animation/FadeInUp";

const pricingTiers = [
  {
    title: "第 1 层 · 产品供应",
    description:
      "透明报价：多品牌比价，采购价+服务费率，签约明示。项目打包价：设备+安装+调试+验收一价包干，按复杂度协商。",
  },
  {
    title: "第 2 层 · 技术服务",
    description:
      "技术方案/选型/咨询：按项目报价。安装调试：到场安装+调试+培训，按设备价值比例或包干。运维服务：年度合同（巡检/维保/应急响应）。",
  },
  {
    title: "第 3 层 · 增值服务",
    description:
      "应急响应：24h 到场、紧急备件，会员制或按次。驻场服务：常驻客户现场，年度按月。备件托管：客户备件库代管，月度管理费。",
  },
];

const externalStandards = [
  "产品供应：多品牌比价，透明报价，明示服务费率",
  "技术服务：按项目报价（方案/安装/调试/验收）",
  "运维服务：年度合同（巡检/维保/应急响应）",
  "长期合作：框架协议（集采优惠，优先响应）",
  "具体以实际报价单/服务合同为准；大项目、年度框架合作欢迎面议。",
];

const internalRates = [
  { title: "产品供应服务费", value: "5%-10%", note: "震坤行 13%，我们更低因服务更好" },
  { title: "技术服务", value: "按项目", note: "根据复杂度和工作量报价" },
  { title: "运维服务", value: "年度", note: "巡检/维保/应急响应打包" },
  { title: "应急/驻场/托管", value: "协商", note: "根据服务频次与深度定价" },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        title="收费标准"
        subtitle="透明计价"
        description="本地化工业供应链服务商，主要挣服务的钱——不是差价平台，不是纯贸易商，是带着服务的供应链服务商。"
        primaryCta={{ label: "供应商合作", href: "/partners" }}
        imageSrc="/images/industrial/steel-mill.jpg"
      />

      <Section background="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeInUp>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                业态定位
              </p>
              <h2 className="mt-3 heading-lg">挣服务的钱，不卖信息差</h2>
              <p className="mt-4 body-lg">
                我们不写死价格，而是写清计价方式。商品与服务分离计价，服务费明码标价。
              </p>
              <p className="mt-4 body-lg">
                具体以实际报价单/服务合同为准；大项目、年度框架合作欢迎面议。
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <PlaceholderImage
              label="工业供应链成本透明化"
              aspectRatio="aspect-[4/3]"
              variant="industrial"
              imageSrc="/images/industrial/steel-mill.jpg"
            />
          </FadeInUp>
        </div>
      </Section>

      <Section background="muted">
        <SectionHeader title="三层收费结构" subtitle="计价方式" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <StaggerReveal className="contents">
            {pricingTiers.map((item) => (
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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

      <Section background="white">
        <SectionHeader title="对外标准表述" subtitle="标准话术" />
        <FadeInUp>
          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-steel-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4">
              {externalStandards.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-steel-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInUp>
      </Section>

      <Section background="primary">
        <SectionHeader title="对内参考费率" subtitle="内部参考" light />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StaggerReveal className="contents">
            {internalRates.map((item) => (
              <div
                key={item.title}
                className="reveal group rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-sm text-steel-300">{item.title}</p>
                <p className="mt-2 text-2xl font-bold text-white md:text-3xl">{item.value}</p>
                <p className="mt-2 text-xs text-steel-400">{item.note}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </Section>
    </>
  );
}
