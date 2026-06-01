"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${elevated ? "is-elevated" : ""}`}>
      <nav className="app-container nav-bar" aria-label="Primary navigation">
        <Link href="/" className="brand" aria-label="WP Kit home">
          <span>WP</span>
          <b>WP Kit</b>
        </Link>

        <div className="nav-links">
          <Link href="/#stacks">Stacks</Link>
          <Link href="/#tools">Tools</Link>
          <Link href="/#checklist">Checklist</Link>
          <Link href="/#strategy">SEO Plan</Link>
        </div>

        <button
          className="menu-button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="app-container">
          <Link href="/#stacks" onClick={() => setOpen(false)}>Stacks</Link>
          <Link href="/#tools" onClick={() => setOpen(false)}>Tools</Link>
          <Link href="/#checklist" onClick={() => setOpen(false)}>Checklist</Link>
          <Link href="/#strategy" onClick={() => setOpen(false)}>SEO Plan</Link>
        </div>
      </div>
    </header>
  );
}
