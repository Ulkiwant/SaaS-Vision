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
    <section id="tarifs" className="border-y border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-leaf">
            Tarifs
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-[42px] md:leading-[1.1]">
            Une offre{" "}
            <em className="font-serif font-normal italic text-pine">claire</em>,
            sans surprise
          </h2>
          <p className="mt-4 text-[16px] text-body">
            Création une fois, abonnement ensuite. Vous savez toujours où vous
            en êtes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal
              key={o.name}
              delay={i * 90}
              className={`relative flex flex-col rounded-[22px] p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                o.popular
                  ? "bg-pine text-white shadow-lift hover:shadow-lift"
                  : "border border-line bg-paper shadow-soft hover:shadow-lift"
              }`}
            >
              {o.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-leaf px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-white">
                  Le plus choisi
                </span>
              )}
              <h3
                className={`text-[15px] font-bold uppercase tracking-[0.15em] ${
                  o.popular ? "text-mint" : "text-muted"
                }`}
              >
                {o.name}
              </h3>
              <p
                className={`mt-5 text-[34px] font-extrabold leading-none tracking-tight ${
                  o.popular ? "text-white" : "text-ink"
                }`}
              >
                dès {o.build}
              </p>
              <p
                className={`mt-1.5 text-[14px] font-medium ${
                  o.popular ? "text-mint/90" : "text-muted"
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
                    <span
                      aria-hidden
                      className={`mt-0.5 text-[13px] font-bold ${
                        o.popular ? "text-leaf" : "text-leaf"
                      }`}
                    >
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
                    ? "bg-white text-pine hover:bg-mint"
                    : "border border-line bg-white text-ink hover:border-pine/30 hover:shadow-soft"
                }`}
              >
                Demander un devis
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-8 text-center text-[14px] text-muted">
            Tarifs indicatifs, ajustés à votre projet lors du devis. Des aides à
            la digitalisation peuvent réduire votre coût.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
