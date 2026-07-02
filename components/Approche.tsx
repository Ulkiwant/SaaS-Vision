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
    <section id="approche" className="border-y border-line bg-mint/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Approche
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[52px]">
            Simple pour vous,{" "}
            <em className="italic text-leaf">rigoureux</em> de mon côté.
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
              <span className="font-serif text-5xl italic text-leaf/30 md:text-6xl" aria-hidden>
                {s.num}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-ink">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-body">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
