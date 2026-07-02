# SaaS Vision — Site vitrine

Site one-page Next.js (App Router) + TypeScript + Tailwind CSS.
Direction artistique : clair minimaliste, accent vert sapin/émeraude.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Déployer sur Vercel (~2 minutes)

1. Créez un compte gratuit sur [vercel.com](https://vercel.com) (connexion GitHub possible).
2. Poussez ce dossier sur un dépôt GitHub, **ou** installez la CLI :
   ```bash
   npm i -g vercel
   vercel
   ```
   et suivez les questions (tout par défaut).
3. Vercel détecte Next.js automatiquement — aucun réglage nécessaire.

## Activer le formulaire de contact (Formspree)

1. Créez un compte gratuit sur [formspree.io](https://formspree.io).
2. Créez un formulaire → destinataire : `contact@saasvision.fr` (ou votre e-mail actuel).
3. Copiez l'ID du formulaire (ex. `xanyzabc`).
4. Deux options :
   - **Sur Vercel** : Settings → Environment Variables → ajoutez
     `NEXT_PUBLIC_FORMSPREE_ID = xanyzabc`, puis redéployez.
   - **Dans le code** : remplacez `VOTRE_ID_FORMSPREE` dans
     `components/Contact.tsx`.

Le formulaire inclut : validation des champs, honeypot anti-spam,
messages de succès/erreur.

## À compléter avant mise en ligne

- `app/mentions-legales/page.tsx` : SIRET, nom, adresse (une fois la micro-entreprise créée).
- `app/confidentialite/page.tsx` : nom et adresse du responsable.
- Domaine : remplacer `https://saasvision.fr` dans `app/layout.tsx`, `app/sitemap.ts` et `app/robots.ts` si vous choisissez un autre domaine.

## Inclus

- SEO : title/description, Open Graph, JSON-LD Organization, sitemap.xml, robots.txt, favicon
- Animations : orbes flottants (hero), révélation au scroll, compteurs animés, hovers — avec respect de `prefers-reduced-motion`
- 100 % responsive, menu burger animé en mobile
- Pages légales accessibles depuis le footer

## Emplacement futur « Réalisations »

Ajoutez un composant `components/Realisations.tsx` et insérez-le dans
`app/page.tsx` entre `<Pourquoi />` et `<Tarifs />` quand vous aurez vos
premières études de cas.
