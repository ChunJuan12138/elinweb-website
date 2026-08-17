import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { FadeInUp } from "@/components/animation/FadeInUp";

interface Milestone {
  year: string;
  phase: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2009",
    phase: "业务起步",
    title: "扎根包头工矿现场",
    description:
      "起步开展工业供应链业务，开始服务包钢体系及周边工矿客户。",
  },
  {
    year: "2010",
    phase: "注册成立",
    title: "企业主体确立",
    description:
      "注册包头市艺林贸易有限责任公司，正式以企业主体开展工业供应链服务。",
  },
  {
    year: "2011–2023",
    phase: "深耕发展",
    title: "服务网络持续扩展",
    description:
      "与包钢体系及周边客户建立长期合作，供应商网络扩展至 300 余家，服务能力持续升级。",
  },
  {
    year: "现在",
    phase: "一体化服务",
    title: "生态协同新阶段",
    description:
      "以内蒙古艺林工业供应链科技有限公司为主体公司运营，形成设备供应+专业服务+生态协同的一体化服务体系。",
  },
];

export default function HistoryPage() {
  return (
    <>
      <Hero
        title="发展历程"
        description="从 2009 年业务起步到今天的生态协同，艺林用十余年沉淀服务工矿客户的真功夫。"
        primaryCta={{ label: "了解我们", href: "/company" }}
        imageSrc="/images/industrial/mining-truck.jpg"
      />

      <Section
        background="image"
        imageSrc="/images/industrial/steel-mill.jpg"
        fullHeight={false}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeInUp>
            <div className="rounded-xl border border-accent/60 bg-white/10 p-6 shadow-sm backdrop-blur-sm md:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                我们的足迹
              </p>
              <h2 className="heading-lg mt-3 text-white drop-shadow-md">
                十余年，只做一件事
              </h2>
              <p className="mt-4 body-lg text-steel-200 drop-shadow-md">
                从最早的现场需求响应，到今天覆盖设备供应、专业服务与生态协同的一体化供应链体系，艺林始终围绕包头工矿客户的真实痛点持续迭代。
              </p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div>
                  <dt className="text-2xl font-bold text-white">300+</dt>
                  <dd className="text-sm text-steel-300">合作厂商</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-white">5000万+</dt>
                  <dd className="text-sm text-steel-300">年营收</dd>
                </div>
                <div>
                  <dt className="text-2xl font-bold text-white">14+</dt>
                  <dd className="text-sm text-steel-300">年沉淀</dd>
                </div>
              </dl>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <PlaceholderImage
              label="工业发展时间线"
              aspectRatio="aspect-[4/3]"
              variant="industrial"
              imageSrc="/images/industrial/mining-truck.jpg"
            />
          </FadeInUp>
        </div>
      </Section>

      <Section
        background="image"
        imageSrc="/images/industrial/electrical-room.jpg"
        fullHeight={false}
      >
        <SectionHeader
          title="发展时间线"
          description="四个关键节点，勾勒出艺林从业务起步到一体化服务体系的成长路径。"
        />
        <div className="relative mt-12">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20 md:left-1/2 md:-ml-px" />
          <div className="space-y-12">
            <StaggerReveal selector=".reveal">
              {milestones.map((item, index) => (
                <div key={item.year} className="reveal relative pl-20 md:pl-0">
                  {/* 节点 */}
                  <div className="absolute left-8 top-0 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-white shadow-md md:left-1/2 md:-ml-8">
                    <span className="text-center text-sm font-bold leading-tight">
                      {item.year}
                    </span>
                  </div>

                  {/* 内容卡片 */}
                  <div
                    className={`md:flex md:items-center md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="hidden md:block md:flex-1" />
                    <div className="md:flex-1">
                      <div className="rounded-xl border border-accent/60 bg-white/10 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white/15 hover:shadow-lg md:p-8">
                        <p className="text-xs font-bold uppercase tracking-wider text-accent">
                          {item.phase}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-steel-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </Section>
    </>
  );
}
