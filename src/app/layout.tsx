import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "estιasι — culinary consulting",
  description: "We bring restaurants to life. End-to-end culinary consulting for the hospitality sector.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
