# Features

Mise en avant de fonctionnalités ou atouts.

## Variantes

### Features 01

Grille de cartes fonctionnalités avec icônes, 1 à 4 colonnes. Idéale pour présenter des atouts.

- **Fichier** : `features-01.tsx`
- **Import** : `import { Features01 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

### Features 02

Présentation éditoriale en deux colonnes : image immersive avec carte statistique flottante et bloc texte à liste de points cochés.

- **Fichier** : `features-02.tsx`
- **Import** : `import { Features02 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

## Utilisation

```tsx
import {} from /* Variante */ "@/components/sections/features";
```

## Conventions

- Props typées via `SectionProps` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (cohérentes, `prefers-reduced-motion`).
- Responsive mobile-first.
