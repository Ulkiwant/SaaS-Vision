"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useProspects } from "@/components/cockpit/useProspects";
import PanneauProspect from "@/components/cockpit/PanneauProspect";
import { TEMPLATES, remplir } from "@/lib/templates";
import {
  aujourdhuiISO,
  formatDate,
  relancesDe,
  SECTEURS,
  STATUTS,
  store,
  type Prospect,
  type Statut,
} from "@/lib/store";

const btn =
  "rounded-full border border-line bg-paper px-4 py-2 text-[13px] font-semibold text-body transition-colors hover:border-ink/30 hover:text-ink";

/** Fiche prospect : infos, relances, notes horodatées, e-mails à copier. */
export default function FicheProspect() {
  const { id } = useParams<{ id: string }>();
  const { prospects, pret } = useProspects();
  const [edition, setEdition] = useState<Prospect | "nouveau" | null>(null);
  const [note, setNote] = useState("");
  const [copie, setCopie] = useState("");

  const p = prospects.find((x) => x.id === id);

  if (!pret) return null;
  if (!p)
    return (
      <div className="rounded-[20px] border border-line bg-paper p-8 text-center shadow-soft">
        <p className="font-display font-semibold text-lg text-ink">Prospect introuvable</p>
        <Link href="/cockpit/prospects" className="mt-3 inline-block text-[14px] font-semibold text-leaf">
          ← Retour à la liste
        </Link>
      </div>
    );

  const relances = relancesDe(p);

  function ajouterNote() {
    if (!note.trim() || !p) return;
    store.mettreAJour(p.id, {
      notes: [{ date: new Date().toISOString(), texte: note.trim() }, ...p.notes],
    });
    setNote("");
  }

  async function copierEmail(type: "premierContact" | "relance") {
    if (!p) return;
    const t = TEMPLATES[type][p.secteur];
    const texte = `Objet : ${remplir(t.objet, p)}\n\n${remplir(t.corps, p)}`;
    try {
      await navigator.clipboard.writeText(texte);
    } catch {
      // Fallback si l'API presse-papiers est indisponible
      const ta = document.createElement("textarea");
      ta.value = texte;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopie(type);
    setTimeout(() => setCopie(""), 2500);
  }

  return (
    <>
      <Link href="/cockpit/prospects" className="text-[13px] font-semibold text-body hover:text-ink">
        ← Prospects
      </Link>

      <div className="mt-3 flex flex-wrap items-start gap-3">
        <div className="min-w-0 flex-1">
          <h1 className="font-display font-semibold text-2xl text-ink">{p.entreprise}</h1>
          <p className="mt-0.5 text-[14px] text-body">
            {SECTEURS[p.secteur]} · {p.ville || "ville inconnue"}
          </p>
        </div>
        <button onClick={() => setEdition(p)} className={btn}>Modifier</button>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Colonne infos + e-mails */}
        <div className="flex flex-col gap-4">
          <div className="rounded-[20px] border border-line bg-paper p-5 shadow-soft">
            <div className="flex flex-wrap items-center gap-2">
              <label className="text-[13px] font-semibold text-ink">Statut</label>
              <select
                value={p.statut}
                onChange={(e) => store.mettreAJour(p.id, { statut: e.target.value as Statut })}
                className="rounded-xl border border-line bg-paper px-3 py-2 text-[13px] text-ink outline-none focus:border-leaf"
              >
                {Object.entries(STATUTS).map(([k, l]) => (
                  <option key={k} value={k}>{l}</option>
                ))}
              </select>
              <label className="ml-2 text-[13px] font-semibold text-ink">1er e-mail</label>
              <input
                type="date"
                value={p.dateEmail1 ?? ""}
                onChange={(e) => store.mettreAJour(p.id, { dateEmail1: e.target.value || null })}
                className="rounded-xl border border-line bg-paper px-3 py-1.5 text-[13px] text-ink outline-none focus:border-leaf"
              />
            </div>

            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 text-[14px] sm:grid-cols-2">
              <div><dt className="text-[12px] font-bold uppercase tracking-wide text-muted">Dirigeant</dt><dd className="text-ink">{p.dirigeant || "—"}</dd></div>
              <div><dt className="text-[12px] font-bold uppercase tracking-wide text-muted">Téléphone</dt>
                <dd>{p.telephone ? <a href={`tel:${p.telephone.replace(/\s/g, "")}`} className="font-semibold text-leaf">{p.telephone}</a> : "—"}</dd></div>
              <div><dt className="text-[12px] font-bold uppercase tracking-wide text-muted">E-mail</dt>
                <dd className="truncate">{p.email ? <a href={`mailto:${p.email}`} className="font-semibold text-leaf">{p.email}</a> : "—"}</dd></div>
              <div><dt className="text-[12px] font-bold uppercase tracking-wide text-muted">Site web</dt>
                <dd className="truncate">{p.siteWeb ? <a href={p.siteWeb} target="_blank" rel="noreferrer" className="font-semibold text-leaf">{p.siteWeb.replace(/^https?:\/\//, "")}</a> : "—"}</dd></div>
              <div className="sm:col-span-2"><dt className="text-[12px] font-bold uppercase tracking-wide text-muted">Observation</dt>
                <dd className="text-body">{p.observation || "—"}</dd></div>
            </dl>
          </div>

          {/* E-mails personnalisés */}
          <div className="rounded-[20px] border border-line bg-paper p-5 shadow-soft">
            <h2 className="font-display font-semibold text-[17px] text-ink">E-mails personnalisés</h2>
            <p className="mt-1 text-[13px] text-body">
              Générés depuis le template « {SECTEURS[p.secteur]} » avec le dirigeant, l&apos;entreprise et
              l&apos;observation ci-dessus.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={() => copierEmail("premierContact")} className={btn}>
                {copie === "premierContact" ? "✓ Copié !" : "Copier e-mail n°1"}
              </button>
              <button onClick={() => copierEmail("relance")} className={btn}>
                {copie === "relance" ? "✓ Copié !" : "Copier la relance"}
              </button>
            </div>
          </div>

          {/* Relances calculées */}
          <div className="rounded-[20px] border border-line bg-paper p-5 shadow-soft">
            <h2 className="font-display font-semibold text-[17px] text-ink">Relances</h2>
            {!relances ? (
              <p className="mt-2 text-[13px] text-body">
                Renseigne la date du premier e-mail pour calculer les relances (+4, +7 et +10 jours).
              </p>
            ) : (
              <ul className="mt-3 flex flex-col gap-2">
                {relances.map((r) => {
                  const faite = p.actionsFaites[r.cle];
                  const enRetard = !faite && r.date < aujourdhuiISO();
                  return (
                    <li key={r.cle} className="flex items-center gap-3 text-[14px]">
                      <span
                        className={`h-2.5 w-2.5 flex-none rounded-full ${
                          faite ? "bg-pine" : enRetard ? "bg-leaf" : "bg-line"
                        }`}
                      />
                      <span className="text-ink">{r.label}</span>
                      <span className="ml-auto text-[13px] text-muted">
                        {faite ? `faite le ${formatDate(faite)}` : formatDate(r.date)}
                      </span>
                      {!faite && (
                        <button
                          onClick={() =>
                            store.mettreAJour(p.id, {
                              actionsFaites: { ...p.actionsFaites, [r.cle]: aujourdhuiISO() },
                            })
                          }
                          className="rounded-full border border-line px-2.5 py-1 text-[12px] font-semibold text-body hover:border-ink/30 hover:text-ink"
                        >
                          ✓ Fait
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        {/* Colonne notes */}
        <div className="rounded-[20px] border border-line bg-paper p-5 shadow-soft">
          <h2 className="font-display font-semibold text-[17px] text-ink">Notes</h2>
          <div className="mt-3 flex gap-2">
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ajouterNote()}
              placeholder="Ajouter une note…"
              className="min-w-0 flex-1 rounded-xl border border-line bg-paper px-3.5 py-2 text-[14px] text-ink outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
            />
            <button
              onClick={ajouterNote}
              className="rounded-full bg-leaf px-4 py-2 text-[13px] font-semibold text-white hover:bg-ink"
            >
              +
            </button>
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            {p.notes.length === 0 && (
              <li className="text-[13px] text-muted">Aucune note pour l&apos;instant.</li>
            )}
            {p.notes.map((n, i) => (
              <li key={i} className="rounded-[14px] bg-mint/40 px-3.5 py-2.5">
                <p className="text-[11px] font-bold uppercase tracking-wide text-muted">
                  {new Date(n.date).toLocaleString("fr-FR", {
                    day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
                  })}
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink">{n.texte}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PanneauProspect cible={edition} onFermer={() => setEdition(null)} />
    </>
  );
}
