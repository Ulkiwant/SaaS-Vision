import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        ink: "#10231B",
        body: "#4C5B54",
        muted: "#8A968F",
        line: "#E6EAE5",
        pine: {
          DEFAULT: "#0E3E2E",
          dark: "#0A2C21",
          light: "#EDF3EE",
        },
        leaf: "#18A05E",
        mint: "#DFF2E6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(16,35,27,0.06)",
        lift: "0 18px 44px rgba(16,35,27,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
