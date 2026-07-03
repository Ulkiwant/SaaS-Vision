"use client";

import Link from "next/link";
import { useProspects } from "@/components/cockpit/useProspects";
import {
  actionsDues,
  aujourdhuiISO,
  formatDate,
  store,
  STATUTS,
} from "@/lib/store";

/** Vue « Aujourd'hui » : les relances et appels arrivés à échéance. */
export default function Aujourdhui() {
  const { prospects, pret } = useProspects();
  const dues = actionsDues(prospects);
  const ajd = aujourdhuiISO();

  function marquerFait(prospectId: string, cle: string) {
    const p = store.obtenir(prospectId);
    if (!p) return;
    store.mettreAJour(prospectId, { actionsFaites: { ...p.actionsFaites, [cle]: ajd } });
  }

  return (
    <>
      <h1 className="font-display font-semibold text-2xl text-ink">
        Aujourd&apos;hui
        <span className="ml-2 text-[15px] font-normal text-muted">
          {new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}
        </span>
      </h1>

      {pret && dues.length === 0 && (
        <div className="mt-6 rounded-[20px] border border-line bg-paper p-8 text-center shadow-soft">
          <p className="font-display font-semibold text-lg text-ink">Rien à relancer 🎉</p>
          <p className="mt-1.5 text-[14px] text-body">
            {prospects.length === 0 ? (
              <>La base est vide — commence par ajouter des prospects.</>
            ) : (
              <>Toutes les relances sont à jour. Prochaine étape : contacter de nouveaux prospects.</>
            )}
          </p>
          <Link
            href="/cockpit/prospects"
            className="mt-5 inline-block rounded-full bg-leaf px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-ink"
          >
            Voir les prospects
          </Link>
        </div>
      )}

      <div className="mt-5 flex flex-col gap-3">
        {dues.map((a) => {
          const retard = a.date < ajd;
          const tel = a.cle === "appel" && a.prospect.telephone;
          return (
            <div
              key={a.prospect.id + a.cle}
              className="rounded-[20px] border border-line bg-paper p-4 shadow-soft sm:flex sm:items-center sm:gap-4 sm:p-5"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      retard ? "bg-leaf text-white" : "bg-mint text-pine"
                    }`}
                  >
                    {a.label} · {retard ? `en retard (${formatDate(a.date)})` : formatDate(a.date)}
                  </span>
                  <span className="text-[12px] font-medium text-muted">{STATUTS[a.prospect.statut]}</span>
                </div>
                <Link
                  href={`/cockpit/prospects/${a.prospect.id}`}
                  className="mt-1.5 block truncate font-display font-semibold text-[18px] text-ink hover:text-leaf"
                >
                  {a.prospect.entreprise}
                </Link>
                <p className="truncate text-[13px] text-body">
                  {a.prospect.dirigeant || "—"} · {a.prospect.ville || "—"}
                </p>
              </div>
              <div className="mt-3 flex gap-2 sm:mt-0">
                {tel && (
                  <a
                    href={`tel:${a.prospect.telephone.replace(/\s/g, "")}`}
                    className="rounded-full border border-line px-4 py-2 text-[13px] font-semibold text-ink hover:border-ink/30"
                  >
                    📞 Appeler
                  </a>
                )}
                <button
                  onClick={() => marquerFait(a.prospect.id, a.cle)}
                  className="rounded-full bg-pine px-4 py-2 text-[13px] font-semibold text-mint transition-colors hover:bg-ink"
                >
                  ✓ Fait
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
