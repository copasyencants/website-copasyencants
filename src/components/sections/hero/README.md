# Hero

Sections d'accroche en haut de page.

## Variantes

### Hero 01

Hero centré avec fond en pointillés, badge, grand titre, sous-titre et double CTA. Polyvalent.

- **Fichier** : `hero-01.tsx`
- **Import** : `import { Hero01 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

### Hero 02

Hero centré générique (scaffold) : titre et sous-titre animés, à personnaliser.

- **Fichier** : `hero-02.tsx`
- **Import** : `import { Hero02 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

### Hero 03

Accroche plein cadre sur photographie avec dégradé chaud lisible, marque serif, double CTA et bandeau de preuves (note et chiffres clés).

- **Fichier** : `hero-03.tsx`
- **Import** : `import { Hero03 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —

## Utilisation

```tsx
import {} from /* Variante */ "@/components/sections/hero";
```

## Conventions

- Props typées via `SectionProps` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (cohérentes, `prefers-reduced-motion`).
- Responsive mobile-first.
