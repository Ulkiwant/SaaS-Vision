# SaaS Vision — site vitrine du studio

Site public du studio SaaS Vision (https://saas-vision.vercel.app, domaine cible : saasvision.fr).
Ce n'est **pas** un projet client : c'est le site marketing du studio lui-même.

## Contexte

- Créé initialement avec Claude Cowork, repris en local avec Claude Code (juillet 2026).
- Dépôt GitHub : `Ulkiwant/saas-vision` — connecté à Vercel : **tout push sur `main` déclenche un déploiement automatique en production**.
- Site one-page en français : Hero (avec mockup produit CSS), Marquee, Stats (compteurs animés), Services, Exemples, Approche, Pourquoi, Comparatif, Tarifs, Honnête, FAQ, À propos, Contact + pages légales (mentions-legales, confidentialite).
- Pas de faux témoignages ni de faux logos clients : la section Exemples présente des situations types, jamais des références inventées.
- Ne jamais lancer `npm run build` pendant que le dev server tourne (les deux écrivent dans `.next` et le corrompent).

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3 (config dans `tailwind.config.ts`)
- Pas de base de données, pas d'auth — site statique.
- Formulaire de contact : Formspree via `NEXT_PUBLIC_FORMSPREE_ID` (variable d'env Vercel ; fallback placeholder dans `components/Contact.tsx`).

## Direction artistique

Refonte du 14/07/2026, inspirée de revolut.com (validée avec l'utilisateur avant refonte complète — palette ET effets de scroll).

- **Palette** : bleu électrique/indigo (`leaf` = #4654F5) comme accent principal, fond clair frais (`paper` = #F5F5FA), sections sombres en dégradé bleu nuit/indigo (`pine`/`bg-grad-dark`), pop chaud corail (`coral` = #FF6B4D) en contraste — hérité de l'ancien accent terracotta. Tous les composants utilisent les tokens Tailwind sémantiques (`paper`, `ink`, `body`, `muted`, `line`, `pine`, `leaf`, `mint`, `coral`) définis dans `tailwind.config.ts` : changer la DA passe par ces tokens, pas par des couleurs codées en dur dans les composants.
- **Typo** : Bricolage Grotesque (`font-display`) en bold/tight-tracking pour les titres. Logo resté sur son design d'origine (empilé "SaaS" / "Vision" en serif Lora + barre d'accent), simplement recoloré avec les nouveaux tokens.
- **Motion** : `framer-motion` installé pour les effets scroll-linked (parallax `useScroll`/`useTransform` sur le mockup du Hero, section Approche en scroll pinné/sticky avec `AnimatePresence`). `Reveal.tsx` (IntersectionObserver + CSS) reste la base pour les apparitions au scroll simples. Blobs de fond dégradés animés (`.blob`, classes `blob-a`/`blob-b` dans `globals.css`) pour le fond façon Revolut.
- Respecter cette DA pour toute nouvelle section : bold, contrasté, motion soignée — plus l'ancien ton éditorial sauge/terracotta.

## Contenu à garder cohérent

Les tarifs affichés dans `components/Tarifs.tsx` et `components/Faq.tsx` doivent rester alignés avec la grille du studio (voir CLAUDE.md global — prix construits sur un modèle de coûts : heures + crédits Claude + 30 % de cotisations/impôts) :
- Simple (30 €/h net) : build 900–1 600 € · run 49–99 €/mois
- Standard (40 €/h net) : build 2 700–4 800 € · run 99–199 €/mois
- Avancé (45 €/h net) : build 6 000–10 500 € · run 199–449 €/mois

## Commandes

- `npm run dev` — serveur de dev
- `npm run build` — vérifier avant de pusher (le push déploie en prod)

## Workflow de modification

1. Modifier en local, vérifier avec `npm run dev` puis `npm run build`.
2. Commit + push sur `main` → Vercel déploie automatiquement en production.
