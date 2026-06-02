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

export function GET() {
  const urls = [
    {
      loc: siteUrl,
      changefreq: "weekly",
      priority: "1.0",
    },
    ...guides.map((guide) => ({
      loc: `${siteUrl}/${guide.slug}`,
      changefreq: "monthly",
      priority: "0.8",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url>
  <loc>${escapeXml(url.loc)}</loc>
  <lastmod>${lastModified}</lastmod>
  <changefreq>${url.changefreq}</changefreq>
  <priority>${url.priority}</priority>
</url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
