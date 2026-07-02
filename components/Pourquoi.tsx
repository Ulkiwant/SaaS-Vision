import Reveal from "./Reveal";

const points = [
  {
    title: "Sur mesure, pas standard",
    text: "Votre outil s'adapte à votre métier, pas l'inverse.",
  },
  {
    title: "Moins cher qu'une agence",
    text: "La qualité d'une agence à une fraction du prix.",
  },
  {
    title: "Un outil qui vous appartient",
    text: "Hébergé et maintenu par nos soins ; le code est à vous.",
  },
  {
    title: "Sécurité & confidentialité",
    text: "Chaque client dispose d'un espace totalement isolé.",
  },
];

export default function Pourquoi() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-leaf">
              Pourquoi SaaS Vision
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-[42px] md:leading-[1.1]">
              Le bon outil change{" "}
              <em className="font-serif font-normal italic text-pine">tout</em>
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-body">
              Les outils génériques vous imposent leur logique. Nous
              construisons autour de la vôtre — et nous restons à vos côtés
              pour la suite.
            </p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal
                key={p.title}
                as="li"
                delay={i * 70}
                className="rounded-[20px] border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-mint text-[13px] font-bold text-pine"
                >
                  ✓
                </span>
                <h3 className="mt-4 text-[16px] font-bold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-body">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
