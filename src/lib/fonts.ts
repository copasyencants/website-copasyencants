import { Geist, Geist_Mono, Fraunces } from "next/font/google";

/**
 * Central font configuration.
 * Swap any of these for another next/font family to re-skin typography globally.
 * The CSS variables here are consumed by the design tokens in globals.css
 * (--font-sans, --font-heading, --font-mono).
 */

export const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Heading font — Fraunces, an elegant high-contrast "old style" serif with a
// warm, characterful voice that fits an artisan Italian pizzeria. Optical size
// and soft italics give headlines premium personality while staying readable.
export const fontHeading = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

export const fontVariables = [
  fontSans.variable,
  fontMono.variable,
  fontHeading.variable,
].join(" ");
