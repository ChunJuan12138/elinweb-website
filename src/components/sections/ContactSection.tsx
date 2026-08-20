import { FadeInUp } from "@/components/animation/FadeInUp";
import { MapContainer } from "@/components/ui/MapContainer";

interface ContactSectionProps {
  showMap?: boolean;
}

export function ContactSection({ showMap = true }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="bg-primary-950 py-20 text-white md:py-28"
    >
      <FadeInUp direction="up" distance={30}>
        <div className="container-wide mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-white">
            让交付与售后的最后一公里，交给艺林
          </h2>
          <p className="mt-4 body-lg text-steel-200">
            无论您是下游工矿企业需要设备供应与现场服务，还是上游制造商希望打通包头市场，欢迎与我们联系，专人对接。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:04722110904"
              className="btn-primary min-w-[180px]"
            >
              0472-2110904
            </a>
            <a
              href="mailto:yilin@yilinsupply.cn"
              className="btn-secondary min-w-[180px]"
            >
              yilin@yilinsupply.cn
            </a>
          </div>
          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-steel-300">
            <span>电话</span>
            <a
              href="tel:04722110904"
              className="text-white transition-colors hover:text-accent"
            >
              0472-2110904
            </a>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <span>邮箱</span>
            <a
              href="mailto:yilin@yilinsupply.cn"
              className="text-white transition-colors hover:text-accent"
            >
              yilin@yilinsupply.cn
            </a>
            <span className="hidden sm:inline" aria-hidden="true">
              |
            </span>
            <span>地址 包头市昆都仑区包钢中桥停车场北</span>
          </p>

          {showMap && (
            <div className="mt-8">
              <div className="group relative inline-block w-full max-w-2xl overflow-hidden rounded-xl border border-accent/60 bg-white/5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <MapContainer
                  address="包头市昆都仑区包钢中桥停车场北"
                  lng={109.787407}
                  lat={40.659485}
                  companyName="内蒙古艺林工业供应链科技有限公司"
                />
                <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-white drop-shadow-md">
                    包头市昆都仑区包钢中桥停车场北
                  </p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    导航
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </FadeInUp>
    </section>
  );
}
