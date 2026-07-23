# Navbar

Barres de navigation et en-têtes de site.

## Variantes

### Navbar 01

Variante générique (scaffold) à personnaliser : titre, sous-titre et contenu via props.

- **Fichier** : `navbar-01.tsx`
- **Import** : `import { Navbar01 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

### Navbar 02

En-tête collant translucide (effet verre au défilement) avec marque serif, navigation ancrée, bascule de thème, CTA et menu latéral mobile accessible.

- **Fichier** : `navbar-02.tsx`
- **Import** : `import { Navbar02 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

## Utilisation

```tsx
import {} from /* Variante */ "@/components/sections/navbar";
```

## Conventions

- Props typées via `SectionProps` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (cohérentes, `prefers-reduced-motion`).
- Responsive mobile-first.
