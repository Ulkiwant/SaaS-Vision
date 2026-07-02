import Reveal from "./Reveal";

const points = [
  "Vous parlez à la personne qui code",
  "Premiers écrans en quelques jours",
  "Le code vous appartient",
  "Réponse sous 24–48 h",
];

export default function Stats() {
  return (
    <section aria-label="Engagements" className="bg-pine">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 py-8 sm:grid-cols-2 md:grid-cols-4 md:px-8 md:py-10">
        {points.map((p, i) => (
          <Reveal key={p} delay={i * 80} className="flex items-center gap-3">
            <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-leaf" />
            <p className="text-[15px] font-medium text-mint">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
