import Reveal from "./Reveal";

export default function APropos() {
  return (
    <section id="a-propos" className="border-y border-line bg-mint/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            À propos
          </p>
          <blockquote className="mt-7 font-serif text-2xl leading-[1.4] text-ink md:text-[32px] md:leading-[1.4]">
            «&nbsp;SaaS Vision est né d&apos;une conviction simple : les TPE et
            PME méritent des outils aussi puissants que ceux des grandes
            entreprises — sans la complexité, ni les tarifs des grandes
            agences. Je conçois des logiciels sur mesure, rapides à déployer,
            que vous possédez <em className="italic text-leaf">vraiment</em> et
            qui évoluent avec vous.&nbsp;»
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
