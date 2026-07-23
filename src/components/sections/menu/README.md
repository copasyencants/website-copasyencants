# Menu

Cartes et menus (restaurant, café…).

## Variantes

### Menu 01

Carte mise en avant en grille de cartes photo : nom, sous-titre italique, description, prix et badge signature, avec CTA vers la carte complète.

- **Fichier** : `menu-01.tsx`
- **Import** : `import { Menu01 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —


## Utilisation

```tsx
import {} from /* Variante */ "@/components/sections/menu";
```

## Conventions

- Props typées via `SectionProps` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (cohérentes, `prefers-reduced-motion`).
- Responsive mobile-first.
