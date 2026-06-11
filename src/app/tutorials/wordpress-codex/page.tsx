import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "WordPress Codex: The Complete Reference for WP Site Owners | WP Kit",
  description:
    "The WordPress Codex is the official developer and user reference for WordPress. Learn what it covers, which sections matter for site owners, and which plugins map to the most-used Codex functions.",
  alternates: {
    canonical: "https://wpkit.cc/tutorials/wordpress-codex",
  },
  openGraph: {
    title: "WordPress Codex: The Complete Reference for WP Site Owners",
    description:
      "The WordPress Codex is the official developer and user reference for WordPress. Learn what it covers, which sections matter for site owners, and which plugins map to the most-used Codex functions.",
    url: "https://wpkit.cc/tutorials/wordpress-codex",
    siteName: "WP Kit",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://wpkit.cc/tutorials/wordpress-codex#article",
      headline: "WordPress Codex: The Complete Reference for WP Site Owners",
      description:
        "The WordPress Codex is the official developer and user reference for WordPress. Learn what it covers, which sections matter for site owners, and which plugins map to the most-used Codex functions.",
      mainEntityOfPage: "https://wpkit.cc/tutorials/wordpress-codex",
      author: { "@type": "Organization", name: "WP Kit" },
      publisher: { "@type": "Organization", name: "WP Kit", url: "https://wpkit.cc" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "WP Kit", item: "https://wpkit.cc" },
        { "@type": "ListItem", position: 2, name: "Tutorials", item: "https://wpkit.cc/tutorials/wordpress-codex" },
        { "@type": "ListItem", position: 3, name: "WordPress Codex", item: "https://wpkit.cc/tutorials/wordpress-codex" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the WordPress Codex?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The WordPress Codex is the official online manual and living repository of WordPress knowledge. It documents functions, hooks, template tags, shortcodes, and user guides for WordPress core.",
          },
        },
        {
          "@type": "Question",
          name: "Is the WordPress Codex still updated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WordPress has been moving developer documentation to developer.wordpress.org. The Codex at codex.wordpress.org remains accessible and is still a useful reference, especially for legacy topics.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between the WordPress Codex and developer.wordpress.org?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "developer.wordpress.org is the newer, maintained reference for WordPress developers covering themes, plugins, REST API, and block development. The Codex is the older wiki-style reference that still covers many user and admin topics.",
          },
        },
      ],
    },
  ],
};

const codexSections = [
  {
    title: "Getting Started",
    url: "https://codex.wordpress.org/Getting_Started_with_WordPress",
    description: "Installation, first steps, and the WordPress admin interface.",
  },
  {
    title: "Working with WordPress",
    url: "https://codex.wordpress.org/Working_with_WordPress",
    description: "Posts, pages, media, categories, menus, widgets, and users.",
  },
  {
    title: "Template Tags",
    url: "https://codex.wordpress.org/Template_Tags",
    description: "PHP functions used in themes to display dynamic content.",
  },
  {
    title: "Plugin API",
    url: "https://codex.wordpress.org/Plugin_API",
    description: "Hooks, actions, and filters — the foundation of plugin development.",
  },
  {
    title: "Theme Development",
    url: "https://codex.wordpress.org/Theme_Development",
    description: "Structure, template hierarchy, and best practices for building themes.",
  },
  {
    title: "Security",
    url: "https://codex.wordpress.org/Hardening_WordPress",
    description: "Core hardening steps, file permissions, and login protection.",
  },
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
    slug: "wordpress-seo-checklist-small-business",
    title: "WordPress SEO Checklist for Small Business",
    keyword: "SEO setup",
  },
];

