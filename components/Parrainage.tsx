import Reveal from "./Reveal";

export default function Parrainage() {
  return (
    <section id="parrainage" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
              Parrainage
            </p>
            <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[46px]">
              Vous connaissez une entreprise qui pourrait en avoir besoin&nbsp;?
            </h2>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-body">
              Si vous êtes déjà client et que vous me mettez en relation avec
              quelqu&apos;un qui devient client à son tour, c&apos;est
              gagnant pour vous deux — sans limite du nombre de
              recommandations.
            </p>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-4">
            <div className="rounded-[20px] bg-pine-light p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-leaf text-[18px] font-bold text-white">
                1
              </span>
              <h3 className="mt-4 font-display font-semibold text-[20px] text-ink">
                Vous, le parrain
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-body">
                Un mois d&apos;abonnement offert dès que la personne que vous
                recommandez devient cliente. Pas de plafond : chaque
                recommandation compte.
              </p>
            </div>
            <div className="rounded-[20px] border border-line bg-paper p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mint text-[18px] font-bold text-pine">
                2
              </span>
              <h3 className="mt-4 font-display font-semibold text-[20px] text-ink">
                L&apos;entreprise que vous recommandez
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-body">
                10&nbsp;% de remise sur la création de son outil, simplement
                en mentionnant votre nom au premier échange.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
