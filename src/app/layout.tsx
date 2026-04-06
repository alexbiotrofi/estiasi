import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-lora",
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
    <html lang="en" className={lora.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400,500,600,700,100i,200i,300i,400i,500i,600i,700i&f[]=boska@400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
