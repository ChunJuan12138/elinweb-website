import { Section } from "@/components/sections/Section";
import { ContactSection } from "@/components/sections/ContactSection";
import { HangingQR } from "@/components/ui/HangingQR";

export default function ContactPage() {
  return (
    <>
      <HangingQR />
      <Section
        background="solid-primary"
        fullHeight={false}
        className="py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-xl text-white drop-shadow-lg">联系我们</h1>
          <p className="mt-4 body-lg text-steel-200">
            无论您是下游工矿企业需要设备供应与现场服务，还是上游制造商希望打通包头市场，欢迎与我们联系，专人对接。
          </p>
        </div>
      </Section>
      <ContactSection showMap />
    </>
  );
}
