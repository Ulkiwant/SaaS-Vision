"use client";

import { useEffect, useRef, type FormEvent } from "react";
import { store, SECTEURS, STATUTS, type Prospect, type Secteur, type Statut } from "@/lib/store";

type Props = {
  /** null = fermé, "nouveau" = création, sinon le prospect à modifier. */
  cible: Prospect | "nouveau" | null;
  onFermer: () => void;
};

const champInput =
  "w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[15px] text-ink outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20";

/** Panneau latéral d'ajout / édition d'un prospect (plein écran sur mobile). */
export default function PanneauProspect({ cible, onFermer }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const edition = cible !== null && cible !== "nouveau" ? cible : null;

  // Échap ferme le panneau.
  useEffect(() => {
    if (cible === null) return;
    const h = (e: KeyboardEvent) => e.key === "Escape" && onFermer();
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [cible, onFermer]);

  if (cible === null) return null;

  function enregistrer(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const v = (k: string) => String(d.get(k) ?? "").trim();
    if (!v("entreprise")) return;
    const champs = {
      entreprise: v("entreprise"),
      secteur: v("secteur") as Secteur,
      ville: v("ville"),
      dirigeant: v("dirigeant"),
      email: v("email"),
      telephone: v("telephone"),
      siteWeb: v("siteWeb"),
      observation: v("observation"),
      statut: v("statut") as Statut,
      dateEmail1: v("dateEmail1") || null,
    };
    if (edition) store.mettreAJour(edition.id, champs);
    else store.ajouter(champs);
    onFermer();
  }

  function supprimer() {
    if (edition && confirm(`Supprimer ${edition.entreprise} ?`)) {
      store.supprimer(edition.id);
      onFermer();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-ink/40 backdrop-blur-[2px]"
      onClick={(e) => e.target === e.currentTarget && onFermer()}
    >
      <div
        ref={ref}
        className="flex h-full w-full max-w-md flex-col overflow-y-auto bg-paper shadow-lift"
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-line bg-paper px-5 py-4">
          <h2 className="font-display font-semibold text-xl text-ink">
            {edition ? "Modifier le prospect" : "Nouveau prospect"}
          </h2>
          <button
            onClick={onFermer}
            aria-label="Fermer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-body hover:text-ink"
          >
            ✕
          </button>
        </div>

        <form onSubmit={enregistrer} className="flex flex-1 flex-col gap-4 px-5 py-5">
          <div>
            <label className="mb-1 block text-[13px] font-semibold text-ink">Entreprise *</label>
            <input name="entreprise" required defaultValue={edition?.entreprise} className={champInput} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-[13px] font-semibold text-ink">Secteur</label>
              <select name="secteur" defaultValue={edition?.secteur ?? "industrie"} className={champInput}>
                {Object.entries(SECTEURS).map(([k, l]) => (
                  <option key={k} value={k}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-[13px] font-semibold text-ink">Ville</label>
              <input name="ville" defaultValue={edition?.ville} className={champInput} />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-[13px] font-semibold text-ink">Dirigeant</label>
            <input name="dirigeant" defaultValue={edition?.dirigeant} className={champInput} />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-[13px] font-semibold text-ink">E-mail</label>
              <input name="email" type="email" defaultValue={edition?.email} className={champInput} />
            </div>
            <div>
              <label className="mb-1 block text-[13px] font-semibold text-ink">Téléphone</label>
              <input name="telephone" defaultValue={edition?.telephone} className={champInput} />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-[13px] font-semibold text-ink">Site web</label>
            <input name="siteWeb" defaultValue={edition?.siteWeb} className={champInput} />
          </div>
          <div>
            <label className="mb-1 block text-[13px] font-semibold text-ink">
              Observation <span className="font-normal text-muted">(accroche pour l&apos;e-mail)</span>
            </label>
            <textarea name="observation" rows={3} defaultValue={edition?.observation} className={`${champInput} resize-none`} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-[13px] font-semibold text-ink">Statut</label>
              <select name="statut" defaultValue={edition?.statut ?? "a_contacter"} className={champInput}>
                {Object.entries(STATUTS).map(([k, l]) => (
                  <option key={k} value={k}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-[13px] font-semibold text-ink">1er e-mail le</label>
              <input name="dateEmail1" type="date" defaultValue={edition?.dateEmail1 ?? ""} className={champInput} />
            </div>
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-line pt-5">
            {edition && (
              <button type="button" onClick={supprimer} className="text-[13px] font-semibold text-red-500">
                Supprimer
              </button>
            )}
            <button
              type="submit"
              className="ml-auto rounded-full bg-leaf px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-ink"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
