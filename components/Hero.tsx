"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

/* Démo fictive d'un outil de gestion d'artisan, en pur HTML/CSS aux couleurs du site.
   Entreprise et chiffres inventés — ne pas transformer en référence client. */
function HeroMockup() {
  const mois: [string, number][] = [
    ["Fév", 38], ["Mar", 52], ["Avr", 44], ["Mai", 65], ["Juin", 58], ["Juil", 82],
  ];
  const clients = [
    { nom: "Dupont BTP", initiales: "DB", montant: "3 240 €", tag: "Devis envoyé", tone: "bg-leaf/15 text-leaf" },
    { nom: "Boulangerie Martin", initiales: "BM", montant: "1 850 €", tag: "Signé", tone: "bg-pine/10 text-pine" },
    { nom: "Garage de la Gare", initiales: "GG", montant: "940 €", tag: "À relancer", tone: "bg-mint text-body" },
  ];
  const nav = ["Tableau de bord", "Devis", "Chantiers", "Clients", "Planning"];
  return (
    <div aria-hidden className="relative select-none">
      <div className="float-soft overflow-hidden rounded-[22px] border border-line bg-paper shadow-lift">
        {/* Barre de fenêtre */}
        <div className="flex items-center gap-1.5 border-b border-line px-5 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-leaf/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-pine/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          <span className="ml-4 rounded-full bg-mint/70 px-4 py-1 text-[10px] font-medium text-body">
            gestion.menuiserie-laurent.fr
          </span>
        </div>
        <div className="flex">
          {/* Menu latéral */}
          <div className="hidden w-40 flex-col border-r border-line p-3.5 sm:flex">
            <div className="flex items-center gap-2 px-1.5 pb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-pine text-[11px] font-bold text-mint">
                ML
              </span>
              <span className="text-[11px] font-bold leading-tight text-ink">
                Menuiserie<br />Laurent
              </span>
            </div>
            {nav.map((item, i) => (
              <span
                key={item}
                className={`rounded-lg px-2.5 py-1.5 text-[11px] font-semibold ${
                  i === 0 ? "bg-leaf/15 text-leaf" : "text-body"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
          {/* Contenu */}
          <div className="flex-1 p-4">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-bold text-ink">Bonjour Marc 👋</span>
              <span className="rounded-full bg-leaf px-3 py-1.5 text-[10px] font-bold text-white">
                + Nouveau devis
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["Facturé en juillet", "12 450 €", "+18 %", "text-leaf font-bold"],
                ["Devis en attente", "4", "6 900 €", "text-muted font-medium"],
                ["Chantiers en cours", "3", "aucun retard", "text-muted font-medium"],
              ].map(([label, valeur, detail, tone]) => (
                <div key={label} className="rounded-xl bg-pine-light p-2.5">
                  <span className="block text-[9px] font-semibold uppercase tracking-wide text-muted">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-[14px] font-extrabold tracking-tight text-ink">
                    {valeur}
                  </span>
                  <span className={`text-[9px] ${tone}`}>{detail}</span>
                </div>
              ))}
            </div>
            {/* Graphique */}
            <div className="mt-2.5 rounded-xl bg-pine-light p-3">
              <span className="text-[9px] font-semibold uppercase tracking-wide text-muted">
                Chiffre d&apos;affaires — 6 derniers mois
              </span>
              <div className="mt-2 flex h-16 items-end gap-2">
                {mois.map(([m, h], i) => (
                  <div key={m} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
                    <span
                      style={{ height: `${h}%` }}
                      className={`w-full rounded-t-md ${i === 5 ? "bg-leaf" : "bg-pine/25"}`}
                    />
                    <span className="text-[8px] font-medium text-muted">{m}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Lignes clients */}
            <div className="mt-2.5 flex flex-col gap-1.5">
              {clients.map((c) => (
                <div
                  key={c.nom}
                  className="flex items-center gap-2.5 rounded-xl border border-line px-3 py-1.5"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mint text-[9px] font-bold text-pine">
                    {c.initiales}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[11px] font-semibold text-ink">{c.nom}</span>
                    <span className="block text-[9px] text-muted">{c.montant}</span>
                  </span>
                  <span className={`ml-auto rounded-full px-2.5 py-1 text-[10px] font-semibold ${c.tone}`}>
                    {c.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Carte de notification flottante */}
      <div className="absolute -bottom-5 -left-4 flex items-center gap-2.5 rounded-2xl border border-line bg-paper px-4 py-3 shadow-lift md:-left-8">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-leaf text-[13px] font-bold text-white">
          ✓
        </span>
        <span>
          <span className="block text-[12px] font-semibold text-ink">Devis accepté — Boulangerie Martin</span>
          <span className="block text-[11px] text-muted">il y a 2 minutes</span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const mockupRotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="relative overflow-hidden pt-36 pb-20 md:pt-48 md:pb-28"
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ y: blobY }}>
        <span className="blob blob-a -top-32 -left-24 h-[420px] w-[420px] bg-leaf/40" />
        <span className="blob blob-b top-10 right-[-140px] h-[380px] w-[380px] bg-coral/30" />
        <span className="blob blob-a top-[60%] left-[35%] h-[260px] w-[260px] bg-leaf/20" />
      </motion.div>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-1.5 text-[14px] font-medium text-muted shadow-soft backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                Studio indépendant, dans la Loire
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display font-semibold text-[40px] leading-[1.05] tracking-[-0.025em] text-ink md:text-[52px] lg:text-[58px]">
                Le bon outil{" "}
                <span className="text-gradient">pour votre entreprise</span>,
                conçu par quelqu&apos;un qui prend le temps de vous comprendre.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body md:text-xl">
                Pas d&apos;agence, pas de commercial, pas de logiciel tout fait.
                Vous m&apos;expliquez comment vous travaillez, je construis
                l&apos;outil qui s&apos;y adapte — CRM, gestion, outil métier. Et
                quand vous m&apos;appelez ensuite, c&apos;est moi qui décroche.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="w-full rounded-full bg-grad-primary px-7 py-3.5 text-center text-[16px] font-semibold text-white shadow-glow transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
                >
                  M&apos;écrire
                </a>
                <a
                  href="#approche"
                  className="w-full rounded-full border border-ink/15 bg-paper/60 px-7 py-3.5 text-center text-[16px] font-semibold text-ink backdrop-blur transition-colors duration-200 hover:border-ink/30 sm:w-auto"
                >
                  Comment je travaille
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} from="right" className="hidden lg:block">
            <motion.div style={{ y: mockupY, rotate: mockupRotate }}>
              <HeroMockup />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
