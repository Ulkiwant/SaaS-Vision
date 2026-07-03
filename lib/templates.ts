/**
 * Templates d'e-mails de prospection.
 *
 * Placeholders disponibles : {dirigeant}, {entreprise}, {observation}
 * → remplacés automatiquement par les infos du prospect au moment du
 * clic sur « Copier ». Remplis librement les textes ci-dessous.
 */

export type Template = { objet: string; corps: string };

export const TEMPLATES: Record<
  "premierContact" | "relance",
  Record<"industrie" | "services", Template>
> = {
  premierContact: {
    industrie: {
      objet: "Un outil à votre façon — {entreprise}",
      corps: `Bonjour {dirigeant},

{observation}

[À COMPLÉTER — corps du premier e-mail « industrie ».]

Bien cordialement,
Quentin — SaaS Vision`,
    },
    services: {
      objet: "Un outil à votre façon — {entreprise}",
      corps: `Bonjour {dirigeant},

{observation}

[À COMPLÉTER — corps du premier e-mail « services ».]

Bien cordialement,
Quentin — SaaS Vision`,
    },
  },
  relance: {
    industrie: {
      objet: "Re : un outil à votre façon — {entreprise}",
      corps: `Bonjour {dirigeant},

[À COMPLÉTER — corps de la relance « industrie ».]

Bien cordialement,
Quentin — SaaS Vision`,
    },
    services: {
      objet: "Re : un outil à votre façon — {entreprise}",
      corps: `Bonjour {dirigeant},

[À COMPLÉTER — corps de la relance « services ».]

Bien cordialement,
Quentin — SaaS Vision`,
    },
  },
};

/** Remplace les placeholders d'un texte par les infos du prospect. */
export function remplir(
  texte: string,
  p: { dirigeant: string; entreprise: string; observation: string }
): string {
  return texte
    .replaceAll("{dirigeant}", p.dirigeant || "")
    .replaceAll("{entreprise}", p.entreprise || "")
    .replaceAll("{observation}", p.observation || "");
}
