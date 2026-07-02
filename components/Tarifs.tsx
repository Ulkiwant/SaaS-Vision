import Reveal from "./Reveal";

const offers = [
  {
    name: "Simple",
    build: "1 500 €",
    run: "49 €",
    popular: false,
    features: ["Connexion sécurisée", "Hébergement", "Support e-mail"],
  },
  {
    name: "Standard",
    build: "3 000 €",
    run: "99 €",
    popular: true,
    features: ["Comptes & rôles", "Maintenance & évolutions", "Support prioritaire"],
  },
  {
    name: "Avancé",
    build: "6 000 €",
    run: "199 €",
    popular: false,
    features: ["Intégrations (paiement, API)", "Rôles avancés", "Accompagnement dédié"],
  },
];

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-leaf">
            Tarifs
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] tracking-[-0.01em] text-ink md:text-[52px]">
            Une offre claire, sans surprise.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-body">
            Création une fois, abonnement ensuite. Vous savez toujours où vous
            en êtes — et pourquoi. Chaque devis est écrit par moi, pour votre
            projet, pas généré depuis une grille.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal
              key={o.name}
              delay={i * 90}
              className={`relative flex flex-col rounded-[22px] p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                o.popular
                  ? "bg-pine text-white shadow-lift"
                  : "bg-pine-light shadow-soft hover:shadow-lift"
              }`}
            >
              <h3
                className={`font-serif text-[28px] ${
                  o.popular ? "text-white" : "text-ink"
                }`}
              >
                {o.name}
              </h3>
              <p
                className={`mt-5 text-[32px] font-extrabold leading-none tracking-tight ${
                  o.popular ? "text-white" : "text-ink"
                }`}
              >
                dès {o.build}
              </p>
              <p
                className={`mt-1.5 text-[14px] font-medium ${
                  o.popular ? "text-mint/70" : "text-muted"
                }`}
              >
                création · puis dès {o.run}/mois
              </p>
              <ul className="mt-7 flex flex-col gap-3">
                {o.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2.5 text-[15px] ${
                      o.popular ? "text-white/90" : "text-body"
                    }`}
                  >
                    <span aria-hidden className="mt-0.5 text-[13px] font-bold text-leaf">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 rounded-full px-6 py-3 text-center text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                  o.popular
                    ? "bg-leaf text-white hover:bg-white hover:text-pine"
                    : "border border-ink/20 text-ink hover:border-ink/40 hover:shadow-soft"
                }`}
              >
                On en parle&nbsp;?
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-8 text-center text-[14px] text-muted">
            Tarifs indicatifs, ajustés à votre projet lors du devis. Des aides
            à la digitalisation existent selon votre région — je vous aide à
            voir si vous y avez droit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
