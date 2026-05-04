import type { Metadata } from "next";
import "./globals.css";
import { CalendlyAssets } from "@/components/BookDiscoveryCall";

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

// Structured data — tells Google "this is a culinary consulting firm
// based in Cyprus, founded by these two people, here's how to contact"
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "estιasι",
  alternateName: "estiasi",
  description,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  image: `${siteUrl}/icon.svg`,
  email: "hello@estiasi.cy",
  telephone: "+35722030800",
  priceRange: "€€€",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CY",
    addressRegion: "Cyprus",
  },
  areaServed: [
    { "@type": "Country", name: "Cyprus" },
    { "@type": "Place", name: "Europe" },
  ],
  founder: [
    { "@type": "Person", name: "Dimitris Kamaritis", jobTitle: "Culinary Director & Co-Founder" },
    { "@type": "Person", name: "Alex Apostolides", jobTitle: "Operations, Design & Branding · Co-Founder" },
  ],
  serviceType: [
    "Restaurant launch consultancy",
    "Menu development",
    "Kitchen design",
    "Operational systems",
    "HACCP compliance",
    "Brand identity & digital",
  ],
  slogan: "We bring restaurants to life",
  knowsLanguage: ["en", "el"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CalendlyAssets />
      </body>
    </html>
  );
}
