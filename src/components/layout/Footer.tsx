import Link from "next/link";

const footerLinks = [
  { label: "首页", href: "/" },
  { label: "关于艺林", href: "/about" },
  { label: "服务能力", href: "/services" },
  { label: "联系我们", href: "/contact" },
];

const contactInfo = [
  { label: "公司全称", value: "内蒙古艺林工业供应链科技有限公司" },
  { label: "服务区域", value: "包钢集团各分厂及内蒙古工业市场" },
  { label: "响应承诺", value: "24 小时响应 · 30 分钟到场" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-wide section">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold">艺林工业供应链</h3>
            <p className="mt-1 text-sm text-accent">最懂包钢的本土化工业供应链全包服务商</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-steel-300">
              深耕包钢体系 14 年以上，提供工业仪表、电气、矿山设备、阀门、执行机构、空压机、钢丝绳、备品备件等全品类服务。
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
            © {currentYear} 内蒙古艺林工业供应链科技有限公司. 保留所有权利.
          </p>
          <p className="text-xs text-steel-500">
            本网站仅用于企业展示，具体合作以正式合同为准。
          </p>
        </div>
      </div>
    </footer>
  );
}
