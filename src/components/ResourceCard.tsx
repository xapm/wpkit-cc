import { ToolCategory } from "@/data/resources";

export default function ResourceCard({ category }: { category: ToolCategory }) {
  return (
    <section data-category={category.id} className="tool-category-card">
      <div className="category-head">
        <div>
          <p className="card-label">{category.intent}</p>
          <h3>{category.name}</h3>
        </div>
        <span>{category.tools.length} tools</span>
      </div>
      <p>{category.description}</p>

      <div className="resource-grid">
        {category.tools.map((tool) => (
          <a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-item"
          >
            <div className="resource-mark">{tool.name.slice(0, 1)}</div>
            <div>
              <h4>{tool.name}</h4>
              <p>{tool.description}</p>
              <div className="meta-row">
                <span>{tool.useCase}</span>
                <span>{tool.pricing}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
