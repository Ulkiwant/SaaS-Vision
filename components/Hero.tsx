import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      {/* Orbes décoratifs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="orb orb-a left-[10%] top-[12%] h-72 w-72 bg-mint/70" />
        <div className="orb orb-b right-[6%] top-[34%] h-80 w-80 bg-pine-light/80" />
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-4 py-2 text-[13px] font-semibold text-ink shadow-soft">
              <span className="pulse-dot h-2 w-2 rounded-full bg-leaf" />
              Basé dans la Loire · logiciels faits main
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 font-serif text-[44px] leading-[1.08] tracking-[-0.01em] text-ink md:text-[72px]">
              Le bon outil pour votre entreprise, conçu par{" "}
              <em className="italic text-leaf">quelqu&apos;un</em> qui prend le
              temps de vous comprendre.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body md:text-xl">
              Pas une agence, pas un logiciel tout fait. Une vraie personne qui
              écoute votre façon de travailler et construit l&apos;outil qui
              s&apos;y adapte — CRM, ERP, gestion. Et quand vous appelez,
              c&apos;est toujours la même voix qui répond.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group w-full rounded-full bg-leaf px-7 py-3.5 text-center text-[16px] font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-lift sm:w-auto"
              >
                Parlons de votre projet{" "}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#approche"
                className="w-full rounded-full border border-ink/20 bg-transparent px-7 py-3.5 text-center text-[16px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-ink/40 hover:shadow-soft sm:w-auto"
              >
                Voir comment je travaille
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
