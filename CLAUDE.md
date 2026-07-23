# CLAUDE.md

Guide de référence pour ce starter de sites vitrines. Lis-le avant de coder.
Il documente l'architecture, les conventions, le design system et les bonnes
pratiques. Objectif : produire des sites premium, cohérents et performants,
quel que soit le style (restaurant, luxe, SaaS, brutaliste, minimaliste…).

---

## 1. Stack

| Domaine     | Choix                                            |
| ----------- | ------------------------------------------------ |
| Framework   | Next.js 16 (App Router, Turbopack, RSC)          |
| Langage     | TypeScript (strict)                              |
| UI runtime  | React 19                                         |
| Styles      | Tailwind CSS v4 (config CSS-first, `@theme`)     |
| Composants  | shadcn/ui (Radix) + Magic UI                     |
| Animation   | Motion (`motion/react`)                          |
| Icônes      | lucide-react (principal) + react-icons (marques) |
| Formulaires | react-hook-form + zod (`@hookform/resolvers`)    |
| Thème       | next-themes (clair/sombre/système)               |
| Utils       | clsx, tailwind-merge, class-variance-authority   |
| Qualité     | ESLint (flat config) + Prettier                  |

Node ≥ 18.18. Gestionnaire : npm.

> ⚠️ Next.js 16 introduit des changements par rapport aux versions
> antérieures. Voir `AGENTS.md` et `node_modules/next/dist/docs/` en cas de
> doute sur une API.

---

## 2. Architecture des dossiers

```
src/
  app/                 # App Router : routes, layouts, robots.ts, sitemap.ts
    layout.tsx         # Root layout : fonts, providers, metadata, Toaster
    page.tsx           # Page de démarrage (à remplacer)
    globals.css        # ★ Design system (tokens) + base + utilities
    robots.ts          # robots.txt
    sitemap.ts         # sitemap.xml
  components/
    ui/                # Primitives shadcn/ui + Magic UI (vendored, éditables)
    layout/            # Header, Footer, Nav, ModeToggle… (structure de page)
    sections/          # Blocs de page composables (Hero, Features, CTA…)
    effects/           # Wrappers d'effets visuels (fonds, beams, particules)
    forms/             # Formulaires rhf + zod
    icons/             # Icônes custom + ré-exports
    providers/         # Context providers (ThemeProvider…)
  hooks/               # Hooks réutilisables (use-mounted, use-media-query)
  lib/                 # Logique non-UI : utils, site config, metadata, fonts
styles/                # CSS additionnel optionnel
public/                # Assets statiques (images, favicon, og image)
```

Règle : **une responsabilité par dossier**. Rien de métier ne vit dans `ui/`.

---

## 3. Design System — source unique de vérité

Tout le style se pilote depuis **`src/app/globals.css`**.

- **Couleurs** : variables CSS OKLCH dans `:root` (clair) et `.dark` (sombre).
  Sémantiques : `background`, `foreground`, `primary`, `secondary`, `muted`,
  `accent`, `destructive`, `border`, `input`, `ring`, `card`, `popover`,
  `sidebar`, `chart-*`, plus `brand` (accent de marque, pointe sur `primary`
  par défaut). Ne jamais coder une couleur en dur : utiliser les utilitaires
  (`bg-primary`, `text-muted-foreground`, `border-border`, `bg-brand`…).
- **Bloc `@theme`** (tokens statiques) : typographie fluide (`text-display`,
  `text-h1…h3`, `text-lead`), tracking, spacing base, rythme des sections
  (`--section-py`), largeurs de conteneur, ombres (`shadow-xs…2xl`, `glow`),
  durées + easings (`duration-*`, `ease-standard/emphasized/out-expo/spring`),
  breakpoints, échelle de `z-index`.
- **Bloc `@theme inline`** : mappe les variables sémantiques vers les
  utilitaires Tailwind + radius dérivés de `--radius` + keyframes Magic UI.

**Pour re-skinner un site** : changer les couleurs OKLCH dans `:root`/`.dark`,
`--radius`, et éventuellement la police heading dans `src/lib/fonts.ts`. Rien
d'autre à toucher.

Utilitaires maison : `.container-content`, `.container-wide`, `.section`,
`.section-sm`. `prefers-reduced-motion` est respecté globalement.

---

## 4. Conventions de code

### Nommage

- Fichiers composants : `kebab-case.tsx` (`mode-toggle.tsx`).
- Composants / types : `PascalCase`. Hooks : `useCamelCase` dans `use-*.ts`.
- Variables / fonctions : `camelCase`. Constantes globales : `UPPER_SNAKE`.
- Un composant exporté = un fichier. Export **nommé** (pas de default) sauf
  pour les fichiers spéciaux Next (`page.tsx`, `layout.tsx`, `*-image.tsx`…).

### Imports

- Toujours l'alias `@/*` (jamais de `../../../`).
- Ordre : externes → `@/lib` → `@/hooks` → `@/components` → relatifs → styles.

