"use client";

import Image from "next/image";

interface PartnerLogoWallProps {
  logos: string[];
}

const ROW_COUNT = 3;
const CARD_WIDTH = 160;
const CARD_HEIGHT = 84;

export function PartnerLogoWall({ logos }: PartnerLogoWallProps) {
  // Exclude non-logo assets like the map image.
  const logoFiles = logos.filter(
    (name) =>
      !name.toLowerCase().includes("map") &&
      /\.(png|jpg|jpeg|svg|webp|gif)$/i.test(name),
  );

  // Distribute logos across rows in round-robin order so similar logos are spread out.
  const rows: string[][] = Array.from({ length: ROW_COUNT }, () => []);
  logoFiles.forEach((logo, index) => {
    rows[index % ROW_COUNT].push(logo);
  });

  return (
    <div className="partner-logo-wall w-full overflow-hidden">
      <div className="flex flex-col gap-3 md:gap-4">
        {rows.map((row, rowIndex) => {
          const isReversed = rowIndex % 2 === 1;
          const track = [...row, ...row];

          return (
            <div
              key={rowIndex}
              className="relative overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)",
              }}
            >
              <div
                className={`flex w-max gap-3 md:gap-4 ${
                  isReversed ? "animate-logo-marquee-reverse" : "animate-logo-marquee"
                }`}
              >
                {track.map((logo, i) => (
                  <div
                    key={`${rowIndex}-${logo}-${i}`}
                    className="flex h-[72px] w-[130px] flex-shrink-0 items-center justify-center rounded-xl border border-accent/60 bg-white/10 p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-white/20 hover:shadow-lg md:h-[84px] md:w-[160px] md:p-4"
                  >
                    <Image
                      src={`/images/other_company_logos/${logo}`}
                      alt={logo.replace(/\.[^/.]+$/, "")}
                      width={CARD_WIDTH}
                      height={CARD_HEIGHT}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
