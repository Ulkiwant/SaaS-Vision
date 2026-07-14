import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fond clair, blanc cassé légèrement frais
        paper: "#F5F5FA",
        // Bleu nuit quasi noir (titres, boutons sombres, sections dark)
        ink: "#0B0E1F",
        // Corps de texte
        body: "#464B6A",
        muted: "#8489AA",
        line: "#E3E4F0",
        pine: {
          DEFAULT: "#141833",
          dark: "#090B18",
          light: "#ECEDFB",
        },
        // Accent bleu électrique
        leaf: "#4654F5",
        // Tinte glacée claire (cartes, badges, texte clair sur fond sombre)
        mint: "#E8E9FC",
        // Pop secondaire chaud (contraste avec le bleu, hérité de l'ancienne DA)
        coral: "#FF6B4D",
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
        soft: "0 2px 20px rgba(11,14,31,0.07)",
        lift: "0 18px 44px rgba(11,14,31,0.16)",
        glow: "0 8px 40px rgba(70,84,245,0.35)",
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #4654F5 0%, #7C6CFF 50%, #FF6B4D 100%)",
        "grad-dark": "linear-gradient(160deg, #141833 0%, #0B0E1F 60%, #1B1450 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
