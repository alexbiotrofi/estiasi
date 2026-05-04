import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.estiasi.cy";
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Single-page site — anchor sections are part of `/`
    // and don't need separate sitemap entries.
  ];
}
