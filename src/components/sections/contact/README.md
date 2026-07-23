# Contact

Sections et formulaires de contact.

## Variantes

### Contact 01

Section contact en deux colonnes : coordonnées (adresse, horaires, téléphone, email) et formulaire de réservation accessible avec retour toast.

- **Fichier** : `contact-01.tsx`
- **Import** : `import { Contact01 } from "@/components/sections/...";`
- **Responsive** : oui · **Animations** : Reveal (scroll, once) · **Dépendances** : —


## Utilisation

```tsx
import {} from /* Variante */ "@/components/sections/contact";
```

## Conventions

- Props typées via `SectionProps` (accessibles, personnalisables).
- Couleurs et espacements via les tokens du design system (aucune valeur en dur).
- Animations via `<Reveal>` (cohérentes, `prefers-reduced-motion`).
- Responsive mobile-first.