export default function WordpressCodexPage() {
  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <article className="guide-article">
          <section className="guide-hero">
            <div className="app-container guide-hero-grid">
              <div>
                <p className="eyebrow">WordPress Codex</p>
                <h1>WordPress Codex: The Complete Reference for WP Site Owners</h1>
                <p className="hero-lede">
                  The WordPress Codex is the official manual for WordPress — covering functions,
                  template tags, hooks, and admin guides that site owners and developers rely on
                  when building or maintaining a WordPress site.
                </p>
              </div>
              <aside className="serp-brief">
                <div className="panel-header">
                  <span>Reference type</span>
                  <b>Official documentation</b>
                </div>
                <h2>What the Codex covers</h2>
                <p>
                  Core functions, template tags, plugin API, theme development, shortcodes, user
                  roles, and admin tasks — the full breadth of WordPress from user to developer.
                </p>
              </aside>
            </div>
          </section>

          <section className="section">
            <div className="app-container guide-layout">
              <div className="guide-main">

                <section className="content-block">
                  <p className="eyebrow">What it is</p>
                  <h2>What is the WordPress Codex?</h2>
                  <p>
                    The WordPress Codex at{" "}
                    <a href="https://codex.wordpress.org" target="_blank" rel="noopener noreferrer">
                      codex.wordpress.org
                    </a>{" "}
                    is a wiki-style reference maintained by the WordPress community. It documents
                    everything from first-time installation to advanced plugin and theme development.
                  </p>
                  <p>
                    WordPress has been gradually migrating newer documentation to{" "}
                    <a href="https://developer.wordpress.org" target="_blank" rel="noopener noreferrer">
                      developer.wordpress.org
                    </a>
                    , which now covers blocks, REST API, and modern theme development. The Codex
                    remains the most complete reference for legacy topics, template tags, and
                    classic admin workflows.
                  </p>
                </section>

                <section className="content-block">
                  <p className="eyebrow">Key sections</p>
                  <h2>Most-used sections of the WordPress Codex</h2>
                  <div className="checklist-grid">
                    {codexSections.map((section) => (
                      <div key={section.title} className="check-item">
                        <a href={section.url} target="_blank" rel="noopener noreferrer">
                          <b>{section.title}</b>
                        </a>
                        <p>{section.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="content-block">
                  <p className="eyebrow">For site owners</p>
                  <h2>What site owners actually need from the Codex</h2>
                  <p>
                    Most WordPress site owners reach the Codex when they encounter a specific
                    problem: a hook they need to modify, a template tag to add, or a plugin
                    function to understand. The most practical sections for non-developers are:
                  </p>
                  <ul className="plain-list">
                    <li>
                      <b>User Roles and Capabilities</b> — understanding what editors, authors,
                      and contributors can and cannot do
                    </li>
                    <li>
                      <b>Shortcodes</b> — how to embed dynamic content in pages and posts
                    </li>
                    <li>
                      <b>Custom Fields</b> — storing extra data on posts and pages
                    </li>
                    <li>
                      <b>Hardening WordPress</b> — the most important security steps for any site
                    </li>
                    <li>
                      <b>Writing Posts</b> — the full guide to post editing, categories, and tags
                    </li>
                  </ul>
                </section>

                <section className="content-block">
                  <p className="eyebrow">Codex vs developer.wordpress.org</p>
                  <h2>Which reference should you use?</h2>
                  <div className="pill-row large">
                    <span>Use Codex for legacy admin topics</span>
                    <span>Use developer.wordpress.org for blocks and REST API</span>
                    <span>Use both for plugin development</span>
                  </div>
                  <p style={{ marginTop: "1rem" }}>
                    The Codex is most reliable for WordPress 4.x–5.x era topics. For block
                    editor (Gutenberg), block themes, and the REST API, the newer developer docs
                    are more accurate and better maintained.
                  </p>
                </section>

                <section id="checklist" className="content-block">
                  <p className="eyebrow">Quick reference</p>
                  <h2>Codex bookmarks every site owner should have</h2>
                  <ol className="checklist">
                    {[
                      "codex.wordpress.org — the main Codex index",
                      "developer.wordpress.org — block, plugin, and REST API reference",
                      "developer.wordpress.org/reference — full PHP function and hook reference",
                      "wordpress.org/support — community forums for non-developer questions",
                      "make.wordpress.org — development blogs and release notes",
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
                    <p className="eyebrow">Common uses</p>
                    <h2>When to open the Codex</h2>
                    <ul className="plain-list">
                      <li>Looking up a template tag like <code>get_the_title()</code></li>
                      <li>Understanding a plugin hook or filter</li>
                      <li>Reviewing user role capabilities before adding a new user</li>
                      <li>Finding the right function to add to a child theme</li>
                      <li>Checking the correct way to register a custom post type</li>
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow">Common mistakes</p>
                    <h2>What to watch for</h2>
                    <ul className="plain-list">
                      <li>Using deprecated functions still listed in old Codex entries</li>
                      <li>Copying code snippets without checking the WordPress version</li>
                      <li>Ignoring the newer developer.wordpress.org for block-related work</li>
                      <li>Adding template tag code to page content instead of theme files</li>
                      <li>Editing core files instead of using hooks from the Plugin API</li>
                    </ul>
                  </div>
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
                  <h2>Find the right plugins for your site type.</h2>
                  <p>WP Kit maps WordPress use cases to practical, lean plugin stacks.</p>
                  <Link href="/" className="button-primary" style={{ display: "inline-block", marginTop: "1rem" }}>
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
