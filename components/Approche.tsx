import Reveal from "./Reveal";

const steps = [
  {
    num: "1",
    title: "On commence par parler",
    text: "Un échange gratuit, sans engagement, où c'est vous qui parlez : votre métier, vos habitudes, ce qui coince au quotidien. Je ne propose rien avant d'avoir compris.",
  },
  {
    num: "2",
    title: "Je construis, vous voyez vite",
    text: "Vous recevez des premiers écrans en quelques jours, pas dans trois mois. On ajuste ensemble, jusqu'à ce que l'outil colle à votre réalité.",
  },
  {
    num: "3",
    title: "Je reste là",
    text: "Hébergement, maintenance, évolutions : votre outil grandit avec votre entreprise, et vous gardez le même interlocuteur qu'au premier jour.",
  },
];

export default function Approche() {
  return (
    <section id="approche" className="border-y border-line bg-mint/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Comment ça se passe
          </p>
          <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[52px]">
            Simple pour vous, rigoureux de mon côté.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              as="li"
              delay={i * 90}
              className="rounded-[20px] border border-line bg-paper p-8"
            >
              <span className="font-display font-semibold text-4xl text-leaf/50" aria-hidden>
                {s.num}.
              </span>
              <h3 className="mt-4 font-display font-semibold text-2xl text-ink">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-body">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
