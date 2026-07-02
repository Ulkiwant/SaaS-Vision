import Reveal from "./Reveal";

const bars = [42, 58, 45, 70, 62, 84, 76, 95];

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24">
      {/* Orbes décoratifs */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="orb orb-a left-[8%] top-[10%] h-72 w-72 bg-mint/80" />
        <div className="orb orb-b right-[4%] top-[30%] h-80 w-80 bg-pine-light" />
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-semibold text-pine shadow-soft">
              <span className="pulse-dot h-2 w-2 rounded-full bg-leaf" />
              Logiciels sur mesure pour TPE &amp; PME
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink md:text-[64px]">
              Des outils{" "}
              <em className="font-serif font-normal italic text-pine">
                sur&nbsp;mesure
              </em>{" "}
              pour faire avancer votre entreprise
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body md:text-xl">
              SaaS Vision conçoit, héberge et fait évoluer les logiciels dont
              votre entreprise a vraiment besoin — CRM, ERP, outils métier.
              Vous décrivez votre façon de travailler, on construit l&apos;outil
              qui s&apos;y adapte.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group w-full rounded-full bg-ink px-7 py-3.5 text-[16px] font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-pine hover:shadow-lift sm:w-auto"
              >
                Demander un devis{" "}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#services"
                className="w-full rounded-full border border-line bg-white px-7 py-3.5 text-[16px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-pine/30 hover:shadow-soft sm:w-auto"
              >
                Découvrir nos offres
              </a>
            </div>
          </Reveal>
        </div>

        {/* Mockup tableau de bord */}
        <Reveal delay={200} className="mt-16 md:mt-20">
          <div
            aria-hidden
            className="mx-auto max-w-4xl rounded-[24px] border border-line bg-white p-2 shadow-lift"
          >
            <div className="rounded-[18px] bg-paper p-5 md:p-8">
              {/* Barre fenêtre */}
              <div className="flex items-center gap-1.5 pb-5">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="ml-3 h-2 w-32 rounded-full bg-line/70" />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {/* KPI */}
                <div className="rounded-2xl border border-line bg-white p-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted">
                    Chiffre d&apos;affaires
                  </p>
                  <p className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                    48 250 €
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-leaf">
                    ↑ +12 % ce mois
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-white p-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted">
                    Devis en cours
                  </p>
                  <p className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                    17
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-leaf">
                    ↑ 5 signés cette semaine
                  </p>
                </div>
                {/* Mini graphique */}
                <div className="rounded-2xl border border-line bg-white p-5">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted">
                    Activité
                  </p>
                  <div className="mt-4 flex h-16 items-end gap-1.5">
                    {bars.map((h, i) => (
                      <span
                        key={i}
                        className={`flex-1 rounded-t-md ${
                          i === bars.length - 1 ? "bg-leaf" : "bg-mint"
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
