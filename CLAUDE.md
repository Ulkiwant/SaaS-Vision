# SaaS Vision — site vitrine du studio

Site public du studio SaaS Vision (https://saas-vision.vercel.app, domaine cible : saasvision.fr).
Ce n'est **pas** un projet client : c'est le site marketing du studio lui-même.

## Contexte

- Créé initialement avec Claude Cowork, repris en local avec Claude Code (juillet 2026).
- Dépôt GitHub : `Ulkiwant/saas-vision` — connecté à Vercel : **tout push sur `main` déclenche un déploiement automatique en production**.
- Site one-page en français : Hero, Services, Pourquoi, Approche, Tarifs, À propos, Contact + pages légales (mentions-legales, confidentialite).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3 (config dans `tailwind.config.ts`)
- Pas de base de données, pas d'auth — site statique.
- Formulaire de contact : Formspree via `NEXT_PUBLIC_FORMSPREE_ID` (variable d'env Vercel ; fallback placeholder dans `components/Contact.tsx`).

## Direction artistique

Palette sauge/terracotta, typographie serif éditoriale (fonts locales dans `app/fonts/`), ton à la première personne. Respecter cette DA pour toute modification.

## Contenu à garder cohérent

Les tarifs affichés dans `components/Tarifs.tsx` doivent rester alignés avec la grille du studio (voir CLAUDE.md global) :
- Simple : build 1 500–3 000 € · run 49–99 €/mois
- Standard : build 3 000–6 000 € · run 99–199 €/mois
- Avancé : build 6 000–12 000 € · run 199–349 €/mois

## Commandes

- `npm run dev` — serveur de dev
- `npm run build` — vérifier avant de pusher (le push déploie en prod)

## Workflow de modification

1. Modifier en local, vérifier avec `npm run dev` puis `npm run build`.
2. Commit + push sur `main` → Vercel déploie automatiquement en production.
