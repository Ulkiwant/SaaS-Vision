import Counter from "./Counter";
import Reveal from "./Reveal";

const stats = [
  { render: <Counter value={50} suffix=" %" />, label: "moins cher qu'une agence" },
  { render: <Counter value={100} suffix=" %" />, label: "sur mesure, jamais générique" },
  { render: <Counter value={15} prefix="J+" />, label: "premiers écrans livrés vite" },
  { render: <Counter value={24} suffix="/7" />, label: "hébergé & maintenu" },
];

export default function Stats() {
  return (
    <section aria-label="Chiffres clés" className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 py-12 md:grid-cols-4 md:px-8 md:py-16">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center">
            <p className="text-4xl font-extrabold tracking-tight text-pine md:text-[44px]">
              {s.render}
            </p>
            <p className="mx-auto mt-2 max-w-[180px] text-[14px] font-medium text-body">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
