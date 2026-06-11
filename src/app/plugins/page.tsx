import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Best WordPress Plugins for Small Business (2026) | WP Kit",
  description:
    "The essential WordPress plugin stack for small business sites in 2026. Recommended plugins for SEO, caching, forms, security, and backups — with no bloat.",
  alternates: {
    canonical: "https://wpkit.cc/plugins",
  },
  openGraph: {
    title: "Best WordPress Plugins for Small Business (2026)",
    description:
      "The essential WordPress plugin stack for small business sites in 2026. Recommended plugins for SEO, caching, forms, security, and backups — with no bloat.",
    url: "https://wpkit.cc/plugins",
    siteName: "WP Kit",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://wpkit.cc/plugins#article",
      headline: "Best WordPress Plugins for Small Business (2026)",
      description:
        "The essential WordPress plugin stack for small business sites in 2026. Recommended plugins for SEO, caching, forms, security, and backups.",
      mainEntityOfPage: "https://wpkit.cc/plugins",
      author: { "@type": "Organization", name: "WP Kit" },
      publisher: { "@type": "Organization", name: "WP Kit", url: "https://wpkit.cc" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "WP Kit", item: "https://wpkit.cc" },
        { "@type": "ListItem", position: 2, name: "WordPress Plugins", item: "https://wpkit.cc/plugins" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How many plugins does a small business WordPress site need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most small business sites run well with 7–10 focused plugins: one each for SEO, caching, forms, security, backups, and analytics. Avoid installing plugins that overlap in function — for example, two SEO plugins or two cache plugins will cause conflicts and slow the site down.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most important WordPress plugin for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An SEO plugin (Rank Math or Yoast) and a caching plugin (WP Rocket or LiteSpeed Cache) are the two highest-impact plugins for most small business sites. SEO plugins handle meta titles, sitemaps, and schema. Cache plugins reduce page load times, which affects both user experience and search rankings.",
          },
        },
        {
          "@type": "Question",
          name: "Are free WordPress plugins good enough for a business site?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — for most small business needs. Rank Math free, Wordfence free, UpdraftPlus free, and Fluent Forms free all cover the core requirements without paid upgrades. The main exceptions are WP Rocket (paid only) and advanced form integrations that require paid plans.",
          },
        },
        {
          "@type": "Question",
          name: "What WordPress plugins should I avoid?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avoid plugins that duplicate functionality you already have (two SEO plugins, two cache plugins), plugins abandoned for more than 2 years, and all-in-one megaplugins that load features on every page whether you use them or not. Run a plugin bloat audit annually to clean up unused plugins.",
          },
        },
      ],
    },
  ],
};

