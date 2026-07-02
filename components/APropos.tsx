import Reveal from "./Reveal";

export default function APropos() {
  return (
    <section id="a-propos" className="border-y border-line bg-mint/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Qui est derrière SaaS Vision
          </p>
          <div className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-body">
            <p>
              Je m&apos;appelle Quentin. SaaS Vision, c&apos;est moi — pas une
              équipe commerciale, pas un plateau de développeurs à
              l&apos;étranger. La personne qui vous répond au premier e-mail
              est la même que celle qui conçoit votre outil, l&apos;héberge et
              le fait évoluer.
            </p>
            <p>
              J&apos;ai monté ce studio après un constat simple : les petites
              entreprises se débrouillent avec des tableurs qui débordent ou
              des abonnements à des logiciels pensés pour d&apos;autres
              qu&apos;elles. Elles méritent mieux — un outil construit autour
              de leur façon de faire, qu&apos;elles possèdent vraiment, à un
              prix qu&apos;une TPE peut assumer.
            </p>
            <p>
              Être seul, c&apos;est un choix. Ça veut dire moins de projets en
              parallèle, mais chaque client que je prends, je le connais par
              cœur.
            </p>
          </div>
          <p className="mt-8 font-serif text-2xl italic text-ink">Quentin</p>
          <p className="mt-1 text-[14px] text-muted">Fondateur de SaaS Vision</p>
        </Reveal>
      </div>
    </section>
  );
}
