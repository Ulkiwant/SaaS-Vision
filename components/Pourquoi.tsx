import Reveal from "./Reveal";

const points = [
  {
    title: "Vous parlez à un humain",
    text: "Une seule personne, qui connaît votre projet par cœur. Pas de hotline, pas de numéro de ticket.",
  },
  {
    title: "Sur mesure, jamais générique",
    text: "Votre outil épouse votre métier. On ne vous fait pas rentrer dans une case toute faite.",
  },
  {
    title: "Moins cher qu'une agence",
    text: "La qualité d'une agence, sans la structure ni les tarifs qui vont avec.",
  },
  {
    title: "Le code est à vous",
    text: "Vous êtes propriétaire de votre logiciel. Hébergé par mes soins, mais jamais prisonnier.",
  },
];

export default function Pourquoi() {
  return (
    <section className="bg-pine py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Pourquoi SaaS Vision
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-[-0.01em] text-mint md:text-[52px]">
            Le bon outil change <em className="italic text-leaf">tout</em>.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-mint/70">
            Les outils génériques vous imposent leur logique. Je construis
            autour de la vôtre — et je reste à vos côtés pour la suite.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} as="li" delay={i * 70} className="flex gap-4">
              <span
                aria-hidden
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf text-[13px] font-bold text-white"
              >
                ✓
              </span>
              <div>
                <h3 className="font-serif text-[21px] leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mint/70">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
