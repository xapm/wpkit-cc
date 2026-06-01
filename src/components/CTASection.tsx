export default function CTASection() {
  return (
    <section className="section cta-section">
      <div className="app-container cta-inner">
        <div>
          <p className="eyebrow">First offer</p>
          <h2>Get the WordPress launch checklist and plugin stack worksheet.</h2>
          <p>
            The first conversion should be simple: capture builders and site owners before
            offering affiliate recommendations, audits, or implementation help.
          </p>
        </div>
        <form className="email-form">
          <label htmlFor="email">Email</label>
          <div>
            <input id="email" type="email" placeholder="you@example.com" />
            <button type="submit">Get checklist</button>
          </div>
        </form>
      </div>
    </section>
  );
}
