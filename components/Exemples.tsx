import Image from "next/image";
import Reveal from "./Reveal";
import chantier from "@/public/photos/chantier.jpg";
import formation from "@/public/photos/formation.jpg";
import entrepot from "@/public/photos/entrepot.jpg";

/* Situations types — présentées comme des exemples représentatifs, pas comme
   des références clients. Ne pas transformer en fausses études de cas. */
const exemples = [
  {
    secteur: "Artisan du bâtiment · 8 salariés",
    avant:
      "Les devis sur Excel, le suivi des chantiers sur papier, les photos perdues dans les téléphones de chacun.",
    apres:
      "Un outil unique : devis et factures en deux clics, chaque chantier suivi avec ses photos, ses heures et sa marge.",
    photo: chantier,
    alt: "Ouvriers sur un chantier de construction",
  },
  {
    secteur: "Organisme de formation · 5 formateurs",
    avant:
      "Les sessions dans un agenda, les émargements dans des classeurs, la panique avant chaque audit Qualiopi.",
    apres:
      "Sessions, émargements et indicateurs qualité au même endroit — le dossier d'audit se prépare tout seul.",
    photo: formation,
    alt: "Salle de formation avec un formateur et des participants",
  },
  {
    secteur: "Négoce & distribution · 12 personnes",
    avant:
      "Le stock sur un tableur remis à jour le soir, les commandes prises par téléphone et ressaisies à la main.",
    apres:
      "Un portail où les clients commandent eux-mêmes, un stock juste en temps réel, zéro ressaisie.",
    photo: entrepot,
    alt: "Allée d'un entrepôt de stockage avec des rayonnages",
  },
];

export default function Exemples() {
  return (
    <section id="exemples" className="border-y border-line bg-mint/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Exemples
          </p>
          <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[52px]">
            Concrètement, ça donne quoi&nbsp;?
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-body">
            Trois situations typiques de TPE, et ce qu&apos;un outil sur mesure
            y change au quotidien.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {exemples.map((e, i) => (
            <Reveal
              key={e.secteur}
              delay={i * 90}
              className="flex flex-col overflow-hidden rounded-[20px] border border-line bg-paper shadow-soft"
            >
              <div className="relative h-44 overflow-hidden border-b border-line">
                <Image
                  src={e.photo}
                  alt={e.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[13px] font-bold uppercase tracking-wider text-leaf">
                  {e.secteur}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-body">
                  <span className="font-semibold text-ink">Avant&nbsp;:</span>{" "}
                  {e.avant}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-body">
                  <span className="font-semibold text-ink">Avec l&apos;outil&nbsp;:</span>{" "}
                  {e.apres}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-8 text-center text-[15px] text-body">
            Votre métier ne ressemble à aucun de ces trois&nbsp;?{" "}
            <a href="#contact" className="font-semibold text-leaf underline-offset-4 hover:underline">
              Racontez-moi votre quotidien
            </a>{" "}
            — c&apos;est justement le principe du sur-mesure.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
