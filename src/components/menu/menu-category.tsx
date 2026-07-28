import { cn } from "@/lib/utils";
import { MenuCard, type MenuCardProps } from "@/components/menu/menu-card";
import { Reveal } from "@/components/effects/reveal";

export interface MenuCategoryProps {
  title: string;
  items: MenuCardProps[];
  language?: string;
  minimal?: boolean;
  className?: string;
}

export function MenuCategory({
  title,
  items,
  language,
  minimal = false,
  className,
}: MenuCategoryProps) {
  return (
    <section className={cn("space-y-4", className)}>
      <Reveal>
        <div className="flex items-baseline gap-3">
          <h2 className="text-h3 font-heading font-semibold">{title}</h2>
          {language ? (
            <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
              {language}
            </span>
          ) : null}
        </div>
      </Reveal>

      <div
        className={cn(
          minimal
            ? "grid grid-cols-1 gap-6 sm:grid-cols-2"
            : "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        )}
      >
        {items.map((item, i) => (
          <MenuCard key={`${item.name}-${i}`} {...item} />
        ))}
      </div>
    </section>
  );
}
