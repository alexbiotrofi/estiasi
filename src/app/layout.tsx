import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.estiasi.cy";
const title = "estιasι — culinary consulting";
const description = "We bring restaurants to life. End-to-end culinary consulting for the hospitality sector.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "estιasι",
    title,
    description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
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
