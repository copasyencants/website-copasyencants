# Timeline

Frises chronologiques et étapes.

## Variantes

### Timeline 01

Récit chronologique avec image d'ambiance et frise verticale (année, titre, texte) ponctuée de points sur un rail.

- **Fichier** : `timeline-01.tsx`
- **Import** : `import { Timeline01 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —


## Utilisation

```tsx
import {} from /* Variante */ "@/components/sections/timeline";
```

## Conventions

- Props typées via `SectionProps` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (cohérentes, `prefers-reduced-motion`).
- Responsive mobile-first.
