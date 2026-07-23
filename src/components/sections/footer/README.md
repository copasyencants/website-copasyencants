# Footer

Pieds de page.

## Variantes

### Footer 01

Variante générique (scaffold) à personnaliser : titre, sous-titre et contenu via props.

- **Fichier** : `footer-01.tsx`
- **Import** : `import { Footer01 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

### Footer 02

Pied de page riche : marque, baseline, colonnes de liens, réseaux sociaux et barre inférieure copyright. Sombre et chaleureux.

- **Fichier** : `footer-02.tsx`
- **Import** : `import { Footer02 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

## Utilisation

```tsx
import {} from /* Variante */ "@/components/sections/footer";
```

## Conventions

- Props typées via `SectionProps` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (cohérentes, `prefers-reduced-motion`).
- Responsive mobile-first.
