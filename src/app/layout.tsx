import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "estiasi — culinary consulting, cyprus",
  description:
    "End-to-end advisory and operational consulting for the hospitality sector. From concept to grand opening. Based in Cyprus.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
