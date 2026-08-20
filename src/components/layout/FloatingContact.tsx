"use client";

import Image from "next/image";
import type { ReactNode } from "react";

const phoneNumber = "0472-2110904";

interface ContactItem {
  id: string;
  label: string;
  href?: string;
  download?: boolean;
  icon: ReactNode;
}

const contactItems: ContactItem[] = [
  {
    id: "phone",
    label: "电话联系",
    href: "tel:04722110904",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    id: "wechat",
    label: "微信咨询",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 8h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    id: "miniprogram",
    label: "微信小程序",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "brochure",
    label: "宣传册",
    href: "/艺林工业供应链-企业宣传册.pdf",
    download: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 3H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export function FloatingContact() {
  const buttonClass =
    "flex w-20 flex-col items-center justify-center gap-1.5 border-b border-stone-100 px-2 py-4 text-stone-600 transition last:border-b-0 group-hover:bg-accent group-hover:text-white";
  const iconClass = "transition-transform duration-200 group-hover:scale-110";
  const labelClass =
    "whitespace-nowrap text-xs leading-tight transition-transform duration-200 group-hover:scale-110";
  const popupClass =
    "pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100";

  return (
    <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col rounded-l-lg bg-white shadow-lg md:flex">
      {contactItems.map((item) => (
        <div key={item.id} className="group relative">
          {item.href ? (
            <a href={item.href} download={item.download} className={buttonClass}>
              <span className={iconClass}>{item.icon}</span>
              <span className={labelClass}>{item.label}</span>
            </a>
          ) : (
            <button className={buttonClass}>
              <span className={iconClass}>{item.icon}</span>
              <span className={labelClass}>{item.label}</span>
            </button>
          )}

          {!item.download && (
            <div className={`${popupClass} z-50`}>
              <div className="relative rounded-xl bg-white p-4 shadow-xl">
                {item.id === "phone" ? (
                <div className="flex items-center gap-3 whitespace-nowrap px-2">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-base font-semibold text-stone-800">{phoneNumber}</span>
                </div>
              ) : (
                <>
                  <div className="relative h-44 w-44 overflow-hidden rounded-lg bg-stone-50">
                    <Image
                      src={item.id === "wechat" ? "/images/qr-code.png" : "/images/qr-miniprogram.jpg"}
                      alt={item.id === "wechat" ? "微信公众号二维码" : "微信小程序二维码"}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <p className="mt-2 text-center text-sm font-medium text-stone-700">
                    {item.id === "wechat" ? "扫码关注公众号" : "微信扫一扫进入小程序"}
                  </p>
                </>
              )}
            </div>
          </div>
        )}
        </div>
      ))}
    </div>
  );
}
