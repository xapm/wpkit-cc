import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://wpkit.cc/sitemap.xml",
    host: "https://wpkit.cc",
  };
}
