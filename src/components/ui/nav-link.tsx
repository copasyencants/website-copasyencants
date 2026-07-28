"use client";

import React from "react";

import { Link, useRouter } from "@/i18n/navigation";

export interface NavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({
  href,
  children,
  className,
  onClick,
  ...props
}: NavLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si c'est un lien vers une ancre sur une autre page (ex: /#especialidades)
    if (href.startsWith("/#")) {
      e.preventDefault();
      // Naviguer d'abord vers la page racine, puis scroller vers l'ancre
      router.push(href, { scroll: false });
      // Scroller vers l'ancre après la navigation
      setTimeout(() => {
        const anchor = href.replace("/#", "");
        const element = document.querySelector(`#${anchor}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }

    onClick?.(e);
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
