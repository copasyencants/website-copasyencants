# Testimonials

Avis et témoignages clients.

## Variantes

### Testimonials 01

Variante générique (scaffold) à personnaliser : titre, sous-titre et contenu via props.

- **Fichier** : `testimonials-01.tsx`
- **Import** : `import { Testimonials01 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

### Testimonials 02

Avis clients en grille de cartes : citation, note en étoiles, avatar à initiales, nom et rôle. Sobre et accessible.

- **Fichier** : `testimonials-02.tsx`
- **Import** : `import { Testimonials02 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

## Utilisation

```tsx
import {} from /* Variante */ "@/components/sections/testimonials";
```

## Conventions

- Props typées via `SectionProps` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (cohérentes, `prefers-reduced-motion`).
- Responsive mobile-first.
