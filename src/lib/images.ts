/**
 * Placeholders d'images libres (LoremFlickr — images Creative Commons par
 * mots-clés). Utilisé uniquement pour la maquette : remplacer par de vraies
 * photos dans `public/` en production. Le `lock` garantit une image stable
 * (pas de changement à chaque rechargement).
 */
export function placeholderImage(
  keywords: string,
  width: number,
  height: number,
  lock: number,
): string {
  const tags = keywords.trim().replace(/\s+/g, ",");
  return `https://loremflickr.com/${width}/${height}/${tags}?lock=${lock}`;
}
