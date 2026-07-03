"use client";

import { useState, type DragEvent } from "react";
import Link from "next/link";
import { useProspects } from "@/components/cockpit/useProspects";
import { PIPELINE, STATUTS, store, type Statut } from "@/lib/store";

const COLONNES: Statut[] = [...PIPELINE, "refus"];

/** Pipeline kanban : drag & drop natif (souris) + sélecteur de statut (tactile). */
export default function Pipeline() {
  const { prospects } = useProspects();
  const [survol, setSurvol] = useState<Statut | null>(null);

  const total = prospects.length;

  /** Taux de conversion : part des prospects arrivés au moins à cette étape. */
  function taux(statut: Statut): number {
    if (statut === "refus" || total === 0) return 0;
    const rang = PIPELINE.indexOf(statut);
    const atteint = prospects.filter((p) => PIPELINE.indexOf(p.statut) >= rang).length;
    return Math.round((atteint / total) * 100);
  }

  function deposer(e: DragEvent, statut: Statut) {
    e.preventDefault();
    setSurvol(null);
    const id = e.dataTransfer.getData("text/plain");
    if (id) store.mettreAJour(id, { statut });
  }

  return (
    <>
      <h1 className="font-display font-semibold text-2xl text-ink">Pipeline</h1>
      <p className="mt-1 text-[13px] text-muted">
        Glisse les cartes d&apos;une colonne à l&apos;autre (ou change le statut directement sur la carte).
      </p>

      <div className="mt-5 flex snap-x gap-3 overflow-x-auto pb-4">
        {COLONNES.map((statut) => {
          const cartes = prospects.filter((p) => p.statut === statut);
          return (
            <div
              key={statut}
              onDragOver={(e) => { e.preventDefault(); setSurvol(statut); }}
              onDragLeave={() => setSurvol(null)}
              onDrop={(e) => deposer(e, statut)}
              className={`flex w-[240px] flex-none snap-start flex-col rounded-[20px] border p-3 transition-colors ${
                survol === statut ? "border-leaf bg-mint/60" : "border-line bg-mint/30"
              }`}
            >
              <div className="flex items-baseline justify-between px-1.5 pb-2.5">
                <span className="text-[12px] font-bold uppercase tracking-wide text-pine">
                  {STATUTS[statut]}
                </span>
                <span className="text-[12px] font-semibold text-muted">
                  {cartes.length}
                  {statut !== "refus" && total > 0 && <> · {taux(statut)}%</>}
                </span>
              </div>

              <div className="flex min-h-[60px] flex-col gap-2">
                {cartes.map((p) => (
                  <div
                    key={p.id}
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData("text/plain", p.id)}
                    className="cursor-grab rounded-[14px] border border-line bg-paper p-3 shadow-soft active:cursor-grabbing"
                  >
                    <Link
                      href={`/cockpit/prospects/${p.id}`}
                      className="block truncate text-[14px] font-bold text-ink hover:text-leaf"
                    >
                      {p.entreprise}
                    </Link>
                    <p className="truncate text-[12px] text-body">
                      {p.dirigeant || "—"} · {p.ville || "—"}
                    </p>
                    {/* Fallback tactile : le drag & drop HTML5 ne marche pas au doigt */}
                    <select
                      value={p.statut}
                      onChange={(e) => store.mettreAJour(p.id, { statut: e.target.value as Statut })}
                      className="mt-2 w-full rounded-lg border border-line bg-paper px-2 py-1 text-[12px] text-body outline-none focus:border-leaf"
                    >
                      {COLONNES.map((s) => (
                        <option key={s} value={s}>{STATUTS[s]}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