### TypeScript

- `strict` activé. Pas de `any` : préférer `unknown` + narrowing, ou générique.
- Typer les props via `interface Props` ou `React.ComponentProps<…>`.
- Valider toute entrée externe (formulaires, API) avec **zod**.

---

## 5. Conventions React

- **Server Components par défaut.** Ajouter `"use client"` uniquement si le
  composant utilise état, effets, événements, ou une API navigateur.
- Garder les Client Components en **feuilles** de l'arbre ; remonter les
  `"use client"` le plus bas possible pour préserver le rendu serveur.
- Composition via `children` et slots plutôt qu'une explosion de props.
- Variantes de style avec **cva** (voir `button.tsx`) + `cn()` pour fusionner.
- Pas de `setState` synchrone dans un `useEffect` (règle lint active). Pour un
  flag « monté », utiliser `useMounted()` (`useSyncExternalStore`).
- Nettoyer les effets (listeners, timers). Dépendances exhaustives.

---

## 6. Conventions Next.js

- **App Router** exclusivement. Routes = dossiers dans `app/`.
- SEO par page via `constructMetadata()` (`src/lib/metadata.ts`) ou l'API
  `generateMetadata`. Ne pas dupliquer les balises à la main.
- `robots.ts` et `sitemap.ts` sont générés par convention Next.
- Données : `fetch` côté serveur avec cache adapté (`revalidate`) ; `Suspense`
  - `loading.tsx` pour le streaming ; `error.tsx` pour les erreurs.
- Config centralisée dans `src/lib/site.ts` (nom, URL, OG, locale…).
- `NEXT_PUBLIC_SITE_URL` définit l'URL de prod (voir `.env.example`).

---

## 7. Composants réutilisables — règles

1. **Générique d'abord** : pas de texte métier codé en dur ; passer le contenu
   en props (`title`, `items`, `children`).
2. **Themable** : uniquement des couleurs/tokens sémantiques, jamais de hex.
3. **Accepter `className`** et le fusionner en dernier avec `cn()` pour
   permettre l'override côté appelant.
4. **Forwarder les props DOM** pertinentes et `ref` si utile.
5. **Variantes via cva**, pas de branches de style en cascade.
6. **Accessible** dès la conception (voir §8).
7. Placer au bon endroit : primitive → `ui/`, bloc de page → `sections/`,
   effet visuel → `effects/`, structure → `layout/`.

Ajouter une primitive shadcn : `npx shadcn@latest add <name>`.
Ajouter un composant Magic UI : `npx shadcn@latest add "https://magicui.design/r/<name>.json"`.

---

## 8. Accessibilité (non négociable)

- HTML sémantique (`header`, `nav`, `main`, `section`, `footer`, `button` vs
  `a`). Un seul `<h1>` par page ; hiérarchie de titres cohérente.
- Toute image `next/image` a un `alt` (vide `alt=""` si décorative).
- Cibles interactives ≥ 44px, focus visible (déjà géré via `outline-ring`).
- Labels de formulaire liés aux champs ; erreurs annoncées (rôle `alert`).
- Contraste AA minimum. Icônes seules → `aria-label`.
- Respect de `prefers-reduced-motion` (déjà global) ; ne jamais transmettre
  d'information uniquement par la couleur ou le mouvement.

---

## 9. SEO

- Métadonnées via `constructMetadata()` : title, description, canonical,
  Open Graph, Twitter cards, robots. Overrider par page.
- Fournir `public/opengraph-image.png` (1200×630) ou une route
  `opengraph-image.tsx` dynamique.
- URLs propres, `sitemap.xml` à jour (ajouter les routes dans `sitemap.ts`).
- Données structurées JSON-LD (`<script type="application/ld+json">`) selon le
  type de site (Restaurant, LocalBusiness, Organization…).
- `lang` correct sur `<html>`, titres uniques, descriptions < 160 caractères.

---

## 10. Performance

- **RSC par défaut**, JS client minimal.
- Images : toujours `next/image` (AVIF/WebP activés), `sizes` correct,
  `priority` seulement sur l'image LCP.
- Polices : `next/font` (déjà configuré, `display: swap`, subset latin).
- Animations : préférer `transform`/`opacity` (GPU) ; `motion` avec
  `whileInView` + `viewport={{ once: true }}` pour ne jouer qu'une fois.
- Import ciblé des icônes (`import { X } from "lucide-react"`).
- Viser LCP < 2.5s, CLS < 0.1, INP < 200ms. Vérifier le bundle avant merge.

---

## 11. UX / UI

- Cohérence via les tokens : mêmes rayons, ombres, espacements partout.
- Rythme vertical avec `.section` ; largeur de lecture via `container-*`.
- États explicites : hover, focus, active, disabled, **loading** (`Skeleton`),
  **empty** et **error**. Feedback utilisateur via `sonner` (`Toaster` monté).
- Mobile-first : concevoir petit écran d'abord, enrichir en `md:`/`lg:`.
- Micro-interactions sobres ; le mouvement sert le sens, pas la décoration.

