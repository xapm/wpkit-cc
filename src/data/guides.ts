export type Guide = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  intent: string;
  audience: string;
  recommendation: string;
  stack: string[];
  alternatives: string[];
  checklist: string[];
  mistakes: string[];
  cta: string;
};

export const guides: Guide[] = [
  {
    slug: "wordpress-plugin-stack-small-business",
    title: "WordPress Plugin Stack for Small Business Sites",
    description: "A lean WordPress plugin stack for service businesses, consultants, clinics, and local companies that need leads without plugin bloat.",
    keyword: "WordPress plugin stack small business",
    intent: "Pick a practical plugin set before building or cleaning up a business website.",
    audience: "Small business owners, freelancers, and agencies building lead generation sites.",
    recommendation: "Use one plugin per job: theme, builder, forms, SEO, cache, security, backups, and analytics. Avoid overlapping all-in-one suites until a real need appears.",
    stack: ["GeneratePress or Astra", "Gutenberg or Elementor", "Fluent Forms", "Rank Math", "WP Rocket or LiteSpeed Cache", "Wordfence", "UpdraftPlus", "Site Kit"],
    alternatives: ["Use Contact Form 7 when the form is simple.", "Use Kadence instead of Astra if you prefer block-first layouts.", "Use your host backup system instead of a backup plugin when restores are proven."],
    checklist: ["Define the main conversion: call, quote, booking, or email.", "Test every form on mobile and desktop.", "Add local schema only when the business has a real local presence.", "Compress images before launch.", "Check Search Console after indexing."],
    mistakes: ["Installing two SEO plugins.", "Using a page builder for every small text edit.", "Keeping demo plugins after launch.", "Adding chat, popups, and tracking before the core lead flow works."],
    cta: "Download the editable small business plugin stack worksheet.",
  },
  {
    slug: "wordpress-plugin-bloat-audit",
    title: "WordPress Plugin Bloat Audit Checklist",
    description: "Audit a WordPress site for unnecessary plugins, overlapping features, speed issues, and maintenance risk.",
    keyword: "WordPress plugin bloat audit",
    intent: "Find which plugins are slowing down or complicating a WordPress site.",
    audience: "Site owners, maintenance providers, and agencies inheriting messy WordPress installs.",
    recommendation: "Start with function overlap, not plugin count. Ten focused plugins can be healthier than five heavy plugins that each load unused modules.",
    stack: ["Query Monitor", "PageSpeed Insights", "WebPageTest", "Health Check & Troubleshooting", "WP Crontrol", "Asset CleanUp"],
    alternatives: ["Use your host's application monitoring if available.", "Use a staging copy before disabling plugins.", "Use Chrome DevTools coverage for frontend scripts."],
    checklist: ["Export the active plugin list.", "Mark the business job of each plugin.", "Find duplicated jobs: forms, SEO, cache, security, analytics.", "Test site behavior with suspected plugins disabled on staging.", "Remove inactive and abandoned plugins."],
    mistakes: ["Deleting plugins on production without a backup.", "Judging bloat only by number of installed plugins.", "Ignoring database tables left behind after uninstall.", "Replacing a stable plugin just because a faster one exists."],
    cta: "Download the plugin bloat audit spreadsheet.",
  },
  {
    slug: "wordpress-client-handoff-checklist",
    title: "WordPress Client Handoff Checklist",
    description: "A handoff checklist for agencies and freelancers delivering WordPress websites to clients.",
    keyword: "WordPress client handoff checklist",
    intent: "Deliver a finished WordPress site with accounts, documentation, training, and maintenance boundaries.",
    audience: "Freelancers, small agencies, and consultants shipping client sites.",
    recommendation: "A handoff should reduce future support confusion. Give clients access, a short operating guide, and a clear maintenance decision.",
    stack: ["Admin account policy", "Password manager", "Loom walkthrough", "Maintenance SOP", "Backup restore note", "Analytics access"],
    alternatives: ["Use a client portal for larger agencies.", "Use a one-page PDF for small brochure sites.", "Use role-limited editor accounts when the client should not manage plugins."],
    checklist: ["Create named user accounts instead of shared admin access.", "Record a walkthrough of editing pages and posts.", "Document forms, emails, backups, and billing owners.", "Confirm domain, DNS, hosting, and plugin license ownership.", "Offer a maintenance plan or clear exit instructions."],
    mistakes: ["Handing over only a login.", "Leaving licenses tied to the agency without terms.", "Skipping restore instructions.", "Giving full admin rights to every client user."],
    cta: "Get the editable client handoff checklist.",
  },
  {
    slug: "wordpress-plugin-stack-for-agencies",
    title: "WordPress Plugin Stack for Agencies",
    description: "A repeatable WordPress plugin stack for agencies that need maintainable client builds.",
    keyword: "WordPress plugin stack for agencies",
    intent: "Standardize client builds without locking every project into the same plugins.",
    audience: "WordPress agencies, freelancers, and maintenance teams.",
    recommendation: "Build a default stack with allowed substitutions. The goal is fewer surprises during support, not one universal plugin list.",
    stack: ["GeneratePress or Kadence", "Gutenberg", "ACF", "Fluent Forms", "Rank Math", "WP Rocket", "ManageWP or MainWP", "Wordfence"],
    alternatives: ["Use Elementor for marketing teams that need visual editing.", "Use LiteSpeed Cache when hosting supports it.", "Use Gravity Forms when complex integrations are required."],
    checklist: ["Define default plugins and approved alternatives.", "Document license ownership.", "Create staging and backup rules.", "Create a launch QA checklist.", "Review the stack quarterly."],
    mistakes: ["Letting each developer choose a different stack.", "Using client projects to test unstable plugins.", "Forgetting license renewal ownership.", "Standardizing so hard that special project needs get ignored."],
    cta: "Download the agency plugin stack policy template.",
  },
  {
    slug: "woocommerce-launch-checklist",
    title: "WooCommerce Launch Checklist",
    description: "A practical launch checklist for small WooCommerce stores before accepting real orders.",
    keyword: "WooCommerce launch checklist",
    intent: "Check payments, shipping, taxes, emails, analytics, and store performance before launch.",
    audience: "Store owners, ecommerce freelancers, and WooCommerce implementers.",
    recommendation: "Test the full buyer journey with real payment modes and transactional emails before sending traffic to the store.",
    stack: ["WooCommerce", "Stripe", "PayPal", "MailPoet or Klaviyo", "LiteSpeed Cache", "ShortPixel", "Google Analytics"],
    alternatives: ["Use Shopify when the store needs less WordPress control.", "Use Easy Digital Downloads for purely digital products.", "Use a managed WooCommerce host for higher operational support."],
    checklist: ["Place a test order for every payment method.", "Verify taxes and shipping zones.", "Check order emails and refund emails.", "Test coupons, abandoned cart flows, and account creation.", "Confirm analytics and conversion events."],
    mistakes: ["Launching without a refund test.", "Adding too many checkout plugins.", "Ignoring mobile checkout.", "Forgetting transactional email deliverability."],
    cta: "Download the WooCommerce pre-launch checklist.",
  },
  {
    slug: "best-wordpress-plugins-local-business",
    title: "Best WordPress Plugins for Local Business Websites",
    description: "Recommended WordPress plugins for local service businesses that need calls, leads, maps, reviews, and fast pages.",
    keyword: "best WordPress plugins for local business website",
    intent: "Choose plugins for a local business site without unnecessary ecommerce or publishing tools.",
    audience: "Local service businesses, web designers, and local SEO consultants.",
    recommendation: "Prioritize contact, local SEO, speed, reviews, and trust. Most local sites do not need complex membership, LMS, or heavy ecommerce plugins.",
    stack: ["Astra", "Fluent Forms", "Rank Math", "WP Rocket", "WP Google Maps", "Schema plugin only when needed", "UpdraftPlus"],
    alternatives: ["Embed Google Maps manually if performance matters.", "Use a booking plugin only when appointments are central.", "Use native theme patterns instead of a heavy builder for simple pages."],
    checklist: ["Make phone and booking CTAs visible on mobile.", "Connect forms to a monitored inbox.", "Add NAP consistency to key pages.", "Review location and service pages.", "Test page speed on mobile data."],
    mistakes: ["Installing review widgets that slow every page.", "Using map scripts sitewide.", "Hiding the phone number in images.", "Creating thin city pages without real local value."],
    cta: "Get the local business plugin stack worksheet.",
  },
  {
    slug: "wordpress-seo-checklist-small-business",
    title: "WordPress SEO Checklist for Small Business",
    description: "A WordPress SEO checklist for small businesses that need clean indexing, local visibility, and conversion-focused pages.",
    keyword: "WordPress SEO checklist for small business",
    intent: "Set up WordPress SEO basics without turning the site into a plugin experiment.",
    audience: "Small business owners, local marketers, and WordPress implementers.",
    recommendation: "Start with crawlable pages, useful service content, metadata, schema where appropriate, Search Console, and internal links.",
    stack: ["Rank Math or Yoast", "Google Search Console", "Google Business Profile", "Site Kit", "Redirection", "Schema when justified"],
    alternatives: ["Use Yoast if the team already knows it.", "Use Rank Math when schema and redirects are important.", "Use no extra schema plugin when your SEO plugin already covers the need."],
    checklist: ["Submit XML sitemap.", "Write unique titles for core service pages.", "Add internal links from homepage to money pages.", "Fix noindex mistakes.", "Check mobile speed and form conversions."],
    mistakes: ["Optimizing blog posts before service pages.", "Adding schema markup that does not match the page.", "Ignoring Search Console coverage reports.", "Changing permalinks without redirects."],
    cta: "Download the small business WordPress SEO checklist.",
  },
  {
    slug: "wordpress-launch-checklist",
    title: "WordPress Launch Checklist",
    description: "A complete WordPress launch checklist covering content, SEO, speed, security, forms, analytics, and backups.",
    keyword: "WordPress launch checklist",
    intent: "Avoid common launch mistakes before publishing a WordPress site.",
    audience: "Freelancers, agencies, and business owners preparing to launch.",
    recommendation: "Launch QA should test the site as a visitor, owner, search engine, and maintainer. Each view catches different mistakes.",
    stack: ["Search Console", "Analytics", "Backup tool", "Security plugin", "Cache plugin", "Form plugin", "Redirect manager"],
    alternatives: ["Use host backups when restore tests pass.", "Use server-level cache when available.", "Use a project management checklist for teams."],
    checklist: ["Review all public pages and menus.", "Test forms, email delivery, and thank-you pages.", "Submit sitemap and check robots settings.", "Run mobile speed tests.", "Create a backup and confirm restore path."],
    mistakes: ["Launching with staging noindex enabled.", "Forgetting form notifications.", "Leaving placeholder content.", "Skipping mobile checks.", "Not recording plugin licenses."],
    cta: "Get the editable WordPress launch checklist.",
  },
  {
    slug: "wp-rocket-vs-litespeed-cache",
    title: "WP Rocket vs LiteSpeed Cache",
    description: "Compare WP Rocket and LiteSpeed Cache for WordPress speed optimization based on hosting, complexity, and maintenance needs.",
    keyword: "WP Rocket vs LiteSpeed Cache",
    intent: "Choose a cache plugin before buying or configuring WordPress performance tools.",
    audience: "WordPress site owners, agencies, and performance consultants.",
    recommendation: "Choose LiteSpeed Cache when the server runs LiteSpeed and you can manage the settings. Choose WP Rocket when you want a paid plugin with simpler setup across common hosts.",
    stack: ["WP Rocket", "LiteSpeed Cache", "Cloudflare", "ShortPixel", "PageSpeed Insights", "WebPageTest"],
    alternatives: ["Use host-level caching if the host provides strong defaults.", "Use no extra cache plugin until you measure the baseline.", "Use Cloudflare APO for some content-heavy sites."],
    checklist: ["Confirm server type before choosing LiteSpeed Cache.", "Measure before and after changes.", "Test cart, forms, and logged-in behavior.", "Avoid enabling every optimization toggle at once.", "Document final settings."],
    mistakes: ["Using LiteSpeed Cache without a LiteSpeed server and expecting full benefits.", "Turning on JS delay without testing forms.", "Combining multiple cache plugins.", "Optimizing scores while breaking conversion flows."],
    cta: "Download the cache plugin decision matrix.",
  },
  {
    slug: "rank-math-vs-yoast-small-business",
    title: "Rank Math vs Yoast for Small Business Websites",
    description: "Compare Rank Math and Yoast for small business WordPress SEO, including setup complexity, schema, redirects, and everyday maintenance.",
    keyword: "Rank Math vs Yoast small business",
    intent: "Choose an SEO plugin for a small business website.",
    audience: "Small business owners, freelancers, and WordPress SEO consultants.",
    recommendation: "Use the SEO plugin your team can configure correctly. Rank Math can be attractive for broader free features; Yoast remains a familiar choice for teams that value conservative defaults.",
    stack: ["Rank Math", "Yoast SEO", "Search Console", "Redirection", "Google Business Profile", "Schema validation"],
    alternatives: ["Use Slim SEO for very simple sites.", "Use an SEO suite only when the workflow needs it.", "Use manual schema only for edge cases."],
    checklist: ["Set titles and meta descriptions for core pages.", "Check sitemap output.", "Configure schema carefully.", "Avoid duplicate SEO plugins.", "Review Search Console after launch."],
    mistakes: ["Switching plugins without checking metadata migration.", "Believing plugin scores equal SEO success.", "Adding schema types that do not match the page.", "Ignoring redirects during site changes."],
    cta: "Download the SEO plugin comparison worksheet.",
  },
];

export const guideSlugs = guides.map((guide) => guide.slug);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
