import Reveal from "./Reveal";

const iconClass = "h-7 w-7";
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19c.8-3 3-4.5 5.5-4.5S13.7 16 14.5 19" />
        <circle cx="17.5" cy="9.5" r="2.4" />
        <path d="M15.8 14.6c2.6-.3 4.4 1.1 4.9 3.4" />
      </svg>
    ),
    title: "CRM sur mesure",
    text: "Suivez prospects, clients et ventes dans un outil qui parle votre langage — pas celui d'un manuel générique.",
    inclus: ["Fiches clients à votre image", "Relances & historique", "Devis reliés aux contacts"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
        <path d="M3.5 9.5h17M9 4v16" />
      </svg>
    ),
    title: "ERP & gestion interne",
    text: "Facturation, stocks, opérations, RH : toute votre activité au même endroit, enfin claire et à jour.",
    inclus: ["Facturation & suivi des paiements", "Stocks en temps réel", "Vue d'ensemble de l'activité"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <path d="M14.5 6.5a4 4 0 1 0 3 3l3.8-3.8-2.5-2.5L15 7" />
        <path d="M9.5 14.5 4 20" />
        <circle cx="6" cy="18" r="2.6" />
      </svg>
    ),
    title: "Outil métier spécifique",
    text: "Un logiciel pensé pour votre métier, et rien d'autre. Le vôtre, construit autour de votre vraie façon de faire.",
    inclus: ["Votre vocabulaire, vos étapes", "Zéro fonction inutile", "Évolutif au fil des besoins"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
        <path d="M3.5 10h17M8 3v4M16 3v4" />
        <path d="m9.5 14.5 2 2 3.5-3.5" />
      </svg>
    ),
    title: "Organisation d'équipe",
    text: "Tâches, planning, collaboration : votre équipe alignée et le quotidien fluidifié, sans usine à gaz.",
    inclus: ["Planning partagé", "Tâches & responsabilités claires", "Accessible sur téléphone"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
      </svg>
    ),
    title: "Site vitrine & présence en ligne",
    text: "Un site sobre, rapide et bien référencé pour présenter votre activité — comme celui que vous êtes en train de lire. Seul, ou en complément de votre outil.",
    inclus: ["Design à l'image de votre entreprise", "Référencement local soigné", "Formulaire de contact & pages légales"],
    large: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Services
          </p>
          <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[52px]">
            Un outil pour chaque besoin, un seul interlocuteur.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-body">
            Vous n&apos;avez pas à jongler entre plusieurs prestataires. Je
            m&apos;occupe de tout, du premier croquis à la maintenance.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className={`rounded-[20px] bg-pine-light p-7 md:p-8 ${
                "large" in s && s.large ? "sm:col-span-2" : ""
              }`}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-paper text-leaf shadow-soft">
                {s.icon}
              </span>
              <h3 className="mt-5 font-display font-semibold text-[24px] leading-snug text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                {s.text}
              </p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-5">
                {s.inclus.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-body">
                    <span aria-hidden className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
