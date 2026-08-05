import { Hero } from "@/components/sections/Hero";
import { Section, SectionHeader } from "@/components/sections/Section";

export default function ContactPage() {
  return (
    <>
      <Hero
        title="联系艺林"
        subtitle="合作咨询"
        description="无论您是想进入包钢市场的厂家，还是需要本地化服务支持的包钢分厂，欢迎与我们联系。"
        primaryCta={{ label: "拨打电话", href: "tel:+8610000000000" }}
      />

      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              title="期待与您合作"
              subtitle="联系方式"
              description="您可以通过以下方式与我们取得联系，我们将在第一时间回复您的咨询。"
              centered={false}
            />

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                  <svg
                    className="h-5 w-5"
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
                </div>
                <div>
                  <p className="text-sm font-medium text-steel-500">公司名称</p>
                  <p className="mt-1 text-base font-medium text-foreground">
                    内蒙古艺林工业供应链科技有限公司
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-steel-500">服务区域</p>
                  <p className="mt-1 text-base font-medium text-foreground">
                    包钢集团各分厂及内蒙古工业市场
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                  <svg
                    className="h-5 w-5"
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
                </div>
                <div>
                  <p className="text-sm font-medium text-steel-500">服务承诺</p>
                  <p className="mt-1 text-base font-medium text-foreground">
                    24 小时响应 · 30 分钟到场
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-steel-200 bg-steel-50 p-8">
            <h3 className="text-lg font-semibold text-foreground">在线留言</h3>
            <p className="mt-2 text-sm text-steel-600">
              请填写您的基本信息和合作需求，我们将在 1 个工作日内与您联系。
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground"
                  >
                    联系人姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-lg border border-steel-300 bg-white px-4 py-2.5 text-sm text-foreground placeholder-steel-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="请输入姓名"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground"
                  >
                    公司名称
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-1 block w-full rounded-lg border border-steel-300 bg-white px-4 py-2.5 text-sm text-foreground placeholder-steel-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="请输入公司名称"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground"
                >
                  联系电话
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border border-steel-300 bg-white px-4 py-2.5 text-sm text-foreground placeholder-steel-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="请输入联系电话"
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-foreground"
                >
                  合作类型
                </label>
                <select
                  id="type"
                  name="type"
                  className="mt-1 block w-full rounded-lg border border-steel-300 bg-white px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">请选择合作类型</option>
                  <option value="manufacturer">我是厂家，想进入包钢市场</option>
                  <option value="baogang">我是包钢相关人员，需要服务支持</option>
                  <option value="partner">其他合作意向</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  合作需求
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-steel-300 bg-white px-4 py-2.5 text-sm text-foreground placeholder-steel-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="请简要描述您的合作需求"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                disabled
                title="当前为静态演示站点，表单未接入后端"
              >
                提交咨询（演示用）
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
