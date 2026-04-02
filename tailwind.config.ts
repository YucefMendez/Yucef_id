import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          950: "#0D0A07",
          900: "#141210",
          800: "#1C1916",
          700: "#28231C",
          600: "#352D24",
        },
        // Caramel accent — derived from light brown skin & cream suit palette
        accent: {
          DEFAULT: "#C09060",
          dark: "#906840",
          muted: "rgba(192,144,96,0.15)",
        },
        // Cream reference — suit tone
        cream: {
          DEFAULT: "#E8DCC8",
          light: "#F4EEE4",
          dark: "#C8B898",
        },
        // Espresso — black shirt/hair reference
        espresso: {
          DEFAULT: "#1A1208",
          light: "#2A2018",
        },
        teal: {
          DEFAULT: "#00D4BE",
          dark: "#009E8E",
          muted: "rgba(0,212,190,0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        jetbrains: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
