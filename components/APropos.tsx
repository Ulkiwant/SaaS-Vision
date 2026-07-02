import Reveal from "./Reveal";

export default function APropos() {
  return (
    <section id="a-propos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-pine px-7 py-14 text-center md:px-16 md:py-20">
            <div
              aria-hidden
              className="orb orb-a absolute -right-20 -top-20 h-72 w-72 bg-leaf/20"
            />
            <div
              aria-hidden
              className="orb orb-b absolute -bottom-24 -left-16 h-64 w-64 bg-mint/10"
            />
            <p className="relative text-[13px] font-bold uppercase tracking-[0.2em] text-leaf">
              À propos
            </p>
            <blockquote className="relative mx-auto mt-6 max-w-3xl text-xl font-medium leading-relaxed text-white md:text-[26px] md:leading-[1.45]">
              «&nbsp;SaaS Vision est né d&apos;une conviction simple : les TPE
              et PME méritent des outils aussi puissants que ceux des grandes
              entreprises — sans la complexité, ni les tarifs des grandes
              agences. Nous concevons des logiciels sur mesure, rapides à
              déployer, que vous possédez vraiment et qui évoluent avec
              vous.&nbsp;»
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
