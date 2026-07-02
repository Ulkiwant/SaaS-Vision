import Reveal from "./Reveal";

const services = [
  {
    icon: "◎",
    title: "CRM sur mesure",
    text: "Suivez prospects, clients et ventes dans un outil pensé pour votre process commercial.",
  },
  {
    icon: "▦",
    title: "ERP & gestion interne",
    text: "Facturation, stocks, opérations, RH : centralisez toute votre activité.",
  },
  {
    icon: "✦",
    title: "Outils métier spécifiques",
    text: "Un logiciel unique, conçu autour de votre métier et de rien d'autre.",
  },
  {
    icon: "⌘",
    title: "Organisation d'équipe",
    text: "Tâches, planning, collaboration : alignez vos équipes et fluidifiez le quotidien.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-leaf">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-[42px] md:leading-[1.1]">
            Un outil pour chaque besoin,{" "}
            <em className="font-serif font-normal italic text-pine">
              un seul interlocuteur
            </em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className="group rounded-[20px] border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span
                aria-hidden
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-pine-light text-lg text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-mint"
              >
                {s.icon}
              </span>
              <h3 className="mt-5 text-[18px] font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-body">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
