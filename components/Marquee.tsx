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
  "Site vitrine",
];

export default function Marquee() {
  return (
    <div aria-hidden className="relative overflow-hidden bg-ink py-6">
      <div className="edge-fade marquee-track flex w-max items-center">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-display font-semibold text-[19px] text-mint/60">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
          </span>
        ))}
      </div>
    </div>
  );
}
