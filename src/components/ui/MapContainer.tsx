"use client";

import { useEffect, useRef, useState } from "react";

interface MapContainerProps {
  address: string;
  lng: number;
  lat: number;
  companyName: string;
}

export function MapContainer({ address, lng, lat, companyName }: MapContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const key = process.env.NEXT_PUBLIC_AMAP_KEY;
    if (!key) {
      setError(true);
      return;
    }

    // Configure security code if provided
    const securityJsCode = process.env.NEXT_PUBLIC_AMAP_SECURITY_JS_CODE;
    if (securityJsCode && typeof window !== "undefined") {
      (window as unknown as Record<string, unknown>)._AMapSecurityConfig = {
        securityJsCode,
      };
    }

    const loaderScript = document.createElement("script");
    loaderScript.src = "https://webapi.amap.com/loader.js";
    loaderScript.async = true;

    loaderScript.onload = () => {
      const AMapLoader = (window as unknown as { AMapLoader?: AMapLoaderType }).AMapLoader;
      if (!AMapLoader) {
        setError(true);
        return;
      }

      AMapLoader.load({
        key,
        version: "2.0",
      })
        .then((AMap) => {
          if (!containerRef.current) return;

          const map = new AMap.Map(containerRef.current, {
            zoom: 16,
            center: [lng, lat],
          });

          const marker = new AMap.Marker({
            position: [lng, lat],
            title: companyName,
          });

          map.add(marker);

          const infoWindow = new AMap.InfoWindow({
            content: `<div style="padding:8px 12px;font-size:14px;color:#333;">${companyName}<br/><span style="color:#666;font-size:12px;">${address}</span></div>`,
            offset: new AMap.Pixel(0, -30),
          });

          marker.on("click", () => {
            infoWindow.open(map, marker.getPosition());
          });

          // Open info window by default
          infoWindow.open(map, marker.getPosition());

          // Click map container to open navigation
          containerRef.current.style.cursor = "pointer";
          map.on("click", () => {
            const encodedName = encodeURIComponent(companyName);
            window.open(
              `https://uri.amap.com/navigation?to=${lng},${lat},${encodedName}&mode=car&policy=1`,
              "_blank",
              "noopener,noreferrer"
            );
          });
        })
        .catch(() => {
          setError(true);
        });
    };

    loaderScript.onerror = () => setError(true);
    document.body.appendChild(loaderScript);

    return () => {
      loaderScript.remove();
    };
  }, [address, lng, lat, companyName]);

  if (error) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-accent/60 bg-white/5">
        <div className="flex h-full flex-col items-center justify-center p-6 text-center">
          <p className="text-white">地图加载失败</p>
          <a
            href={`https://uri.amap.com/search?keyword=${encodeURIComponent(address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-sm text-accent hover:underline"
          >
            点击在高德地图中查看
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-xl border border-accent/60 bg-steel-100"
      aria-label={`${companyName}位置地图，点击查看导航`}
    />
  );
}

type AMapLoaderType = {
  load: (options: { key: string; version: string }) => Promise<AMapType>;
};

type AMapType = {
  Map: new (container: HTMLElement, options: { zoom: number; center: [number, number] }) => AMapMapType;
  Marker: new (options: { position: [number, number]; title: string }) => AMapMarkerType;
  InfoWindow: new (options: { content: string; offset: AMapPixelType }) => AMapInfoWindowType;
  Pixel: new (x: number, y: number) => AMapPixelType;
};

type AMapMapType = {
  add: (overlay: AMapMarkerType) => void;
  on: (event: string, callback: () => void) => void;
};

type AMapMarkerType = {
  getPosition: () => AMapLngLatType;
  on: (event: string, callback: () => void) => void;
};

type AMapInfoWindowType = {
  open: (map: AMapMapType, position: AMapLngLatType) => void;
};

type AMapPixelType = unknown;
type AMapLngLatType = unknown;
