import Reveal from "./Reveal";

/* Mockup stylisé d'un outil de gestion, construit en pur CSS aux couleurs du site. */
function HeroMockup() {
  const bars = [38, 62, 46, 78, 58, 88, 70];
  const rows = [
    { name: "Dupont BTP", tag: "Devis envoyé", tone: "bg-leaf/15 text-leaf" },
    { name: "Boulangerie Martin", tag: "Signé", tone: "bg-pine/10 text-pine" },
    { name: "Garage de la Gare", tag: "À relancer", tone: "bg-mint text-body" },
  ];
  return (
    <div aria-hidden className="relative select-none">
      <div className="float-soft rounded-[22px] border border-line bg-paper shadow-lift">
        {/* Barre de fenêtre */}
        <div className="flex items-center gap-1.5 border-b border-line px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-leaf/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-pine/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          <span className="ml-4 h-5 w-40 rounded-full bg-mint/70" />
        </div>
        <div className="flex">
          {/* Menu latéral */}
          <div className="hidden w-36 flex-col gap-3 border-r border-line p-4 sm:flex">
            <span className="h-7 w-7 rounded-lg bg-pine" />
            <span className="mt-2 h-2.5 w-20 rounded-full bg-leaf/50" />
            <span className="h-2.5 w-16 rounded-full bg-mint" />
            <span className="h-2.5 w-24 rounded-full bg-mint" />
            <span className="h-2.5 w-14 rounded-full bg-mint" />
          </div>
          {/* Contenu */}
          <div className="flex-1 p-5">
            <div className="flex items-center justify-between">
              <span className="h-3.5 w-32 rounded-full bg-ink/20" />
              <span className="h-8 w-24 rounded-full bg-leaf" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["h-2 w-12", "h-2 w-10", "h-2 w-14"].map((w, i) => (
                <div key={i} className="rounded-xl bg-pine-light p-3">
                  <span className={`block rounded-full bg-body/30 ${w}`} />
                  <span className="mt-2 block h-4 w-16 rounded-full bg-ink/25" />
                </div>
              ))}
            </div>
            {/* Graphique */}
            <div className="mt-4 flex h-24 items-end gap-2 rounded-xl bg-pine-light p-3">
              {bars.map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-t-md ${i === 5 ? "bg-leaf" : "bg-pine/25"}`}
                />
              ))}
            </div>
            {/* Lignes clients */}
            <div className="mt-4 flex flex-col gap-2">
              {rows.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between rounded-xl border border-line px-3 py-2"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="h-6 w-6 rounded-full bg-mint" />
                    <span className="text-[12px] font-medium text-body">{r.name}</span>
                  </span>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${r.tone}`}>
                    {r.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Carte flottante */}
      <div className="absolute -bottom-5 -left-4 flex items-center gap-2.5 rounded-2xl border border-line bg-paper px-4 py-3 shadow-lift md:-left-8">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-leaf text-[13px] font-bold text-white">
          ✓
        </span>
        <span>
          <span className="block text-[12px] font-semibold text-ink">Devis accepté</span>
          <span className="block text-[11px] text-muted">il y a 2 minutes</span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-36 pb-20 md:pt-44 md:pb-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <Reveal>
              <p className="text-[15px] font-medium text-muted">
                Studio indépendant, dans la Loire
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display font-semibold text-[40px] leading-[1.08] tracking-[-0.01em] text-ink md:text-[58px]">
                Le bon outil pour votre entreprise, conçu par quelqu&apos;un qui
                prend le temps de vous comprendre.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body md:text-xl">
                Pas d&apos;agence, pas de commercial, pas de logiciel tout fait.
                Vous m&apos;expliquez comment vous travaillez, je construis
                l&apos;outil qui s&apos;y adapte — CRM, gestion, outil métier. Et
                quand vous m&apos;appelez ensuite, c&apos;est moi qui décroche.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="w-full rounded-full bg-leaf px-7 py-3.5 text-center text-[16px] font-semibold text-white shadow-soft transition-colors duration-200 hover:bg-ink sm:w-auto"
                >
                  M&apos;écrire
                </a>
                <a
                  href="#approche"
                  className="w-full rounded-full border border-ink/20 bg-transparent px-7 py-3.5 text-center text-[16px] font-semibold text-ink transition-colors duration-200 hover:border-ink/40 sm:w-auto"
                >
                  Comment je travaille
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} from="right" className="hidden lg:block">
            <HeroMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
