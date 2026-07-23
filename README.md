# Starter — Sites vitrines premium

Template de référence pour créer rapidement n'importe quel style de site
vitrine (restaurant, luxe, SaaS, agence, portfolio, brutaliste, minimaliste…).
Copie ce dossier pour chaque nouveau projet client.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion · shadcn/ui ·
Magic UI · react-hook-form + zod · next-themes.

## Démarrage

```bash
npm install
cp .env.example .env.local   # renseigne NEXT_PUBLIC_SITE_URL
npm run dev
```

Ouvre http://localhost:3000.

## Scripts

| Commande            | Rôle                       |
| ------------------- | -------------------------- |
| `npm run dev`       | Serveur de dev (Turbopack) |
| `npm run build`     | Build de production        |
| `npm run start`     | Serveur de production      |
| `npm run lint`      | ESLint                     |
| `npm run typecheck` | Vérification des types     |
| `npm run format`    | Formatage Prettier         |

## Personnaliser un projet

1. **Style** : couleurs, radius, ombres, typo → `src/app/globals.css`.
2. **Police heading** : `src/lib/fonts.ts`.
3. **SEO / identité** : `src/lib/site.ts`.
4. **Composants** : `npx shadcn@latest add <name>` ou un composant Magic UI via
   `npx shadcn@latest add "https://magicui.design/r/<name>.json"`.

## Conventions

Voir [`CLAUDE.md`](./CLAUDE.md) : architecture, design system, React/Next,
accessibilité, SEO, performance, nommage et règles de composants réutilisables.

Ce starter ne contient volontairement aucun Hero, Header, Footer, Gallery, FAQ
ni contenu métier : uniquement une base technique premium.
