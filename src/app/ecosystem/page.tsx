import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const ecosystem = [
  {
    title: "设计院",
    description:
      "中冶赛迪、中冶京诚、中冶东方、首钢国际、包钢设计院——项目设备选型协同。",
  },
  {
    title: "工程单位",
    description:
      "上海宝冶、中国二冶、内蒙古环投、包钢西创建设、包钢综企——施工、大修、检修、运维协同。",
  },
  {
    title: "高校",
    description:
      "内蒙古科技大学（机械工程学院、自动化与电气工程学院）——产学研技术支撑。",
  },
  {
    title: "供应商",
    description:
      "300 余家品牌厂商——设备、材料稳定供应。",
  },
  {
    title: "客户",
    description:
      "包钢等大型工矿企业及包头周边工矿——十余年服务沉淀。",
  },
];

export default function EcosystemPage() {
  return (
    <>
      <Hero
        title="生态合作网络"
        subtitle="协同网络"
        description="设计院、工程单位、高校、供应商、客户共同构成艺林的工业服务生态圈。"
        primaryCta={{ label: "发展历程", href: "/history" }}
      />

      <Section background="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <PlaceholderImage
            label="工业生态合作网络"
            aspectRatio="aspect-[4/3]"
            variant="industrial"
            imageSrc="/images/industrial/steel-mill.jpg"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              生态定位
            </p>
            <h2 className="mt-3 heading-lg">多方协同，全程落地</h2>
            <p className="mt-4 body-lg">
              艺林不是单一角色，而是连接设计院、工程单位、高校、供应商与客户的纽带。通过生态协同，我们能把大型项目从选型、供应、安装到检修运维全流程跑通。
            </p>
          </div>
        </div>
      </Section>

      <Section background="muted">
        <SectionHeader
          title="五大合作主体"
          subtitle="生态伙伴"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((item) => (
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
