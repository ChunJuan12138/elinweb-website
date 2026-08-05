import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { StatCard } from "@/components/cards/StatCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import Link from "next/link";

const advantages = [
  {
    title: "最懂包钢",
    description:
      "深耕包钢体系 14 年以上，熟悉客户画像、组织架构、招投标习惯及各分厂需求，外地企业无法复制的本土化理解。",
  },
  {
    title: "三层人脉壁垒",
    description:
      "业务圈、品牌圈、本地包钢家属圈三层人脉网络，形成稳定的信任关系与信息优势。",
  },
  {
    title: "专业团队",
    description:
      "包钢领域最大服务团队，仪表、电气、矿山设备、阀门、执行机构、空压机、钢丝绳等品类各有专家。",
  },
  {
    title: "经得起考验",
    description:
      "14 年服务历程经得起国企审计、招标、廉洁考验，合规透明，长期稳定合作。",
  },
  {
    title: "一线品牌资源",
    description:
      "与 ABB、西门子、施耐德、川仪、山特维克、阿特拉斯、美卓等国际一线品牌保持长期代理关系。",
  },
  {
    title: "全包式服务",
    description:
      "从投标策划、代办、资质协调、送货、验收、挂账、开票，到安装调试、运维检修、质量异议处理，全流程闭环。",
  },
];

const stats = [
  { value: "14+", label: "年服务包钢体系" },
  { value: "10+", label: "服务包钢分厂" },
  { value: "24h", label: "全天候响应" },
  { value: "30min", label: "到场承诺" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="最懂包钢的本土化工业供应链全包服务商"
        subtitle="内蒙古艺林工业供应链科技"
        description="深耕包钢体系 14 年以上，为上游厂家提供投标代办、资质协调、送货验收、运维检修等全包服务；为包钢各分厂提供 24 小时响应、30 分钟到场的保姆式现场服务。"
        primaryCta={{ label: "合作咨询", href: "/contact" }}
        secondaryCta={{ label: "了解服务能力", href: "/services" }}
      />

      <Section background="muted">
        <SectionHeader
          title="为什么选择与艺林合作"
          subtitle="核心优势"
          description="我们不仅是供应商，更是懂包钢、懂工业、懂本地规则的长期合作伙伴。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
        <SectionHeader
          title="用数字说话"
          subtitle="实力沉淀"
          description="十四年如一日，服务包钢集团各分厂，构建起稳定、专业、合规的工业供应链服务体系。"
          light
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              服务范围
            </p>
            <h2 className="mt-3 heading-lg">覆盖工业供应链全品类</h2>
            <p className="mt-4 body-lg">
              工业仪表、电气、矿山设备、阀门、执行机构、空压机、钢丝绳、备品备件……
              无论您是需要进入包钢市场的上游厂家，还是需要可靠现场服务的包钢分厂，
              艺林都能提供专业、合规、高效的一站式支持。
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "投标策划与代办",
                "资质协调与合规支持",
                "送货、验收、挂账、开票",
                "安装调试与运维检修",
                "质量异议处理",
                "24 小时现场响应",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-steel-700">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/services" className="btn-primary">
                查看全部服务
              </Link>
            </div>
          </div>

          <PlaceholderImage
            label="工业设备与供应链服务场景图"
            aspectRatio="aspect-[4/3]"
          />
        </div>
      </Section>

      <Section background="muted">
        <SectionHeader
          title="长期合作的一线品牌"
          subtitle="品牌资源"
          description="与国际国内一线工业品牌建立长期代理关系，账期、折扣、优先权等资源整合能力，为客户创造真实价值。"
        />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            "ABB",
            "SIEMENS",
            "Schneider Electric",
            "川仪",
            "山特维克",
            "阿特拉斯·科普柯",
            "美卓",
          ].map((brand) => (
            <div
              key={brand}
              className="flex h-16 items-center justify-center rounded-lg border border-steel-200 bg-white px-6 text-sm font-semibold text-steel-500 shadow-sm md:px-8"
            >
              {brand}
            </div>
          ))}
        </div>
      </Section>

      <Section background="primary">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-white">
            有产品想进入包钢市场？
            <br />
            需要靠谱的本地化工业服务团队？
          </h2>
          <p className="mt-6 text-lg text-steel-200">
            欢迎中大型民营企业、国企及一线品牌厂家与我们洽谈合作。
            拒绝超低价中标、劣质品牌、没有底线的供应商。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary min-w-[160px]">
              立即咨询
            </Link>
            <Link href="/about" className="btn-secondary min-w-[160px]">
              了解艺林
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
