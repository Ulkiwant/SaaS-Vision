import Image from "next/image";
import Reveal from "./Reveal";
import bureau from "@/public/photos/bureau.jpg";

export default function APropos() {
  return (
    <section id="a-propos" className="border-y border-line bg-mint/50 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="max-w-2xl">
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
        <Reveal from="right" className="relative h-72 overflow-hidden rounded-[22px] border border-line shadow-soft lg:h-[380px]">
          <Image
            src={bureau}
            alt="Un espace de travail lumineux avec un ordinateur portable"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            placeholder="blur"
          />
        </Reveal>
      </div>
    </section>
  );
}
