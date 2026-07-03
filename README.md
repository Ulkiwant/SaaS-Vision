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

## Cockpit de prospection (privé) — /cockpit

Espace personnel de suivi des prospects (non indexé, aucun lien depuis le
site public). Protégé par mot de passe.

**Activer l'accès :**

1. En local : copiez `.env.example` en `.env.local` et définissez
   `COCKPIT_PASSWORD=votre-mot-de-passe`.
2. Sur Vercel : Settings → Environment Variables → ajoutez
   `COCKPIT_PASSWORD` (environnement Production), puis redéployez.
   Tant que la variable n'est pas définie, personne ne peut se connecter.

**Fonctionnement :**

- Données stockées dans le navigateur (localStorage), aucun backend.
  Pensez à **Exporter** (JSON) régulièrement pour sauvegarder ; **Importer**
  restaure une sauvegarde.
- Import CSV (séparateur `;`) avec les colonnes :
  `entreprise;secteur;ville;dirigeant;email;telephone;siteWeb;observation`
  — un exemple est fourni dans `public/data/prospects-seed.csv`
  (bouton « Charger le CSV d'exemple » quand la base est vide).
- Relances calculées automatiquement depuis la date du 1er e-mail :
  +4 j (relance e-mail), +7 j (appel), +10 j (dernière relance).
- Templates d'e-mails à personnaliser dans `lib/templates.ts`
  (placeholders : `{dirigeant}`, `{entreprise}`, `{observation}`).
- Le module de stockage est isolé dans `lib/store.ts` : pour passer à une
  vraie base de données plus tard, seul ce fichier est à réécrire.

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
