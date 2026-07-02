import Counter from "./Counter";
import Reveal from "./Reveal";

const stats = [
  { value: 7, suffix: " jours", label: "pour voir vos premiers écrans" },
  { value: 100, suffix: " %", label: "sur mesure, sur un socle éprouvé" },
  { value: 48, suffix: " h", label: "de délai maximum de réponse" },
  { value: 1, suffix: "", label: "interlocuteur, du devis à la maintenance" },
];

export default function Stats() {
  return (
    <section aria-label="Engagements" className="bg-pine">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-12 md:grid-cols-4 md:px-8 md:py-14">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <p className="font-display font-semibold text-4xl text-mint md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 max-w-[200px] text-[14px] leading-snug text-mint/70">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
