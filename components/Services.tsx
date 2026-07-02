import Reveal from "./Reveal";

const services = [
  {
    title: "CRM sur mesure",
    text: "Suivez prospects, clients et ventes dans un outil qui parle votre langage — pas celui d'un manuel générique.",
  },
  {
    title: "ERP & gestion interne",
    text: "Facturation, stocks, opérations, RH : toute votre activité au même endroit, enfin claire et à jour.",
  },
  {
    title: "Outil métier spécifique",
    text: "Un logiciel pensé pour votre métier, et rien d'autre. Le vôtre, construit autour de votre vraie façon de faire.",
  },
  {
    title: "Organisation d'équipe",
    text: "Tâches, planning, collaboration : votre équipe alignée et le quotidien fluidifié, sans usine à gaz.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Ce que je construis
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[52px]">
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
              className="rounded-[20px] bg-pine-light p-7"
            >
              <h3 className="font-serif text-[24px] leading-snug text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                {s.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
