"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { searchDatabase } from "@/data/resources";

type Item = {
  key: string;
  category: string;
  name: string;
  desc: string;
  useCase: string;
  pricing: string;
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return searchDatabase.filter((item) =>
      item.key.toLowerCase().includes(q) ||
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.useCase.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!boxRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const select = (item: Item) => {
    setOpen(false);
    setQuery("");
    const card = document.querySelector(`[data-category="${item.category}"]`) as HTMLElement | null;
    card?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (event.key === "ArrowDown" || event.key === "Enter")) {
      setOpen(true);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, results.length - 1));
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    }
    if (event.key === "Enter" && active >= 0) select(results[active]);
    if (event.key === "Escape") setOpen(false);
  };

  return (
    <div ref={boxRef} className="search-box">
      <div className="search-input-wrap">
        <input
          type="text"
          placeholder="Search Astra, Rank Math, WooCommerce, cache..."
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          aria-autocomplete="list"
          aria-controls="search-listbox"
        />
        <button type="button" onClick={() => setOpen(true)}>Search</button>
      </div>

      {open && results.length > 0 && (
        <div id="search-listbox" role="listbox" className="search-results">
          {results.map((item, index) => (
            <button
              key={item.key}
              type="button"
              role="option"
              aria-selected={index === active}
              className={index === active ? "active" : ""}
              onMouseEnter={() => setActive(index)}
              onClick={() => select(item)}
            >
              <b>{item.name}</b>
              <span>{item.desc}</span>
              <small>{item.useCase} / {item.pricing}</small>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
