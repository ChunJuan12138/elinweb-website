import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0f4c81",
          50: "#eff7ff",
          100: "#dbecff",
          200: "#beddff",
          300: "#91c6ff",
          400: "#5aa4f7",
          500: "#3486e6",
          600: "#1f69c4",
          700: "#1a549f",
          800: "#0f4c81",
          900: "#113f68",
          950: "#0b2740",
        },
        accent: {
          DEFAULT: "#c23a25",
          50: "#fdf3f1",
          100: "#fde5e1",
          200: "#fbcfc8",
          300: "#f6afa3",
          400: "#ef816e",
          500: "#e35946",
          600: "#c23a25",
          700: "#a42d1d",
          800: "#88291c",
          900: "#71281e",
          950: "#3d110d",
        },
        steel: {
          50: "#f7f8f9",
          100: "#eef0f2",
          200: "#dfe2e6",
          300: "#c6ccd3",
          400: "#a7b0ba",
          500: "#8b96a3",
          600: "#77828f",
          700: "#616b76",
          800: "#535b64",
          900: "#484e56",
          950: "#2b2e33",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        swing: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        swing: "swing 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
