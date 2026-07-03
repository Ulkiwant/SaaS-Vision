"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useProspects } from "@/components/cockpit/useProspects";
import PanneauProspect from "@/components/cockpit/PanneauProspect";
import {
  formatDate,
  parserCSV,
  SECTEURS,
  STATUTS,
  store,
  type Prospect,
} from "@/lib/store";

type Tri = { cle: "entreprise" | "ville" | "statut" | "dateEmail1"; sens: 1 | -1 };

const btn =
  "rounded-full border border-line bg-paper px-3.5 py-2 text-[13px] font-semibold text-body transition-colors hover:border-ink/30 hover:text-ink";
const selectCls =
  "rounded-xl border border-line bg-paper px-3 py-2 text-[13px] text-ink outline-none focus:border-leaf";

/** Table des prospects : recherche, filtres, tri, import/export. */
export default function Prospects() {
  const { prospects, pret } = useProspects();
  const [q, setQ] = useState("");
  const [fSecteur, setFSecteur] = useState("tous");
  const [fStatut, setFStatut] = useState("tous");
  const [fVille, setFVille] = useState("toutes");
  const [tri, setTri] = useState<Tri>({ cle: "entreprise", sens: 1 });
  const [panneau, setPanneau] = useState<Prospect | "nouveau" | null>(null);
  const [message, setMessage] = useState("");
  const refJSON = useRef<HTMLInputElement>(null);
  const refCSV = useRef<HTMLInputElement>(null);

  const villes = useMemo(
    () => Array.from(new Set(prospects.map((p) => p.ville).filter(Boolean))).sort(),
    [prospects]
  );

  const liste = useMemo(() => {
    const rq = q.trim().toLowerCase();
    return prospects
      .filter(
        (p) =>
          (fSecteur === "tous" || p.secteur === fSecteur) &&
          (fStatut === "tous" || p.statut === fStatut) &&
          (fVille === "toutes" || p.ville === fVille) &&
          (!rq ||
            `${p.entreprise} ${p.dirigeant} ${p.ville} ${p.email}`.toLowerCase().includes(rq))
      )
      .sort((a, b) => {
        const va = a[tri.cle] ?? "";
        const vb = b[tri.cle] ?? "";
        return String(va).localeCompare(String(vb), "fr") * tri.sens;
      });
  }, [prospects, q, fSecteur, fStatut, fVille, tri]);

  function trierPar(cle: Tri["cle"]) {
    setTri((t) => (t.cle === cle ? { cle, sens: t.sens === 1 ? -1 : 1 } : { cle, sens: 1 }));
  }

  function signaler(msg: string) {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  }

  /* --- Export / import --- */

  function exporterJSON() {
    const blob = new Blob([JSON.stringify(prospects, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `prospects-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    signaler("Export JSON téléchargé");
  }

  function importerJSON(file: File) {
    const r = new FileReader();
    r.onload = () => {
      try {
        const data = JSON.parse(String(r.result));
        if (!Array.isArray(data)) throw new Error();
        store.remplacerTout(data);
        signaler(`${data.length} prospect(s) restauré(s)`);
      } catch {
        alert("Fichier JSON invalide.");
      }
    };
    r.readAsText(file);
  }

  function importerCSV(texte: string, libelle: string) {
    const nouveaux = parserCSV(texte);
    if (nouveaux.length === 0) {
      alert("Aucune ligne exploitable dans ce CSV.");
      return;
    }
    store.remplacerTout([...prospects, ...nouveaux]);
    signaler(`${nouveaux.length} prospect(s) importé(s) ${libelle}`);
  }

  async function chargerExemple() {
    const res = await fetch("/data/prospects-seed.csv");
    importerCSV(await res.text(), "depuis l'exemple");
  }

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="mr-auto font-display font-semibold text-2xl text-ink">
          Prospects <span className="text-[15px] font-normal text-muted">({prospects.length})</span>
        </h1>
        <button onClick={exporterJSON} className={btn}>Exporter</button>
        <button onClick={() => refJSON.current?.click()} className={btn}>Importer JSON</button>
        <button onClick={() => refCSV.current?.click()} className={btn}>Importer CSV</button>
        <button
          onClick={() => setPanneau("nouveau")}
          className="rounded-full bg-leaf px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-ink"
        >
          + Nouveau
        </button>
        <input
          ref={refJSON} type="file" accept="application/json" className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) importerJSON(f); e.target.value = ""; }}
        />
        <input
          ref={refCSV} type="file" accept=".csv,text/csv" className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) { const r = new FileReader(); r.onload = () => importerCSV(String(r.result), "depuis le CSV"); r.readAsText(f); }
            e.target.value = "";
          }}
        />
      </div>

      {message && (
        <p className="mt-3 rounded-xl bg-pine px-4 py-2.5 text-[13px] font-semibold text-mint">{message}</p>
      )}

      {/* Recherche + filtres */}
      <div className="mt-4 flex flex-wrap gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher…"
          className="min-w-[160px] flex-1 rounded-xl border border-line bg-paper px-3.5 py-2 text-[14px] text-ink outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20 sm:max-w-[240px]"
        />
        <select value={fSecteur} onChange={(e) => setFSecteur(e.target.value)} className={selectCls}>
          <option value="tous">Secteur : tous</option>
          {Object.entries(SECTEURS).map(([k, l]) => <option key={k} value={k}>{l}</option>)}
        </select>
        <select value={fStatut} onChange={(e) => setFStatut(e.target.value)} className={selectCls}>
          <option value="tous">Statut : tous</option>
          {Object.entries(STATUTS).map(([k, l]) => <option key={k} value={k}>{l}</option>)}
        </select>
        <select value={fVille} onChange={(e) => setFVille(e.target.value)} className={selectCls}>
          <option value="toutes">Ville : toutes</option>
          {villes.map((v) => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>

      {/* Base vide → proposer le CSV d'exemple */}
      {pret && prospects.length === 0 && (
        <div className="mt-6 rounded-[20px] border border-line bg-paper p-8 text-center shadow-soft">
          <p className="font-display font-semibold text-lg text-ink">Aucun prospect pour l&apos;instant</p>
          <p className="mt-1.5 text-[14px] text-body">
            Importe ton CSV (colonnes : entreprise;secteur;ville;dirigeant;email;telephone;siteWeb;observation)
            ou charge l&apos;exemple pour voir le cockpit en action.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button onClick={chargerExemple} className={btn}>Charger le CSV d&apos;exemple</button>
            <button
              onClick={() => setPanneau("nouveau")}
              className="rounded-full bg-leaf px-5 py-2 text-[13px] font-semibold text-white hover:bg-ink"
            >
              + Ajouter à la main
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      {liste.length > 0 && (
        <div className="mt-4 overflow-x-auto rounded-[20px] border border-line bg-paper shadow-soft">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line text-[11px] uppercase tracking-wide text-muted">
                {(
                  [
                    ["entreprise", "Entreprise"],
                    ["ville", "Ville"],
                    ["statut", "Statut"],
                    ["dateEmail1", "1er e-mail"],
                  ] as [Tri["cle"], string][]
                ).map(([cle, label]) => (
                  <th key={cle} className="px-4 py-3">
                    <button onClick={() => trierPar(cle)} className="font-bold uppercase tracking-wide hover:text-ink">
                      {label} {tri.cle === cle ? (tri.sens === 1 ? "↑" : "↓") : ""}
                    </button>
                  </th>
                ))}
                <th className="px-4 py-3">Contact</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {liste.map((p) => (
                <tr key={p.id} className="border-b border-line/60 last:border-0 hover:bg-mint/30">
                  <td className="px-4 py-3">
                    <Link href={`/cockpit/prospects/${p.id}`} className="font-bold text-ink hover:text-leaf">
                      {p.entreprise}
                    </Link>
                    <p className="text-[12px] text-muted">{SECTEURS[p.secteur]}</p>
                  </td>
                  <td className="px-4 py-3 text-[14px] text-body">{p.ville || "—"}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-mint px-2.5 py-1 text-[12px] font-semibold text-pine">
                      {STATUTS[p.statut]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[13px] text-body">
                    {p.dateEmail1 ? formatDate(p.dateEmail1) : "—"}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-body">
                    {p.dirigeant || "—"}
                    {p.email && <p className="truncate text-[12px] text-muted">{p.email}</p>}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => setPanneau(p)}
                      className="rounded-full border border-line px-3 py-1.5 text-[12px] font-semibold text-body hover:border-ink/30 hover:text-ink"
                    >
                      Modifier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {pret && prospects.length > 0 && liste.length === 0 && (
        <p className="mt-6 text-center text-[14px] text-muted">Aucun résultat avec ces filtres.</p>
      )}

      <PanneauProspect cible={panneau} onFermer={() => setPanneau(null)} />
    </>
  );
}