const categories = [
  {
    id: "seo",
    label: "SEO",
    icon: "🔍",
    description: "Controls meta titles, sitemaps, schema markup, and redirects.",
    plugins: [
      {
        name: "Rank Math",
        verdict: "Best free option",
        note: "Includes redirects, 404 monitor, schema types, and Google Analytics integration in the free plan.",
        free: true,
      },
      {
        name: "Yoast SEO",
        verdict: "Established alternative",
        note: "Simpler interface, widely supported by developers. Free plan covers basics; redirects require premium.",
        free: true,
      },
    ],
    guide: { href: "/rank-math-vs-yoast-small-business", label: "Rank Math vs Yoast: Full Comparison" },
  },
  {
    id: "cache",
    label: "Caching & Speed",
    icon: "⚡",
    description: "Reduces page load time by serving cached pages instead of rebuilding them on every request.",
    plugins: [
      {
        name: "WP Rocket",
        verdict: "Easiest setup",
        note: "Paid only. Works on any host. Best choice when you want reliable speed without tuning settings.",
        free: false,
      },
      {
        name: "LiteSpeed Cache",
        verdict: "Best free option on LiteSpeed servers",
        note: "Free. Requires a LiteSpeed server for full benefits. More settings to configure but powerful at scale.",
        free: true,
      },
    ],
    guide: { href: "/wp-rocket-vs-litespeed-cache", label: "WP Rocket vs LiteSpeed Cache: Full Comparison" },
  },
  {
    id: "forms",
    label: "Contact Forms",
    icon: "📋",
    description: "Handles lead capture, enquiry forms, and email notifications.",
    plugins: [
      {
        name: "Fluent Forms",
        verdict: "Recommended",
        note: "Free plan covers most business needs. Fast, conditional logic, email integrations, and no per-submission fees.",
        free: true,
      },
      {
        name: "Contact Form 7",
        verdict: "Simple alternative",
        note: "Free and widely supported. No conditional logic in the free version. Good for single-field enquiry forms.",
        free: true,
      },
      {
        name: "Gravity Forms",
        verdict: "Advanced use cases",
        note: "Paid only. Best when the form needs complex conditional logic or payment integrations (Stripe, PayPal).",
        free: false,
      },
    ],
    guide: null,
  },
  {
    id: "security",
    label: "Security",
    icon: "🔒",
    description: "Monitors login attempts, scans for malware, and blocks known attack patterns.",
    plugins: [
      {
        name: "Wordfence",
        verdict: "Recommended",
        note: "Free plan includes firewall, malware scanner, and login protection. Real-time threat intelligence on paid plan.",
        free: true,
      },
      {
        name: "Solid Security (iThemes)",
        verdict: "Alternative",
        note: "Good for teams that want a simpler dashboard. Free plan covers core hardening steps.",
        free: true,
      },
    ],
    guide: null,
  },
  {
    id: "backups",
    label: "Backups",
    icon: "💾",
    description: "Creates copies of files and the database so the site can be restored after an incident.",
    plugins: [
      {
        name: "UpdraftPlus",
        verdict: "Recommended",
        note: "Free plan backs up to Google Drive, Dropbox, or S3. Schedule automatic backups before any updates.",
        free: true,
      },
      {
        name: "BlogVault",
        verdict: "Managed option",
        note: "Paid. Handles staging, migrations, and real-time backups. Good for agencies managing multiple sites.",
        free: false,
      },
    ],
    guide: null,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: "📊",
    description: "Connects Google Analytics to WordPress and shows traffic data inside the dashboard.",
    plugins: [
      {
        name: "Site Kit by Google",
        verdict: "Recommended",
        note: "Free. Official Google plugin. Connects Search Console, Analytics, and PageSpeed Insights in one place.",
        free: true,
      },
    ],
    guide: null,
  },
];

const guides = [
  {
    href: "/wordpress-plugin-stack-small-business",
    title: "WordPress Plugin Stack for Small Business",
    desc: "A lean, opinionated stack for service businesses and consultants.",
  },
  {
    href: "/wordpress-plugin-bloat-audit",
    title: "WordPress Plugin Bloat Audit Checklist",
    desc: "Find and remove plugins that overlap, slow the site, or add maintenance risk.",
  },
  {
    href: "/wordpress-plugin-stack-for-agencies",
    title: "WordPress Plugin Stack for Agencies",
    desc: "A repeatable stack for agencies managing multiple client builds.",
  },
  {
    href: "/best-wordpress-plugins-local-business",
    title: "Best WordPress Plugins for Local Business",
    desc: "Plugin picks for local service businesses — maps, reviews, bookings, and NAP.",
  },
  {
    href: "/wordpress-launch-checklist",
    title: "WordPress Launch Checklist",
    desc: "Everything to verify before going live — including plugin configuration.",
  },
];

