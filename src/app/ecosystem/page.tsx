import { Hero } from "@/components/sections/Hero";
import { PartnerLogoWall } from "@/components/sections/PartnerLogoWall";
import { Section, SectionHeader } from "@/components/sections/Section";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { StaggerReveal } from "@/components/animation/StaggerReveal";
import { FadeInUp } from "@/components/animation/FadeInUp";
import { readdirSync } from "fs";
import { join } from "path";

const logoDir = join(process.cwd(), "public/images/other_company_logos");
const partnerLogos = readdirSync(logoDir);

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
    description: "300 余家品牌厂商——设备、材料稳定供应。",
  },
  {
    title: "客户",
    description: "包钢等大型工矿企业及包头周边工矿——十余年服务沉淀。",
  },
];

const ecosystemIcons = [
  <svg key="design" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="construction" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>,
  <svg key="academy" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>,
  <svg key="supplier" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>,
  <svg key="client" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
];

export default function EcosystemPage() {
  return (
    <>
      <Hero
        title="生态合作网络"
        description="设计院、工程单位、高校、供应商、客户共同构成艺林的工业服务生态圈。"
        primaryCta={{ label: "发展历程", href: "/history" }}
        imageSrc="/images/industrial/steel-mill.jpg"
      />

      <Section
        background="image"
        imageSrc="/images/industrial/electrical-room.jpg"
        fullHeight={false}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeInUp className="order-2 lg:order-1">
            <PlaceholderImage
              label="工业生态合作网络"
              aspectRatio="aspect-[4/3]"
              variant="industrial"
              imageSrc="/images/industrial/steel-mill.jpg"
            />
          </FadeInUp>
          <FadeInUp delay={0.15} className="order-1 lg:order-2">
            <div className="rounded-xl border border-accent/60 bg-white/10 p-6 shadow-sm backdrop-blur-sm md:p-8 lg:p-10">
              <h2 className="heading-lg text-white drop-shadow-md">多方协同，全程落地</h2>
              <p className="mt-4 body-lg text-steel-200 drop-shadow-md">
                艺林不是单一角色，而是连接设计院、工程单位、高校、供应商与客户的纽带。通过生态协同，我们能把大型项目从选型、供应、安装到检修运维全流程跑通。
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
        <SectionHeader title="五大合作主体" />
        <StaggerReveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={ecosystemIcons[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </StaggerReveal>
      </Section>

      <Section
        background="image"
        imageSrc="/images/industrial/machinery.jpg"
        fullHeight={false}
      >
        <SectionHeader
          title="合作厂商"
          description="十余年沉淀，与 300 余家国内外品牌厂商建立稳定合作。"
        />
        <div className="mt-12">
          <PartnerLogoWall logos={partnerLogos} />
        </div>
      </Section>
    </>
  );
}
