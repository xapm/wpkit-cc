export default function TrendingSection() {
  return (
    <section className="section proof-section">
      <div className="app-container proof-grid">
        <div>
          <p className="eyebrow">Why this beats a directory</p>
          <h2>Directories attract browsers. Decision pages attract buyers.</h2>
        </div>
        <div className="proof-points">
          <article>
            <b>Directory page</b>
            <p>Lists many tools, but the visitor still has to decide what to install.</p>
          </article>
          <article>
            <b>Stack page</b>
            <p>Connects website type, plugin choice, launch risk, and monetizable next step.</p>
          </article>
          <article>
            <b>Comparison page</b>
            <p>Captures purchase-adjacent searches such as Rank Math vs Yoast or WP Rocket vs LiteSpeed Cache.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
