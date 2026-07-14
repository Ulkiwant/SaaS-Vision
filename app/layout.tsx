import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Polices auto-hébergées : aucune requête vers Google (RGPD-friendly).
const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

const display = localFont({
  src: "./fonts/bricolage-grotesque-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-display",
  display: "swap",
});

// Serif réservé au logo (wordmark SaaS Vision)
const logo = localFont({
  src: "./fonts/lora-latin-wght-normal.woff2",
  weight: "400 700",
  variable: "--font-logo",
  display: "swap",
});

const SITE_URL = "https://saasvision.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SaaS Vision — Logiciels sur mesure pour TPE & PME",
  description:
    "Je conçois, héberge et fais évoluer les logiciels dont votre entreprise a vraiment besoin : CRM, ERP, outils métier. Un développeur indépendant qui prend le temps de vous comprendre.",
  keywords: [
    "logiciel sur mesure",
    "CRM sur mesure",
    "ERP PME",
    "outil métier",
    "TPE",
    "PME",
    "Loire",
    "Saint-Étienne",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "SaaS Vision",
    title: "SaaS Vision — Logiciels sur mesure pour TPE & PME",
    description:
      "La puissance d'un logiciel sur mesure, sans la complexité ni le prix d'une agence.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Vision — Logiciels sur mesure pour TPE & PME",
    description:
      "La puissance d'un logiciel sur mesure, sans la complexité ni le prix d'une agence.",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "eEaFhtj9-sJlFvPwn38_9P7J2snTgvAbw-xm-2rNOcA",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SaaS Vision",
  legalName: "Quentin Celette",
  url: SITE_URL,
  email: "contact@saasvision.fr",
  description:
    "Studio de logiciels sur mesure pour TPE et PME : CRM, ERP, outils métier et outils d'organisation.",
  areaServed: "Loire (42), France",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 rue Jean Baptiste Dupré",
    postalCode: "42530",
    addressLocality: "Saint-Genest-Lerpt",
    addressCountry: "FR",
  },
  taxID: "107 141 764",
  foundingDate: "2026-07-07",
  slogan:
    "La puissance d'un logiciel sur mesure, sans la complexité ni le prix d'une agence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${display.variable} ${logo.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
