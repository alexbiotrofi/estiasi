import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.estiasi.cy/sitemap.xml",
    host: "https://www.estiasi.cy",
  };
}
