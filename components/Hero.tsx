import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-4xl">
          <Reveal>
            <p className="text-[15px] font-medium text-muted">
              Studio indépendant, dans la Loire
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display font-semibold text-[44px] leading-[1.08] tracking-[-0.01em] text-ink md:text-[72px]">
              Le bon outil pour votre entreprise, conçu par quelqu&apos;un qui
              prend le temps de vous comprendre.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body md:text-xl">
              Pas d&apos;agence, pas de commercial, pas de logiciel tout fait.
              Vous m&apos;expliquez comment vous travaillez, je construis
              l&apos;outil qui s&apos;y adapte — CRM, gestion, outil métier. Et
              quand vous m&apos;appelez ensuite, c&apos;est moi qui décroche.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="w-full rounded-full bg-leaf px-7 py-3.5 text-center text-[16px] font-semibold text-white shadow-soft transition-colors duration-200 hover:bg-ink sm:w-auto"
              >
                M&apos;écrire
              </a>
              <a
                href="#approche"
                className="w-full rounded-full border border-ink/20 bg-transparent px-7 py-3.5 text-center text-[16px] font-semibold text-ink transition-colors duration-200 hover:border-ink/40 sm:w-auto"
              >
                Comment je travaille
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
