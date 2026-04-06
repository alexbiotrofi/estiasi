import type { Metadata } from "next";
import { Libre_Caslon_Display, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const caslonDisplay = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caslon-display",
});

const caslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-caslon-text",
});

export const metadata: Metadata = {
  title: "estiasi — culinary consulting, cyprus",
  description:
    "End-to-end advisory and operational consulting for the hospitality sector. From concept to grand opening. Based in Cyprus.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${caslonDisplay.variable} ${caslonText.variable}`}>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
