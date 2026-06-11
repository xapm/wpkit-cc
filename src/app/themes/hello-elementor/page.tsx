import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Hello Elementor Theme: Lightweight Base Theme for WordPress | WP Kit",
  description:
    "Hello Elementor is the official lightweight base theme built for Elementor. Learn what it is, whether it suits your site, and which plugin stack works best with it for small business and local service sites.",
  alternates: {
    canonical: "https://wpkit.cc/themes/hello-elementor",
  },
  openGraph: {
    title: "Hello Elementor Theme: Lightweight Base Theme for WordPress",
    description:
      "Hello Elementor is the official lightweight base theme built for Elementor. Learn what it is, whether it suits your site, and which plugin stack works best with it for small business and local service sites.",
    url: "https://wpkit.cc/themes/hello-elementor",
    siteName: "WP Kit",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://wpkit.cc/themes/hello-elementor#article",
      headline: "Hello Elementor Theme: Lightweight Base Theme for WordPress",
      description:
        "Hello Elementor is the official lightweight base theme built for Elementor. Learn what it is, whether it suits your site, and which plugin stack works best with it.",
      mainEntityOfPage: "https://wpkit.cc/themes/hello-elementor",
      author: { "@type": "Organization", name: "WP Kit" },
      publisher: { "@type": "Organization", name: "WP Kit", url: "https://wpkit.cc" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "WP Kit", item: "https://wpkit.cc" },
        { "@type": "ListItem", position: 2, name: "Themes", item: "https://wpkit.cc/themes/hello-elementor" },
        { "@type": "ListItem", position: 3, name: "Hello Elementor", item: "https://wpkit.cc/themes/hello-elementor" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Hello Elementor free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Hello Elementor is a free theme available in the WordPress theme directory. It is the official base theme made by the Elementor team and has no paid version.",
          },
        },
        {
          "@type": "Question",
          name: "What is Hello Elementor used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hello Elementor is used as a minimal base theme when building sites with the Elementor page builder. It loads very little CSS or JS on its own, leaving the visual design entirely to Elementor.",
          },
        },
        {
          "@type": "Question",
          name: "Is Hello Elementor lightweight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Hello Elementor is intentionally minimal and loads under 10KB of theme assets. Its performance depends mainly on how Elementor itself is configured and which widgets are used.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use Hello Elementor for my small business site?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your site is built with Elementor, Hello Elementor is a solid choice. It avoids style conflicts and gives Elementor full control over the design. For sites that use Gutenberg, Astra or GeneratePress are better fits.",
          },
        },
      ],
    },
  ],
};

const pluginStack = [
  "Elementor (Free or Pro)",
  "Rank Math",
  "Fluent Forms",
  "WP Rocket or LiteSpeed Cache",
  "Wordfence",
  "UpdraftPlus",
  "ShortPixel",
];

const relatedGuides = [
  {
    slug: "wordpress-plugin-stack-small-business",
    title: "WordPress Plugin Stack for Small Business",
    keyword: "Plugin stacks",
  },
  {
    slug: "wordpress-launch-checklist",
    title: "WordPress Launch Checklist",
    keyword: "Launch QA",
  },
  {
    slug: "wp-rocket-vs-litespeed-cache",
    title: "WP Rocket vs LiteSpeed Cache",
    keyword: "Performance",
  },
];

