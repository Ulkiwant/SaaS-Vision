"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useProspects } from "./useProspects";
import { actionsDues } from "@/lib/store";

const OBJECTIF_HEBDO = 30; // contacts visés par semaine

/** Lundi de la semaine en cours (ISO). */
function debutSemaineISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d.toISOString().slice(0, 10);
}

const onglets = [
  { href: "/cockpit", label: "Aujourd'hui" },
  { href: "/cockpit/pipeline", label: "Pipeline" },
  { href: "/cockpit/prospects", label: "Prospects" },
];

export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { prospects } = useProspects();

  // La page de connexion n'a ni nav ni stats.
  if (pathname.startsWith("/cockpit/connexion")) return <>{children}</>;

  const lundi = debutSemaineISO();
  const contactes = prospects.filter((p) => p.dateEmail1 && p.dateEmail1 >= lundi).length;
  const reponses = prospects.filter((p) => ["echange", "rdv", "devis", "signe"].includes(p.statut)).length;
  const rdv = prospects.filter((p) => p.statut === "rdv").length;
  const signes = prospects.filter((p) => p.statut === "signe").length;
  const dues = actionsDues(prospects).length;
  const progression = Math.min(100, Math.round((contactes / OBJECTIF_HEBDO) * 100));

  async function deconnexion() {
    await fetch("/api/cockpit/connexion", { method: "DELETE" });
    router.replace("/cockpit/connexion");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-paper">
      {/* Barre de navigation */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto px-4 py-2.5">
          <Link href="/cockpit" className="mr-1 flex flex-none items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-pine font-logo font-bold text-mint">
              V
            </span>
            <span className="hidden text-[14px] font-bold text-ink sm:block">Cockpit</span>
          </Link>
          {onglets.map((o) => {
            const actif = pathname === o.href;
            return (
              <Link
                key={o.href}
                href={o.href}
                className={`relative flex-none rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${
                  actif ? "bg-pine text-mint" : "text-body hover:text-ink"
                }`}
              >
                {o.label}
                {o.href === "/cockpit" && dues > 0 && (
                  <span className="ml-1.5 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-leaf px-1 text-[11px] font-bold text-white">
                    {dues}
                  </span>
                )}
              </Link>
            );
          })}
          <button
            onClick={deconnexion}
            className="ml-auto flex-none rounded-full border border-line px-3.5 py-2 text-[13px] font-semibold text-body transition-colors hover:border-ink/30 hover:text-ink"
          >
            Sortir
          </button>
        </div>
      </header>

      {/* Bandeau stats de la semaine */}
      <div className="border-b border-line bg-pine">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-4 px-4 py-4 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-baseline justify-between text-[12px] font-semibold text-mint/70">
              <span>Contactés cette semaine</span>
              <span>
                {contactes} / {OBJECTIF_HEBDO}
              </span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-mint/20">
              <div
                className="h-full rounded-full bg-leaf transition-all duration-500"
                style={{ width: `${progression}%` }}
              />
            </div>
          </div>
          {[
            { label: "Réponses", valeur: reponses },
            { label: "RDV", valeur: rdv },
            { label: "Signés", valeur: signes },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-semibold text-xl leading-none text-mint">{s.valeur}</p>
              <p className="mt-1 text-[12px] font-medium text-mint/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-6 pb-20">{children}</main>
    </div>
  );
}
