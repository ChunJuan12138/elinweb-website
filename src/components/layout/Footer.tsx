import Link from "next/link";

const footerLinks = [
  { label: "公司简介", href: "/company" },
  { label: "服务业务", href: "/business" },
  { label: "核心优势", href: "/advantages" },
  { label: "收费标准", href: "/pricing" },
  { label: "供应商合作", href: "/partners" },
  { label: "生态网络", href: "/ecosystem" },
  { label: "发展历程", href: "/history" },
];

const contactInfo = [
  { label: "公司全称", value: "内蒙古艺林供应链科技有限责任公司" },
  { label: "服务区域", value: "包头及包头周边工矿企业" },
  { label: "服务理念", value: "让客户专注生产与制造" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-wide section">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold">艺林工业供应链</h3>
            <p className="mt-1 text-sm text-accent">包头本土化工业供应链服务商</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-steel-300">
              立足包头、辐射包头周边工矿企业，连接上游制造与下游生产，让两端各自专注专业。
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-steel-300">
              快速导航
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-200 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-steel-300">
              联系信息
            </h4>
            <ul className="mt-4 space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label} className="text-sm text-steel-200">
                  <span className="block text-xs text-steel-400">{item.label}</span>
                  {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-steel-400">
            © {currentYear} 内蒙古艺林供应链科技有限责任公司. 保留所有权利.
          </p>
          <p className="text-xs text-steel-500">
            本网站仅用于企业展示，具体合作以正式合同为准。
          </p>
        </div>
      </div>
    </footer>
  );
}