export default function HelloElementorPage() {
  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <article className="guide-article">
          <section className="guide-hero">
            <div className="app-container guide-hero-grid">
              <div>
                <p className="eyebrow">WordPress Theme</p>
                <h1>Hello Elementor: The Official Lightweight Base Theme</h1>
                <p className="hero-lede">
                  Hello Elementor is the free, minimal WordPress theme built by the Elementor
                  team. It loads almost nothing on its own, giving Elementor full control over
                  the site design — and it is the recommended starting point for any
                  Elementor-based site.
                </p>
              </div>
              <aside className="serp-brief">
                <div className="panel-header">
                  <span>Theme type</span>
                  <b>Base theme</b>
                </div>
                <h2>Best for Elementor-built sites</h2>
                <p>
                  Hello Elementor is intentionally blank. Its value is in what it does not load
                  — no competing styles, no extra scripts, no layout opinions.
                </p>
              </aside>
            </div>
          </section>

          <section className="section">
            <div className="app-container guide-layout">
              <div className="guide-main">

                <section className="content-block">
                  <p className="eyebrow">What it is</p>
                  <h2>What is Hello Elementor?</h2>
                  <p>
                    Hello Elementor is an open-source WordPress theme created and maintained by
                    Elementor. It is available free from the{" "}
                    <a
                      href="https://wordpress.org/themes/hello-elementor/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WordPress theme directory
                    </a>{" "}
                    and has over 6 million active installs.
                  </p>
                  <p>
                    The theme is designed to do as little as possible. It provides a clean HTML
                    structure with minimal CSS so that Elementor can control every visual element
                    without fighting theme styles. This is why it loads under 10KB of theme
                    assets by default.
                  </p>
                </section>

                <section className="content-block">
                  <p className="eyebrow">Is it the right choice?</p>
                  <h2>When to use Hello Elementor — and when not to</h2>
                  <div className="pill-row large">
                    <span>✓ Building with Elementor Free or Pro</span>
                    <span>✓ Want zero style conflicts</span>
                    <span>✓ Need maximum Elementor design control</span>
                  </div>
                  <p style={{ marginTop: "1rem" }}>
                    Hello Elementor is the right base theme when Elementor is doing all the
                    layout work. If the site uses Gutenberg blocks instead of Elementor, a
                    block-optimised theme like GeneratePress or Astra is a better fit — Hello
                    Elementor adds no value without Elementor.
                  </p>
                </section>

                <section className="content-block">
                  <p className="eyebrow">Suggested plugin stack</p>
                  <h2>Plugins that work well alongside Hello Elementor</h2>
                  <p>
                    Hello Elementor handles the theme layer. These plugins cover the jobs the
                    theme intentionally leaves out: SEO, forms, speed, security, and backups.
                  </p>
                  <div className="pill-row large">
                    {pluginStack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <p style={{ marginTop: "1rem" }}>
                    See the full{" "}
                    <Link href="/wordpress-plugin-stack-small-business">
                      WordPress plugin stack for small business sites
                    </Link>{" "}
                    for a complete checklist.
                  </p>
                </section>

                <section id="checklist" className="content-block">
                  <p className="eyebrow">Setup checklist</p>
                  <h2>Before going live with Hello Elementor</h2>
                  <ol className="checklist">
                    {[
                      "Install Hello Elementor from the WordPress theme directory (free, no paid version needed).",
                      "Install Elementor Free or Elementor Pro depending on the features required.",
                      "Set a single cache plugin — WP Rocket or LiteSpeed Cache, not both.",
                      "Configure Rank Math or Yoast for meta titles, descriptions, and sitemap.",
                      "Test all pages on mobile — Hello Elementor is responsive, but Elementor layouts need mobile verification.",
                      "Run a PageSpeed Insights test after the site is built, not before.",
                      "Back up before updating Elementor or Hello Elementor.",
                    ].map((item, index) => (
                      <li key={item}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ol>
                </section>

                <section className="content-block split-content">
                  <div>
                    <p className="eyebrow">Alternatives</p>
                    <h2>When to consider a different theme</h2>
                    <ul className="plain-list">
                      <li>Use <b>Astra</b> when building with Gutenberg or a mix of builders.</li>
                      <li>Use <b>GeneratePress</b> for maximum performance on content-heavy sites.</li>
                      <li>Use <b>Kadence</b> when the block editor workflow is preferred.</li>
                      <li>Use <b>Blocksy</b> for WooCommerce sites with extensive customisation needs.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow">Common mistakes</p>
                    <h2>What to avoid</h2>
                    <ul className="plain-list">
                      <li>Using Hello Elementor without Elementor — the theme adds nothing on its own.</li>
                      <li>Adding a child theme before checking if customisation is actually needed.</li>
                      <li>Running two page builders alongside Elementor on the same site.</li>
                      <li>Blaming Hello Elementor for performance issues that come from Elementor widget load.</li>
                      <li>Installing both WP Rocket and LiteSpeed Cache at the same time.</li>
                    </ul>
                  </div>
                </section>

                <section className="content-block">
                  <p className="eyebrow">FAQ</p>
                  <h2>Frequently asked questions</h2>
                  <dl style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {[
                      {
                        q: "Is Hello Elementor free?",
                        a: "Yes. Hello Elementor is completely free and has no premium version. It is maintained by the Elementor team and listed in the official WordPress theme directory.",
                      },
                      {
                        q: "Is Hello Elementor lightweight?",
                        a: "Yes. The theme loads fewer than 10KB of assets by default. Performance on any site using it depends primarily on how Elementor and other plugins are configured.",
                      },
                      {
                        q: "Do I need Elementor Pro to use Hello Elementor?",
                        a: "No. Hello Elementor works with Elementor Free. Elementor Pro adds more widgets and theme builder features, but is not required to use the theme.",
                      },
                      {
                        q: "Can I use Hello Elementor without Elementor?",
                        a: "Technically yes, but it is not recommended. The theme is minimal by design — it has no header, footer, or layout opinions of its own. Without Elementor, the site will look unstyled.",
                      },
                    ].map(({ q, a }) => (
                      <div key={q}>
                        <dt style={{ fontWeight: 600, marginBottom: "0.4rem" }}>{q}</dt>
                        <dd style={{ margin: 0 }}>{a}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

              </div>

              <aside className="guide-sidebar">
                <div className="related-card">
                  <p className="eyebrow">Related guides on WP Kit</p>
                  {relatedGuides.map((item) => (
                    <Link key={item.slug} href={`/${item.slug}`}>
                      <b>{item.title}</b>
                      <span>{item.keyword}</span>
                    </Link>
                  ))}
                </div>
                <div className="download-card" style={{ marginTop: "1.5rem" }}>
                  <p className="eyebrow">Plugin stacks</p>
                  <h2>Full plugin stack for your site type.</h2>
                  <p>
                    WP Kit maps site goals to practical, lean plugin sets — no fake rankings,
                    no bloated lists.
                  </p>
                  <Link
                    href="/"
                    className="button-primary"
                    style={{ display: "inline-block", marginTop: "1rem" }}
                  >
                    Browse plugin stacks
                  </Link>
                </div>
              </aside>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
