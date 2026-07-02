import Reveal from "./Reveal";

export default function APropos() {
  return (
    <section id="a-propos" className="border-y border-line bg-mint/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            À propos
          </p>
          <div className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-body">
            <p>
              SaaS Vision est un studio indépendant, volontairement petit. La
              personne qui répond à votre premier e-mail est la même que celle
              qui conçoit votre outil, l&apos;héberge et le fait évoluer. Pas
              d&apos;équipe commerciale, pas de sous-traitance.
            </p>
            <p>
              Le constat de départ est simple : les petites entreprises se
              débrouillent avec des tableurs qui débordent ou des abonnements
              à des logiciels pensés pour d&apos;autres qu&apos;elles. Elles
              méritent mieux — un outil construit autour de leur façon de
              faire, qu&apos;elles possèdent vraiment, à un prix qu&apos;une
              TPE peut assumer.
            </p>
            <p>
              Rester petit, c&apos;est un choix : moins de projets en
              parallèle, mais chaque client est connu par cœur.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
