import type { Metadata } from "next";
import Link from "next/link";
import { getGuide, guideSlugs, guides } from "@/data/guides";
import Header from "@/components/Header";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {
      title: "WP Kit Guide",
    };
  }

    return {
      title: `${guide.title} | WP Kit`,
      description: guide.description,
      alternates: {
        canonical: `/${guide.slug}`,
      },
      openGraph: {
        title: guide.title,
        description: guide.description,
        url: `/${guide.slug}`,
        siteName: "WP Kit",
        type: "article",
      },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return (
      <div className="site-shell">
        <Header />
        <main className="section">
          <div className="app-container">
            <h1>Guide not found</h1>
            <p>This WP Kit guide does not exist yet.</p>
            <Link className="button-secondary" href="/">Back to WP Kit</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const related = guides.filter((item) => item.slug !== guide.slug).slice(0, 3);
  const pageUrl = `https://wpkit.cc/${guide.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: guide.title,
        description: guide.description,
        mainEntityOfPage: pageUrl,
        author: {
          "@type": "Organization",
          name: "WP Kit",
        },
        publisher: {
          "@type": "Organization",
          name: "WP Kit",
          url: "https://wpkit.cc",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "WP Kit",
            item: "https://wpkit.cc",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: guide.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <article className="guide-article">
          <section className="guide-hero">
            <div className="app-container guide-hero-grid">
              <div>
                <p className="eyebrow">{guide.keyword}</p>
                <h1>{guide.title}</h1>
                <p className="hero-lede">{guide.description}</p>
                <div className="hero-actions">
                  <a className="button-primary" href="#checklist">Use the checklist</a>
                  <a className="button-secondary" href="#download">Get the template</a>
                </div>
              </div>
              <aside className="serp-brief">
                <div className="panel-header">
                  <span>Search intent</span>
                  <b>MVP page</b>
                </div>
                <h2>{guide.intent}</h2>
                <p>{guide.audience}</p>
              </aside>
            </div>
          </section>

          <section className="section">
            <div className="app-container guide-layout">
              <div className="guide-main">
                <section className="content-block">
                  <p className="eyebrow">Recommendation</p>
                  <h2>Start with the job, then choose the plugin.</h2>
                  <p>{guide.recommendation}</p>
                </section>

                <section className="content-block">
                  <p className="eyebrow">Suggested stack</p>
                  <h2>A practical first version</h2>
                  <div className="pill-row large">
                    {guide.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </section>

                <section id="checklist" className="content-block">
                  <p className="eyebrow">Checklist</p>
                  <h2>Before you decide or launch</h2>
                  <ol className="checklist">
                    {guide.checklist.map((item, index) => (
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
                    <h2>When not to use the default choice</h2>
                    <ul className="plain-list">
                      {guide.alternatives.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow">Common mistakes</p>
                    <h2>What to avoid</h2>
                    <ul className="plain-list">
                      {guide.mistakes.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </section>
              </div>

              <aside className="guide-sidebar">
                <div id="download" className="download-card">
                  <p className="eyebrow">Template pack</p>
                  <h2>{guide.cta}</h2>
                  <p>Use this as the first conversion test: email signup now, Gumroad checkout later.</p>
                  <form className="email-form vertical">
                    <label htmlFor="guide-email">Email</label>
                    <input id="guide-email" type="email" placeholder="you@example.com" />
                    <button type="submit">Get checklist</button>
                  </form>
                </div>

                <div className="related-card">
                  <p className="eyebrow">Related guides</p>
                  {related.map((item) => (
                    <Link key={item.slug} href={`/${item.slug}`}>
                      <b>{item.title}</b>
                      <span>{item.keyword}</span>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </section>
        </article>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
