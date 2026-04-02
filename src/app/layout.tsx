import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Estiasi — Culinary Consulting, Cyprus",
  description:
    "Premium culinary consulting for the hospitality sector. Launch venues, elevate operations, and gain independent evaluation. Based in Cyprus.",
  keywords: [
    "culinary consulting",
    "restaurant consulting",
    "Cyprus",
    "hospitality",
    "F&B",
    "restaurant opening",
    "menu engineering",
  ],
  openGraph: {
    title: "Estiasi — Culinary Consulting, Cyprus",
    description:
      "Premium culinary consulting for the hospitality sector. Based in Cyprus.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
