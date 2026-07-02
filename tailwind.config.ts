import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fond sauge/crème
        paper: "#F2F0E8",
        // Vert forêt (titres, boutons sombres, sections dark)
        ink: "#283A2E",
        // Corps de texte
        body: "#5A6355",
        muted: "#8E937F",
        line: "#DEDACA",
        pine: {
          DEFAULT: "#24372B",
          dark: "#1C2C22",
          light: "#EAE7D9",
        },
        // Accent terracotta
        leaf: "#C2673E",
        // Sable chaud (cartes, badges)
        mint: "#E9E6D8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        logo: ["var(--font-logo)", "Georgia", "serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(40,58,46,0.07)",
        lift: "0 18px 44px rgba(40,58,46,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
