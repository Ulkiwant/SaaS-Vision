import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "On conçoit",
    text: "On part de votre façon de travailler pour définir l'outil idéal. Cadrage clair, périmètre maîtrisé.",
  },
  {
    num: "02",
    title: "On construit",
    text: "Développement rapide sur une base éprouvée et sécurisée, livré en production. Résultat visible vite.",
  },
  {
    num: "03",
    title: "On fait vivre",
    text: "Hébergement, maintenance et évolutions : votre outil grandit avec votre entreprise.",
  },
];

export default function Approche() {
  return (
    <section id="approche" className="border-y border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-leaf">
            Approche
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-[42px] md:leading-[1.1]">
            Simple pour vous,{" "}
            <em className="font-serif font-normal italic text-pine">
              rigoureux pour nous
            </em>
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              as="li"
              delay={i * 90}
              className="relative rounded-[20px] border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              <span className="font-serif text-5xl italic text-mint md:text-6xl" aria-hidden>
                {s.num}
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-body">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