---

## 12. Bibliothèque de composants (plateforme)

La bibliothèque de sections (`components/sections/`) est une **plateforme
auto-évolutive**, pensée pour des centaines de composants sans perte de
qualité. Trois piliers :

1. **Familles + variantes versionnées.** Chaque famille (hero, pricing, faq…,
   voir `src/registry/families.ts`) contient des variantes numérotées
   (`hero-01`, `hero-02`…). On **ajoute** une variante, on n'en **remplace**
   jamais une.
2. **Registry cherchable.** Chaque variante a un `*.meta.ts`
   (famille, description, `tags`, `useCases`, dépendances, statut). Le script
   `npm run registry` agrège tout dans `src/registry/registry.json`. Les
   helpers de `src/registry` (`searchComponents`, `getComponentsByFamily`)
   permettent de **retrouver une variante avant d'en créer une**.
3. **Générateur.** `npm run component <famille> [id]` crée composant + story +
   meta, met à jour le barrel (`index.ts`) et le `README.md`, et régénère le
   registry. Templates dans `scripts/templates.ts`.

Commandes :

```bash
npm run component <famille> [id]   # nouvelle variante (ex. hero hero-03)
npm run registry                   # régénère registry.json
npm run scaffold                   # crée les dossiers de familles manquants
npm run storybook                  # catalogue visuel (Storybook, port 6006)
npm run build-storybook            # build statique du catalogue
```

**Storybook** sert de catalogue visuel : chaque variante a une story
(`*.stories.tsx`) et se visualise en clair/sombre sans lancer le site. Les
stories sont exclues du `tsc`/build Next (compilées par Storybook).

Conventions communes à toutes les variantes : voir `components/sections/README.md`
et §7. Animations via `<Reveal>` (`components/effects/reveal.tsx`).

---

## 13. Évolution automatique de la bibliothèque

Lorsque tu développes un nouveau projet, suis **impérativement** ce protocole
pour enrichir la bibliothèque sans régression ni duplication :

1. **Cherche d'abord.** Avant de créer quoi que ce soit, cherche une variante
   existante : `searchComponents("hero centré cta")` ou parcours la famille via
   `getComponentsByFamily("hero")` / le README de la famille / Storybook.
2. **Si elle existe → réutilise-la.** Personnalise via ses props (`title`,
   `items`, `className`…). Ne duplique pas.
3. **Si elle n'existe pas → crée une nouvelle variante** avec le générateur :
   `npm run component <famille> <id>` (id = prochain numéro libre).
4. **Ajoute-la à la bibliothèque** : le générateur met déjà à jour barrel,
   README et registry. Complète le `*.meta.ts` (tags, useCases, description,
   `status`) avec soin — c'est ce qui la rendra retrouvable.
5. **Ne remplace jamais une ancienne variante.** Toujours une nouvelle version
   (`hero-04`, `hero-05`…). Les sites déjà livrés ne doivent pas régresser.
6. **Conserve la cohérence de style** : mêmes tokens, mêmes conventions de
   props, mêmes animations (`<Reveal>`), même niveau d'accessibilité.
7. **Documente** chaque nouveau composant (description claire + entrée README).

Objectif : pouvoir répondre à « Crée un site pour un restaurant gastronomique »
en **composant** des variantes existantes et en ne créant **que** les nouvelles
réellement nécessaires — puis en les versant à la bibliothèque pour les projets
suivants.

### Qualité minimale de chaque variante

Réutilisable · responsive · accessible · facilement personnalisable (props +
tokens) · indépendante (aucune dépendance à une autre section).

---

## 14. Qualité & commandes

```bash
npm run dev           # développement (Turbopack)
npm run build         # build de production
npm run lint          # ESLint
npm run typecheck     # tsc --noEmit
npm run format        # Prettier --write
```

Avant tout commit : `lint` + `typecheck` + `build` doivent passer.
La règle stricte `react-hooks/*` est assouplie **uniquement** pour les
primitives vendored `components/ui/**` ; ton code applicatif reste strict.

---

## 15. Optimisation des tokens (LLM/coût)

- Réutiliser les primitives existantes avant d'en créer de nouvelles.
- Modifier de façon chirurgicale (petits diffs ciblés), pas de réécriture.
- Éviter la duplication : factoriser dans `lib/`, `hooks/`, `sections/`.
- Ne pas commenter l'évident ; commenter seulement le « pourquoi » non trivial.
- S'appuyer sur les tokens du design system au lieu de valeurs magiques.

---

## 16. À NE PAS faire

- Pas de couleurs/espacements/rayons codés en dur → utiliser les tokens.
- Pas de `"use client"` inutile ni de logique métier dans `ui/`.
- Pas de `any`, pas d'import relatif profond, pas de default export superflu.
- Ne pas casser l'accessibilité ni ignorer `prefers-reduced-motion`.
- Ne pas ajouter de dépendance sans usage réel.
