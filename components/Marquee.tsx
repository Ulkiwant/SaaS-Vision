const items = [
  "CRM & suivi commercial",
  "Devis & facturation",
  "Planning d'équipe",
  "Suivi de chantier",
  "Gestion de stock",
  "Portail client",
  "Prise de rendez-vous",
  "Qualité & conformité",
  "Interventions terrain",
  "Tableaux de bord",
];

export default function Marquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-line bg-mint/40 py-5"
    >
      <div className="marquee-track flex w-max items-center">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-display font-semibold text-[19px] text-ink/50">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-leaf/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
