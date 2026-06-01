"use client";

interface Props {
  activeFilter: string;
  onFilterChange: (id: string) => void;
}

const tabs = [
  { id: "all", label: "All tools" },
  { id: "build", label: "Build" },
  { id: "growth", label: "SEO and conversion" },
  { id: "operations", label: "Performance" },
];

export default function FilterTabs({ activeFilter, onFilterChange }: Props) {
  return (
    <div role="tablist" aria-label="Filter WordPress tools" className="tabs">
      {tabs.map((tab) => {
        const active = activeFilter === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active}
            className={active ? "active" : ""}
            onClick={() => onFilterChange(tab.id)}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
