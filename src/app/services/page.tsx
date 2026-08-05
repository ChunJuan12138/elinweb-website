import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { ServicesFeatureGrid } from "@/components/sections/ServicesFeatureGrid";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const upstreamServices = [
  {
    title: "投标策划",
    description:
      "基于对包钢各分厂需求和招标习惯的深度理解，帮助厂家制定更有竞争力的投标策略。",
  },
  {
    title: "投标代办",
    description:
      "代为完成报名、资料准备、标书递交、答疑跟进等繁琐流程，让厂家专注生产。",
  },
  {
    title: "资质协调",
    description:
      "协助处理资质审核、业绩证明、授权文件等合规材料，提高准入效率。",
  },
  {
    title: "送货与验收",
    description:
      "协调物流、现场对接、验收配合，确保货物按时按质交付。",
  },
  {
    title: "挂账与开票",
    description:
      "熟悉国企财务流程，协助完成挂账、对账、开票等后端事务。",
  },
  {
    title: "安装调试与运维检修",
    description:
      "提供专业技术团队，完成设备安装调试、日常运维及故障检修。",
  },
  {
    title: "质量异议处理",
    description:
      "出现质量问题时，快速响应、协调厂家与包钢各方，推动问题闭环解决。",
  },
];

const downstreamServices = [
  {
    title: "24 小时响应",
    description: "全天候服务热线，随时响应包钢现场突发需求。",
  },
  {
    title: "30 分钟到场",
    description: "依托本地服务网络，承诺快速到场，减少停机损失。",
  },
  {
    title: "随叫随到",
    description: "现场需求即为命令，灵活调配人员与资源。",
  },
  {
    title: "保质保量闭环",
    description: "从需求对接到服务交付，全程跟踪，确保问题彻底解决。",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="全包式工业供应链服务"
        subtitle="服务能力"
        description="上游厂家专注生产，包钢现场省心省力。我们承接中间一切复杂流程，让合作更简单、更高效。"
        primaryCta={{ label: "合作咨询", href: "/contact" }}
      />

      <Section background="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              上游服务
            </p>
            <h2 className="mt-3 heading-lg">非接触式全包服务</h2>
            <p className="mt-4 body-lg">
              如果您是工业品牌厂家或代理商，想进入包钢市场却苦于不熟悉本地规则、
              流程繁琐、人手不足，艺林可以为您提供从投标到售后的全流程代办服务。
              您只需专注生产和产品，我们来处理包钢市场的复杂事务。
            </p>
          </div>
          <PlaceholderImage
            label="投标代办与供应链协同场景图"
            aspectRatio="aspect-[4/3]"
          />
        </div>
      </Section>

      <Section background="muted">
        <SectionHeader
          title="上游厂家服务内容"
          description="覆盖厂家进入包钢市场所需的全部中间环节"
        />
        <ServicesFeatureGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upstreamServices.map((item) => (
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              }
              title={item.title}
              description={item.description}
              animate={false}
            />
          ))}
        </ServicesFeatureGrid>
      </Section>

      <Section background="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <PlaceholderImage
            label="包钢现场 24 小时服务响应场景图"
            aspectRatio="aspect-[4/3]"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              下游服务
            </p>
            <h2 className="mt-3 heading-lg">保姆式现场服务</h2>
            <p className="mt-4 body-lg">
              对于包钢集团各分厂，艺林提供贴近现场的本地化服务团队。
              设备故障、紧急备件、临时检修，一个电话，我们随叫随到，
              确保生产稳定运行。
            </p>
          </div>
        </div>
      </Section>

      <Section background="primary">
        <SectionHeader
          title="现场服务承诺"
          subtitle="保姆式服务"
          description="艺林对包钢现场的承诺，是速度、专业和责任。"
          light
        />
        <ServicesFeatureGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {downstreamServices.map((item) => (
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              title={item.title}
              description={item.description}
              animate={false}
            />
          ))}
        </ServicesFeatureGrid>
      </Section>
    </>
  );
}
