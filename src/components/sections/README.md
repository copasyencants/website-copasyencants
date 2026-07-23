# sections/ — bibliothèque de sections

Bibliothèque de blocs de page **versionnés par variante**, conçue pour
s'enrichir projet après projet sans régression ni duplication.

## Structure

```
sections/
  <famille>/
    <famille>-01.tsx        # variante (composant)
    <famille>-01.meta.ts    # métadonnées de recherche (registry)
    <famille>-01.stories.tsx# story Storybook
    index.ts                # barrel (auto-mis à jour)
    README.md               # doc de la famille (auto-mise à jour)
```

Chaque famille peut contenir autant de variantes que nécessaire
(`hero-01`, `hero-02`, …). **On n'écrase jamais une variante existante : on en
ajoute une nouvelle.**

## Créer une variante

```bash
npm run component <famille> [id]     # ex. npm run component hero hero-03
```

Le générateur crée le composant, sa story, son meta, met à jour `index.ts` et
`README.md`, puis régénère le registry. Voir la liste des familles dans
`src/registry/families.ts`.

## Registry & recherche

Toutes les variantes sont indexées dans `src/registry/registry.json` (généré
par `npm run registry`). Utilisez les helpers de `src/registry` pour retrouver
un composant **avant d'en créer un nouveau** :

```ts
import { searchComponents, getComponentsByFamily } from "@/registry";

searchComponents("hero centré cta"); // → variantes pertinentes
```

## Conventions (identiques pour toutes les variantes)

- Server Component par défaut ; `"use client"` seulement si nécessaire.
- Props typées étendant `SectionProps` (`src/lib/component-types.ts`).
- Couleurs/espacements via tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (`components/effects/reveal.tsx`) — cohérentes et
  respectant `prefers-reduced-motion`.
- Responsive mobile-first, accessible (sémantique, `alt`, focus, labels).
- Indépendant : aucune dépendance à une autre section.

Voir la section « Évolution automatique de la bibliothèque » dans `CLAUDE.md`.
