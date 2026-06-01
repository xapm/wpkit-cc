"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FilterTabs from "@/components/FilterTabs";
import ResourceCard from "@/components/ResourceCard";
import TrendingSection from "@/components/TrendingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { guides } from "@/data/guides";
import {
  gefeiOperatingNotes,
  keywordClusters,
  launchChecklist,
  monetizationPaths,
  siteStacks,
  toolCategories,
} from "@/data/resources";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categoriesToShow = useMemo(() => {
    if (activeFilter === "all") return toolCategories;
    return toolCategories.filter((category) => category.id === activeFilter);
  }, [activeFilter]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://wpkit.cc/#website",
        name: "WP Kit",
        url: "https://wpkit.cc",
        description: "WordPress plugin stacks, launch checklists, plugin audit guides, and comparison pages.",
      },
      {
        "@type": "ItemList",
        "@id": "https://wpkit.cc/#guides",
        name: "WP Kit WordPress SEO validation guides",
        itemListElement: guides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://wpkit.cc/${guide.slug}`,
          name: guide.title,
        })),
      },
    ],
  };

  return (
    <div className="site-shell">
      <JsonLd data={jsonLd} />
      <Header />

      <main>
        <section className="hero-band">
          <div className="app-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">WordPress plugin stacks and launch checklists</p>
              <h1>Best WordPress plugins for small business sites, chosen by use case.</h1>
              <p className="hero-lede">
                WP Kit turns WordPress plugin research into practical stacks for small business sites,
                content businesses, and WooCommerce stores. No fake rankings, no bloated plugin lists.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#stacks">Compare plugin stacks</a>
                <Link className="button-secondary" href="/wordpress-launch-checklist">View launch checklist</Link>
              </div>
            </div>

            <aside className="serp-brief" aria-label="SEO brief">
              <div className="panel-header">
                <span>Primary SEO target</span>
                <b>2026</b>
              </div>
              <h2>WordPress plugins for small business</h2>
              <p>
                Searchers do not need another directory. They need a short list that explains
                which plugin belongs in which business website and what to test before launch.
              </p>
              <dl>
                <div><dt>Intent</dt><dd>commercial investigation</dd></div>
                <div><dt>Format</dt><dd>stack + checklist</dd></div>
                <div><dt>Risk</dt><dd>thin affiliate listicles</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="stacks" className="section">
          <div className="app-container">
            <div className="section-heading">
              <p className="eyebrow">Keyword clusters</p>
              <h2>Start with the website job, then pick the plugins.</h2>
              <p>
                These stacks map real search intent to page templates that can later become
                dedicated SEO landing pages.
              </p>
            </div>

            <div className="stack-grid">
              {siteStacks.map((stack) => (
                <article key={stack.id} className="stack-card">
                  <p className="card-label">{stack.targetKeyword}</p>
                  <h3>{stack.name}</h3>
                  <p>{stack.searchIntent}</p>
                  <div className="best-for">Best for: {stack.bestFor}</div>
                  <div className="pill-row">
                    {stack.stack.map((tool) => <span key={tool}>{tool}</span>)}
                  </div>
                  <ul>
                    {stack.launchChecks.map((check) => <li key={check}>{check}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="section muted-section">
          <div className="app-container">
            <div className="section-heading compact">
              <p className="eyebrow">Tool finder</p>
              <h2>Filter tools by the role they play in a WordPress build.</h2>
              <p>Every item needs a clear use case so the page avoids generic directory content.</p>
            </div>

            <SearchBar />
            <div className="filter-wrap">
              <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            </div>
            <div className="tool-grid">
              {categoriesToShow.map((category) => (
                <ResourceCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        <section id="checklist" className="section">
          <div className="app-container checklist-grid">
            <div className="section-heading left">
              <p className="eyebrow">Launch checklist</p>
              <h2>The page should win because it helps someone ship a cleaner site.</h2>
              <p>
                Google&apos;s public guidance rewards helpful, reliable, people-first pages. For WP Kit,
                that means evidence, tradeoffs, and decision support instead of repeated affiliate blurbs.
              </p>
            </div>
            <ol className="checklist">
              {launchChecklist.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="strategy" className="section muted-section">
          <div className="app-container">
            <div className="section-heading">
              <p className="eyebrow">SEO manager view</p>
              <h2>Traffic growth depends on keyword clusters, not one homepage.</h2>
              <p>
                The homepage explains the thesis. The first traffic comes from long-tail pages
                where the searcher is comparing tools, launching a site, or trying to avoid plugin mistakes.
              </p>
            </div>

            <div className="guide-index">
              {guides.map((guide) => (
                <Link key={guide.slug} href={`/${guide.slug}`} className="guide-card">
                  <p className="card-label">{guide.keyword}</p>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <span>Open guide</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="clusters" className="section">
          <div className="app-container">
            <div className="section-heading">
              <p className="eyebrow">Expansion map</p>
              <h2>The first 10 pages prove the cluster before scaling.</h2>
              <p>
                Each cluster has a different business job: affiliate clicks, template downloads,
                service leads, or future tool usage.
              </p>
            </div>

            <div className="cluster-grid">
              {keywordClusters.map((cluster) => (
                <article key={cluster.id} className="cluster-card">
                  <p className="card-label">{cluster.primaryKeyword}</p>
                  <h3>{cluster.pageType}</h3>
                  <p>{cluster.intent}</p>
                  <div className="monetization-note">{cluster.monetization}</div>
                  <ul>
                    {cluster.firstPages.map((page) => <li key={page}>{page}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="app-container revenue-grid">
            <div className="section-heading left">
              <p className="eyebrow">Revenue test</p>
              <h2>This is not guaranteed profit. It is a falsifiable monetization plan.</h2>
              <p>
                A profitable WP Kit needs search impressions, qualified clicks, and one working
                offer. These paths give each page a business job before it is written.
              </p>
            </div>
            <div className="revenue-list">
              {monetizationPaths.map((path) => (
                <article key={path.id}>
                  <h3>{path.name}</h3>
                  <p>{path.whyItWorks}</p>
                  <b>{path.trafficMatch}</b>
                  <div className="pill-row">
                    {path.examples.map((example) => <span key={example}>{example}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="app-container method-grid">
            <div className="method-card">
              <p className="eyebrow">Gefei-style operating rule</p>
              <h2>Choose small battles that Google can already prove exist.</h2>
              <ol>
                {gefeiOperatingNotes.map((note, index) => (
                  <li key={note}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{note}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="method-card dark">
              <p className="eyebrow">30-day validation</p>
              <h2>What would prove the thesis?</h2>
              <ul>
                <li>10 pages indexed.</li>
                <li>At least 500 total impressions in Search Console.</li>
                <li>At least 3 pages earning non-brand queries.</li>
                <li>At least one email, affiliate click, or service inquiry.</li>
                <li>If these fail, change the keyword cluster before scaling pages.</li>
              </ul>
            </div>
          </div>
        </section>

        <TrendingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
