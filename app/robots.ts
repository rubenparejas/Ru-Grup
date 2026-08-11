import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://terranova.ru-grup.uk/sitemap.xml",
    host: "https://terranova.ru-grup.uk",
  };
}
