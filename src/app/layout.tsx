import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GsapReady } from "@/components/effects/GsapReady";

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
  title: "艺林工业供应链 | 本地化工业供应链服务商",
  description:
    "内蒙古艺林工业供应链科技有限公司，立足包头、辐射包头周边工矿企业，连接上游制造与下游生产，让两端各自专注专业。",
  keywords: [
    "工业供应链",
    "包头工矿企业",
    "设备供应",
    "技术服务",
    "内蒙古艺林供应链",
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
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased pt-20 md:pt-24`}
      >
        <GsapReady />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
