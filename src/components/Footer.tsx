import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="app-container footer-grid">
        <div>
          <h2>WP Kit</h2>
          <p>WordPress plugin stacks, launch checklists, and comparison pages built for search-driven growth.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/#stacks">Plugin stacks</Link>
          <Link href="/#tools">Tool finder</Link>
          <Link href="/#strategy">SEO plan</Link>
          <Link href="/wordpress-launch-checklist">Launch checklist</Link>
        </nav>
      </div>
    </footer>
  );
}
