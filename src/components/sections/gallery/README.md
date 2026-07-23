# Gallery

Galeries d'images et portfolios visuels.

## Variantes

### Gallery 01

Galerie éditoriale en grille asymétrique (tuiles variables), zoom doux au survol et légende révélée au survol.

- **Fichier** : `gallery-01.tsx`
- **Import** : `import { Gallery01 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —


## Utilisation

```tsx
import {} from /* Variante */ "@/components/sections/gallery";
```

## Conventions

- Props typées via `SectionProps` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (cohérentes, `prefers-reduced-motion`).
- Responsive mobile-first.
