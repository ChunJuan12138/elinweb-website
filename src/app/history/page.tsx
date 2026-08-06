import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { FadeInUp } from "@/components/animation/FadeInUp";

const milestones = [
  {
    year: "2009",
    title: "起步",
    description: "起步开展工业供应链业务，开始服务包钢体系及周边工矿客户。",
  },
  {
    year: "2010",
    title: "注册成立",
    description: "注册包头市艺林贸易有限责任公司，正式以企业主体开展工业供应链服务。",
  },
  {
    year: "发展期",
    title: "深耕包头工矿市场",
    description:
      "与包钢体系及周边客户建立长期合作，供应商网络扩展至 300 余家，服务能力持续升级。",
  },
  {
    year: "现在",
    title: "一体化服务体系",
    description:
      "以内蒙古艺林供应链科技有限责任公司为主体公司运营，形成设备供应+专业服务+生态协同的一体化服务体系。",
  },
];

export default function HistoryPage() {
  return (
    <>
      <Hero
        title="发展历程"
        subtitle="成长轨迹"
        description="从 2009 年起步到今天的生态协同，艺林用十余年沉淀服务工矿客户的真功夫。"
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
            <div>
              <p className="inline-block rounded-full border border-accent/60 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-sm sm:text-sm">
                成长轨迹
              </p>
              <h2 className="mt-3 heading-lg text-white">发展历程</h2>
              <p className="mt-4 body-lg text-steel-200">
                从 2009 年起步到今天的生态协同，艺林用十余年沉淀服务工矿客户的真功夫。
              </p>
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
        overlay="heavy"
      >
        <SectionHeader
          title="发展时间线"
          subtitle="关键节点"
          description="四个关键节点，勾勒出艺林从起步到一体化服务体系的成长路径。"
        />
        <div className="relative mt-12">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20 md:left-1/2 md:-ml-px" />
          <div className="space-y-12">
            <StaggerReveal selector=".reveal">
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className={`reveal relative flex flex-col gap-6 md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden md:block md:flex-1 md:text-right" />
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-md">
                    <span className="text-center text-sm font-bold leading-tight">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <FeatureCard
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      }
                      title={item.title}
                      description={item.description}
                      animate={false}
                    />
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
