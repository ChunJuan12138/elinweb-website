import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "艺林工业供应链 | 最懂包钢的本土化工业供应链全包服务商",
  description:
    "内蒙古艺林工业供应链科技有限公司，深耕包钢体系14年以上，提供工业仪表、电气、矿山设备、阀门、执行机构、空压机、钢丝绳、备品备件等全品类供应链服务。24小时响应，30分钟到场。",
  keywords: [
    "包钢供应商",
    "包钢备件",
    "工业设备供应",
    "工业供应链",
    "内蒙古工业品",
    "包钢投标代办",
    "ABB 包钢",
    "西门子 包钢",
    "施耐德 包钢",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
