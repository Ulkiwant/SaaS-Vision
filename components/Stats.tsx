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
    <section aria-label="Engagements" className="bg-grad-dark relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="blob blob-a top-[-160px] left-[10%] h-[360px] w-[360px] bg-leaf/30" />
        <span className="blob blob-b bottom-[-160px] right-[8%] h-[320px] w-[320px] bg-coral/20" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-5 py-16 md:grid-cols-4 md:px-8 md:py-20">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <p className="font-display font-semibold text-5xl tracking-[-0.02em] text-white md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 max-w-[200px] text-[14px] leading-snug text-mint/50">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
