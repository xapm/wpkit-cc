import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";

const siteUrl = "https://wpkit.cc";
const lastModified = new Date("2026-06-02T08:31:24.655Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...guides.map((guide) => ({
      url: `${siteUrl}/${guide.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
