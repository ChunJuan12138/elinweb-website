import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export default function HomePage() {
  return (
    <>
      <Hero
        title="立足包头、辐射包头周边工矿企业的本地化工业供应链服务商"
        subtitle="内蒙古艺林供应链科技"
        description="连接上游制造与下游生产，让两端各自专注专业。我们以服务为核心，卖货只是服务的一部分。"
        primaryCta={{ label: "公司简介", href: "/company" }}
      />

      <Section background="white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              公司简介
            </p>
            <h2 className="mt-3 heading-lg">以服务为核心的工业供应链服务商</h2>
            <p className="mt-4 body-lg">
              我们是一家本地化工业供应链服务商——立足包头、辐射包头周边工矿企业，连接上游制造与下游生产，让两端各自专注专业。
            </p>
            <p className="mt-4 body-lg">
              我们与震坤行、欧冶等平台有相似之处，但本质不同：他们侧重卖货，服务是附带；我们以服务为核心，卖货只是服务的一部分。
            </p>
            <p className="mt-4 body-lg">
              让客户专注生产与制造，交付与售后的最后一公里，交给艺林。我们与客户共生共长。
            </p>
          </div>
          <PlaceholderImage
            label="工业设备与供应链服务"
            aspectRatio="aspect-[4/3]"
            variant="industrial"
            imageSrc="/images/industrial/machinery.jpg"
          />
        </div>
      </Section>
    </>
  );
}
