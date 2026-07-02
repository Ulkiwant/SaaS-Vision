import Reveal from "./Reveal";

const questions = [
  {
    q: "Combien ça coûte, concrètement ?",
    a: "Une création facturée une seule fois (à partir de 1 500 € pour un outil simple, jusqu'à 12 000 € pour un projet avancé avec intégrations), puis un abonnement mensuel qui couvre l'hébergement, la maintenance et le support (de 49 à 349 €/mois selon l'outil). Le devis est fixé avant de commencer : pas de compteur qui tourne.",
  },
  {
    q: "Combien de temps avant d'avoir mon outil ?",
    a: "Vous voyez les premiers écrans sous 7 jours. Un outil simple est en production en 2 à 4 semaines, un projet plus riche en 1 à 2 mois. Vous l'utilisez dès la première version : on affine ensuite sur du réel, pas sur des maquettes.",
  },
  {
    q: "À qui appartient le logiciel ?",
    a: "À vous. Le code source est votre propriété, ce qui est rarement le cas avec un abonnement classique. Je l'héberge et je le maintiens, mais vous n'êtes jamais prisonnier.",
  },
  {
    q: "Où sont hébergées mes données ?",
    a: "Sur des serveurs situés en Europe, sauvegardés quotidiennement, avec connexions chiffrées et accès protégés par mot de passe et rôles. Le fonctionnement est conforme au RGPD.",
  },
  {
    q: "Et si j'ai besoin d'une modification plus tard ?",
    a: "C'est prévu — c'est même l'intérêt du sur-mesure. Les petites corrections sont couvertes par l'abonnement ; les nouvelles fonctionnalités sont chiffrées à l'unité, vous validez avant tout développement.",
  },
  {
    q: "Mon équipe n'est pas à l'aise avec l'informatique…",
    a: "C'est justement pour elle que l'outil est conçu : vos mots, vos étapes, rien de superflu. Je forme votre équipe à la livraison, et un outil qui épouse vos habitudes s'apprend en heures, pas en semaines.",
  },
  {
    q: "Peut-on récupérer ce qu'on a déjà (Excel, ancien logiciel) ?",
    a: "Oui, la reprise de l'existant fait partie du projet : vos fichiers Excel, vos contacts ou vos données actuelles sont importés pour démarrer avec votre historique, pas avec un outil vide.",
  },
  {
    q: "Que se passe-t-il si j'arrête l'abonnement ?",
    a: "Vous repartez avec votre code source et l'export complet de vos données, dans un format réutilisable. L'abonnement paie un service (hébergement, maintenance, support), pas une prise en otage.",
  },
  {
    q: "Existe-t-il des aides pour financer ce type de projet ?",
    a: "Souvent, oui : les régions et certains organismes proposent des aides à la digitalisation des TPE/PME. J'en tiens compte dans le devis et je vous aide à vérifier ce à quoi vous avez droit.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
              Questions fréquentes
            </p>
            <h2 className="mt-4 font-display font-semibold text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[44px]">
              Les questions qu&apos;on me pose avant de se lancer.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-body">
              Il en manque une&nbsp;?{" "}
              <a href="#contact" className="font-semibold text-leaf underline-offset-4 hover:underline">
                Posez-la moi directement
              </a>
              , la réponse arrive sous 24 à 48 h.
            </p>
          </Reveal>

          <div className="flex flex-col gap-3">
            {questions.map((item, i) => (
              <Reveal key={item.q} delay={Math.min(i * 50, 250)}>
                <details className="group rounded-[18px] border border-line bg-paper open:shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="font-display font-semibold text-[18px] leading-snug text-ink">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-[18px] font-medium text-leaf transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-[15px] leading-relaxed text-body">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
