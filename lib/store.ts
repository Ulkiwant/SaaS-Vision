/**
 * Stockage des prospects du cockpit.
 *
 * Tout passe par l'objet `store` : le jour où on veut une vraie base de
 * données, on remplace uniquement l'implémentation de ce fichier
 * (mêmes fonctions, même contrat), sans toucher aux écrans.
 *
 * Persistance actuelle : localStorage du navigateur (aucun backend).
 */

export type Secteur = "industrie" | "services";

export type Statut =
  | "a_contacter"
  | "contacte"
  | "echange"
  | "rdv"
  | "devis"
  | "signe"
  | "refus";

export type Note = { date: string; texte: string };

/** Clés des trois relances automatiques calculées depuis dateEmail1. */
export type RelanceCle = "relanceEmail" | "appel" | "derniereRelance";

export type Prospect = {
  id: string;
  entreprise: string;
  secteur: Secteur;
  ville: string;
  dirigeant: string;
  email: string;
  telephone: string;
  siteWeb: string;
  /** Accroche personnalisée, injectée dans les templates d'e-mail. */
  observation: string;
  statut: Statut;
  /** Date d'envoi du premier e-mail (ISO yyyy-mm-dd), null tant que non contacté. */
  dateEmail1: string | null;
  notes: Note[];
  /** Date (ISO) à laquelle chaque relance a été faite, si elle l'a été. */
  actionsFaites: Partial<Record<RelanceCle, string>>;
};

export const STATUTS: Record<Statut, string> = {
  a_contacter: "À contacter",
  contacte: "Contacté",
  echange: "Échange",
  rdv: "RDV",
  devis: "Devis",
  signe: "Signé",
  refus: "Refus",
};

/** Ordre du pipeline (le refus est traité à part dans le kanban). */
export const PIPELINE: Statut[] = ["a_contacter", "contacte", "echange", "rdv", "devis", "signe"];

export const SECTEURS: Record<Secteur, string> = {
  industrie: "Industrie",
  services: "Services",
};

/* ---------- Dates & relances ---------- */

/** Les 3 relances automatiques : délai en jours après dateEmail1. */
export const RELANCES: { cle: RelanceCle; label: string; delaiJours: number }[] = [
  { cle: "relanceEmail", label: "Relance e-mail", delaiJours: 4 },
  { cle: "appel", label: "Appel téléphonique", delaiJours: 7 },
  { cle: "derniereRelance", label: "Dernière relance", delaiJours: 10 },
];

export function ajouterJours(dateISO: string, jours: number): string {
  const d = new Date(dateISO + "T12:00:00");
  d.setDate(d.getDate() + jours);
  return d.toISOString().slice(0, 10);
}

export function aujourdhuiISO(): string {
  return new Date().toISOString().slice(0, 10);
}

export function formatDate(dateISO: string): string {
  return new Date(dateISO + "T12:00:00").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
}

/** Dates de relance calculées pour un prospect (null si pas encore contacté). */
export function relancesDe(p: Prospect): { cle: RelanceCle; label: string; date: string }[] | null {
  if (!p.dateEmail1) return null;
  return RELANCES.map((r) => ({ cle: r.cle, label: r.label, date: ajouterJours(p.dateEmail1!, r.delaiJours) }));
}

/** Une action de relance arrivée à échéance et pas encore faite. */
export type ActionDue = { prospect: Prospect; cle: RelanceCle; label: string; date: string };

/**
 * Actions du jour : relances échues, non faites, pour les prospects encore
 * en phase de contact (contacté / échange). Triées de la plus ancienne à la
 * plus récente.
 */
export function actionsDues(prospects: Prospect[], reference: string = aujourdhuiISO()): ActionDue[] {
  const dues: ActionDue[] = [];
  for (const p of prospects) {
    if (p.statut !== "contacte" && p.statut !== "echange") continue;
    const rel = relancesDe(p);
    if (!rel) continue;
    for (const r of rel) {
      if (r.date <= reference && !p.actionsFaites[r.cle]) {
        dues.push({ prospect: p, cle: r.cle, label: r.label, date: r.date });
      }
    }
  }
  return dues.sort((a, b) => a.date.localeCompare(b.date));
}

/* ---------- Store ---------- */

const KEY = "saasvision_cockpit_prospects_v1";
const EVT = "cockpit-store-change";

function lire(): Prospect[] {
  if (typeof window === "undefined") return [];
  try {
    const brut = window.localStorage.getItem(KEY);
    return brut ? (JSON.parse(brut) as Prospect[]) : [];
  } catch {
    return [];
  }
}

function ecrire(prospects: Prospect[]) {
  window.localStorage.setItem(KEY, JSON.stringify(prospects));
  window.dispatchEvent(new Event(EVT));
}

function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function nouveauProspect(champs: Partial<Prospect> = {}): Prospect {
  return {
    id: uid(),
    entreprise: "",
    secteur: "industrie",
    ville: "",
    dirigeant: "",
    email: "",
    telephone: "",
    siteWeb: "",
    observation: "",
    statut: "a_contacter",
    dateEmail1: null,
    notes: [],
    actionsFaites: {},
    ...champs,
  };
}

export const store = {
  lister: (): Prospect[] => lire(),

  obtenir: (id: string): Prospect | undefined => lire().find((p) => p.id === id),

  ajouter(champs: Partial<Prospect>): Prospect {
    const p = nouveauProspect(champs);
    ecrire([...lire(), p]);
    return p;
  },

  mettreAJour(id: string, champs: Partial<Prospect>) {
    ecrire(lire().map((p) => (p.id === id ? { ...p, ...champs, id } : p)));
  },

  supprimer(id: string) {
    ecrire(lire().filter((p) => p.id !== id));
  },

  /** Remplace toute la base (import JSON). */
  remplacerTout(prospects: Prospect[]) {
    ecrire(prospects);
  },

  /** Abonnement aux changements (retourne la fonction de désabonnement). */
  surChangement(cb: () => void): () => void {
    window.addEventListener(EVT, cb);
    return () => window.removeEventListener(EVT, cb);
  },
};

/* ---------- Import / export ---------- */

/** En-têtes attendues du CSV (séparateur ;). */
export const CSV_ENTETES = "entreprise;secteur;ville;dirigeant;email;telephone;siteWeb;observation";

/**
 * Parse un CSV (séparateur ;) en prospects « à contacter ».
 * Ignore la ligne d'en-tête et les lignes vides.
 */
export function parserCSV(texte: string): Prospect[] {
  const lignes = texte.replace(/\r/g, "").split("\n").filter((l) => l.trim() !== "");
  const resultat: Prospect[] = [];
  for (const ligne of lignes) {
    const cols = ligne.split(";").map((c) => c.trim());
    if (cols[0].toLowerCase() === "entreprise") continue; // en-tête
    if (!cols[0]) continue;
    resultat.push(
      nouveauProspect({
        entreprise: cols[0] || "",
        secteur: cols[1] === "services" ? "services" : "industrie",
        ville: cols[2] || "",
        dirigeant: cols[3] || "",
        email: cols[4] || "",
        telephone: cols[5] || "",
        siteWeb: cols[6] || "",
        observation: cols[7] || "",
      })
    );
  }
  return resultat;
}
