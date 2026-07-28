"use client";

import React from "react";

import { Link } from "@/i18n/navigation";

export interface NavLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className, ...props }: NavLinkProps) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