export default function PluginsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gray-700">WP Kit</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">WordPress Plugins</span>
        </nav>

        {/* Hero */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Best WordPress Plugins for Small Business (2026)
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A focused plugin stack for small business WordPress sites. One plugin per job — SEO, caching, forms, security, backups, and analytics — with no overlap and no bloat.
        </p>

        {/* Quick stack summary */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-10">
          <h2 className="text-base font-semibold text-gray-800 mb-3">The core stack at a glance</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <div><span className="font-medium">SEO:</span> Rank Math (free)</div>
            <div><span className="font-medium">Cache:</span> WP Rocket or LiteSpeed Cache</div>
            <div><span className="font-medium">Forms:</span> Fluent Forms (free)</div>
            <div><span className="font-medium">Security:</span> Wordfence (free)</div>
            <div><span className="font-medium">Backups:</span> UpdraftPlus (free)</div>
            <div><span className="font-medium">Analytics:</span> Site Kit by Google (free)</div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Most small business sites need 7–10 plugins. More than that usually means overlap.
          </p>
        </div>

        {/* Plugin categories */}
        <div className="space-y-10">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id}>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                {cat.icon} {cat.label}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{cat.description}</p>

              <div className="space-y-3">
                {cat.plugins.map((plugin) => (
                  <div
                    key={plugin.name}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <span className="font-semibold text-gray-900">{plugin.name}</span>
                        <span className="ml-2 text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {plugin.verdict}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded shrink-0 ${
                          plugin.free
                            ? "bg-green-50 text-green-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {plugin.free ? "Free" : "Paid"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{plugin.note}</p>
                  </div>
                ))}
              </div>

              {cat.guide && (
                <p className="mt-3 text-sm">
                  <Link
                    href={cat.guide.href}
                    className="text-blue-600 hover:underline"
                  >
                    → {cat.guide.label}
                  </Link>
                </p>
              )}
            </section>
          ))}
        </div>

        {/* Rules */}
        <section className="mt-14 border-t border-gray-200 pt-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Rules for a clean plugin stack</h2>
          <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
            <li><strong>One plugin per job.</strong> Two SEO plugins or two cache plugins will conflict. Pick one and remove the other.</li>
            <li><strong>Test on staging before installing on production.</strong> New plugins can break themes, forms, or checkout flows.</li>
            <li><strong>Check the last update date.</strong> Any plugin not updated in 2+ years is a maintenance risk — look for a maintained alternative.</li>
            <li><strong>Remove what you don't use.</strong> Inactive plugins still run code on updates and are a security surface.</li>
            <li><strong>Back up before making changes.</strong> Run a manual UpdraftPlus backup before installing, updating, or removing any plugin.</li>
          </ol>
        </section>

        {/* Related guides */}
        <section className="mt-14 border-t border-gray-200 pt-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Plugin guides on WP Kit</h2>
          <div className="space-y-3">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="block border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors"
              >
                <div className="font-semibold text-gray-900 text-sm mb-1">{g.title}</div>
                <div className="text-xs text-gray-500">{g.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14 border-t border-gray-200 pt-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                How many plugins does a small business WordPress site need?
              </h3>
              <p className="text-sm text-gray-600">
                Most small business sites run well with 7–10 focused plugins. Avoid plugins that overlap in function — two SEO plugins or two cache plugins cause conflicts and slow the site.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                What is the most important WordPress plugin for a small business?
              </h3>
              <p className="text-sm text-gray-600">
                An SEO plugin and a caching plugin are the two highest-impact plugins for most small business sites. SEO plugins handle meta titles, sitemaps, and schema. Cache plugins reduce page load times, which affects both user experience and search rankings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Are free WordPress plugins good enough for a business site?
              </h3>
              <p className="text-sm text-gray-600">
                Yes — for most small business needs. Rank Math free, Wordfence free, UpdraftPlus free, and Fluent Forms free all cover the core requirements. The main paid exception is WP Rocket, which has no free version.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                What WordPress plugins should I avoid?
              </h3>
              <p className="text-sm text-gray-600">
                Avoid plugins that duplicate existing functionality, plugins not updated in 2+ years, and all-in-one megaplugins that load features on every page whether you use them or not. Run a{" "}
                <Link href="/wordpress-plugin-bloat-audit" className="text-blue-600 hover:underline">
                  plugin bloat audit
                </Link>{" "}
                annually.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
