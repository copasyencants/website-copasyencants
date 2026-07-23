# CTA

Appels à l'action.

## Variantes

### Cta 01

Variante générique (scaffold) à personnaliser : titre, sous-titre et contenu via props.

- **Fichier** : `cta-01.tsx`
- **Import** : `import { Cta01 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

### Cta 02

Bandeau d'appel à l'action premium : carte pleine largeur en couleur de marque, motif discret, titre serif et double action réserver/appeler.

- **Fichier** : `cta-02.tsx`
- **Import** : `import { Cta02 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

## Utilisation

```tsx
import {} from /* Variante */ "@/components/sections/cta";
```

## Conventions

- Props typées via `SectionProps` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (cohérentes, `prefers-reduced-motion`).
- Responsive mobile-first.
