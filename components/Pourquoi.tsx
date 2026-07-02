import Image from "next/image";
import Reveal from "./Reveal";
import equipe from "@/public/photos/equipe.jpg";

const points = [
  {
    title: "Vous parlez à un humain",
    text: "Une seule personne, qui connaît votre projet par cœur. Pas de hotline, pas de numéro de ticket.",
  },
  {
    title: "Sur mesure, jamais générique",
    text: "Votre outil épouse votre métier. Je ne vous fais pas rentrer dans une case toute faite.",
  },
  {
    title: "Moins cher qu'une agence",
    text: "Pas de locaux, pas de commerciaux, pas d'intermédiaires : vous payez le travail, pas la structure.",
  },
  {
    title: "Le code est à vous",
    text: "Vous êtes propriétaire de votre logiciel. Hébergé par mes soins, mais jamais prisonnier.",
  },
];

export default function Pourquoi() {
  return (
    <section id="pourquoi" className="bg-pine py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Pourquoi SaaS Vision
          </p>
          <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.01em] text-mint md:text-[52px]">
            Le bon outil change tout.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-mint/70">
            Les outils génériques vous imposent leur logique. Je construis
            autour de la vôtre — et je reste à vos côtés pour la suite.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} as="li" delay={i * 70}>
                <h3 className="font-display font-semibold text-[21px] leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mint/70">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </ul>
          <Reveal from="right" className="relative h-72 overflow-hidden rounded-[22px] border border-mint/20 lg:h-full lg:min-h-[340px]">
            <Image
              src={equipe}
              alt="Une équipe au travail autour d'une table avec ses ordinateurs"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              placeholder="blur"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
