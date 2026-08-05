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
          DEFAULT: "#1e3a5f",
          50: "#eef5fb",
          100: "#d6e6f5",
          200: "#b0d0ec",
          300: "#7fb3df",
          400: "#4a90ce",
          500: "#2f75b8",
          600: "#235d9a",
          700: "#1e4c7d",
          800: "#1e3a5f",
          900: "#18314e",
          950: "#0f1f32",
        },
        accent: {
          DEFAULT: "#c85a17",
          50: "#fdf4ef",
          100: "#f9e4d8",
          200: "#f2c5b0",
          300: "#ea9e7d",
          400: "#df7348",
          500: "#c85a17",
          600: "#a74811",
          700: "#853814",
          800: "#6c2f14",
          900: "#5a2a14",
          950: "#311309",
        },
        steel: {
          50: "#f6f7f8",
          100: "#ebedf0",
          200: "#d5d9de",
          300: "#b3bac3",
          400: "#8a94a3",
          500: "#6b7586",
          600: "#565e6d",
          700: "#474d59",
          800: "#3d424c",
          900: "#363941",
          950: "#22252c",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
export default config;
