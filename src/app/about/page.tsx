import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const highlights = [
  {
    title: "2009 年起步",
    description:
      "从服务包钢体系开始，逐步成长为覆盖多品类、多分厂的本土化工业供应链服务商。",
  },
  {
    title: "覆盖包钢核心分厂",
    description:
      "白云、巴润、动供、焦化、稀土钢板材等分厂均有长期服务经验，熟悉各分厂采购流程与现场需求。",
  },
  {
    title: "经得起国企考验",
    description:
      "14 年服务历程中，经历多次审计、招标、廉洁检查，始终保持合规、透明、稳定的服务记录。",
  },
  {
    title: "最大服务团队之一",
    description:
      "仪表、电气、矿山设备、阀门、执行机构、空压机、钢丝绳等领域均配备专业服务人员。",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="关于艺林"
        subtitle="公司简介"
        description="内蒙古艺林工业供应链科技有限公司，深耕包钢体系 14 年以上，是最懂包钢的本土化工业供应链全包服务商。"
        primaryCta={{ label: "联系我们", href: "/contact" }}
      />

      <Section background="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-lg">深耕包钢，服务工业</h2>
            <p className="mt-6 body-lg">
              艺林工业供应链成立于 2009 年，总部位于内蒙古，多年来专注于服务包钢集团及其下属各分厂。
              我们以“让上游厂家专注生产，让包钢现场省心省力”为使命，构建起覆盖工业仪表、电气、矿山设备、阀门、
              执行机构、空压机、钢丝绳、备品备件等全品类的供应链服务能力。
            </p>
            <p className="mt-4 body-lg">
              我们不仅提供产品，更提供从投标策划、资质协调、送货验收、挂账开票，到安装调试、运维检修、
              质量异议处理的全流程服务。对包钢体系的高度熟悉和本地化服务网络，是我们最坚实的竞争壁垒。
            </p>
          </div>
         <PlaceholderImage
           label="公司办公环境 / 团队合影"
           aspectRatio="aspect-[4/3]"
           variant="industrial"
           imageSrc="/images/industrial/machinery.jpg"
         />
        </div>
      </Section>

      <Section background="muted">
        <SectionHeader
          title="为什么选择艺林"
          subtitle="核心亮点"
          description="十四年的沉淀，让我们成为包钢体系内值得信赖的工业供应链合作伙伴。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section background="primary">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-white">合规、透明、长期稳定</h2>
          <p className="mt-6 text-lg text-steel-200">
            艺林始终坚持合规经营，重视每一次审计与廉洁考验。我们深知，
            在国企供应链服务中，信任是最宝贵的资产。
          </p>
        </div>
      </Section>
    </>
  );
}
