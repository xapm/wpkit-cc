import { guides } from "@/data/guides";

const siteUrl = "https://wpkit.cc";
const lastModified = "2026-06-02T08:31:24.655Z";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function sitemapUrl(
  loc: string,
  changefreq: "weekly" | "monthly",
  priority: number,
) {
  return [
    "<url>",
    `<loc>${escapeXml(loc)}</loc>`,
    `<lastmod>${lastModified}</lastmod>`,
    `<changefreq>${changefreq}</changefreq>`,
    `<priority>${priority}</priority>`,
    "</url>",
  ].join("");
}

export function GET() {
  const urls = [
    sitemapUrl(siteUrl, "weekly", 1),
    ...guides.map((guide) =>
      sitemapUrl(`${siteUrl}/${guide.slug}`, "monthly", 0.8),
    ),
  ];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
    },
  });
}
