export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  useCase: string;
  pricing: string;
}

export interface ToolCategory {
  id: string;
  name: string;
  description: string;
  intent: string;
  tools: Tool[];
}

export interface SiteStack {
  id: string;
  name: string;
  targetKeyword: string;
  searchIntent: string;
  bestFor: string;
  stack: string[];
  launchChecks: string[];
}

export interface KeywordCluster {
  id: string;
  primaryKeyword: string;
  intent: string;
  pageType: string;
  monetization: string;
  firstPages: string[];
}

export interface MonetizationPath {
  id: string;
  name: string;
  whyItWorks: string;
  trafficMatch: string;
  examples: string[];
}

export const siteStacks: SiteStack[] = [
  {
    id: "small-business",
    name: "Small Business Website Stack",
    targetKeyword: "best WordPress plugins for small business",
    searchIntent: "Choose a lean set of plugins for a brochure, lead generation, or local service website.",
    bestFor: "consultants, clinics, agencies, local services, and appointment-led businesses",
    stack: ["Astra", "Elementor", "Fluent Forms", "Rank Math", "WP Rocket"],
    launchChecks: ["contact form tested", "service pages indexed", "local schema reviewed", "mobile CTA visible", "Core Web Vitals checked"],
  },
  {
    id: "content",
    name: "Content and Newsletter Stack",
    targetKeyword: "WordPress plugins for content creators",
    searchIntent: "Turn articles and guides into email subscribers, members, or product buyers.",
    bestFor: "bloggers, course creators, newsletters, and media sites",
    stack: ["GeneratePress", "Gutenberg", "ConvertKit", "MemberPress", "ShortPixel"],
    launchChecks: ["category map built", "author pages complete", "newsletter forms placed", "related posts linked", "image compression enabled"],
  },
  {
    id: "woocommerce",
    name: "WooCommerce Starter Stack",
    targetKeyword: "WooCommerce plugin stack",
    searchIntent: "Launch a small store without installing overlapping checkout, payment, and marketing plugins.",
    bestFor: "small ecommerce brands, digital products, and first stores",
    stack: ["Blocksy", "WooCommerce", "Stripe", "MailPoet", "LiteSpeed Cache"],
    launchChecks: ["test payment completed", "transaction emails delivered", "refund flow documented", "cart page reviewed", "analytics events verified"],
  },
];

export const keywordClusters: KeywordCluster[] = [
  {
    id: "plugins-small-business",
    primaryKeyword: "best WordPress plugins for small business",
    intent: "Commercial investigation before building or improving a business website.",
    pageType: "Best-of guide with a lean plugin stack by use case.",
    monetization: "Affiliate links, setup checklist download, WordPress service leads.",
    firstPages: ["Best WordPress Plugins for Small Business", "WordPress Plugins for Local Business", "WordPress Form Plugin Stack"],
  },
  {
    id: "plugin-comparisons",
    primaryKeyword: "Rank Math vs Yoast",
    intent: "Compare two known tools before choosing one.",
    pageType: "Versus page with decision table, screenshots, tradeoffs, and migration notes.",
    monetization: "Affiliate links and SEO setup service lead capture.",
    firstPages: ["Rank Math vs Yoast", "WP Rocket vs LiteSpeed Cache", "Astra vs GeneratePress"],
  },
  {
    id: "launch-checklists",
    primaryKeyword: "WordPress launch checklist",
    intent: "Find a practical pre-launch process before publishing a client or business site.",
    pageType: "Checklist page with downloadable template and internal links to tool pages.",
    monetization: "Paid templates, maintenance plan leads, email capture.",
    firstPages: ["WordPress Launch Checklist", "WordPress SEO Checklist", "WooCommerce Launch Checklist"],
  },
  {
    id: "woocommerce-stack",
    primaryKeyword: "WooCommerce plugin stack",
    intent: "Reduce plugin confusion when launching a small online store.",
    pageType: "Stack recommendation by store type and checkout requirement.",
    monetization: "WooCommerce extension affiliates, store setup leads, paid SOPs.",
    firstPages: ["WooCommerce Plugin Stack", "WooCommerce Checkout Plugins", "WooCommerce Speed Optimization"],
  },
];

export const monetizationPaths: MonetizationPath[] = [
  {
    id: "affiliate",
    name: "Affiliate revenue",
    whyItWorks: "WordPress users compare plugins, themes, and hosting before buying. Intent is close to purchase.",
    trafficMatch: "Best, versus, alternative, and stack keywords.",
    examples: ["hosting partners", "theme and builder plans", "cache, SEO, form, and membership plugins"],
  },
  {
    id: "service-leads",
    name: "Service leads",
    whyItWorks: "Some visitors want the answer, but many want somebody to implement the answer.",
    trafficMatch: "Checklist, speed, security, migration, WooCommerce, and local business queries.",
    examples: ["WordPress speed audit", "plugin cleanup", "WooCommerce setup", "SEO foundation setup"],
  },
  {
    id: "templates",
    name: "Paid templates and SOPs",
    whyItWorks: "Agencies and freelancers can buy repeatable deliverables instead of rebuilding documents.",
    trafficMatch: "Launch checklist, client handoff, maintenance checklist, and proposal keywords.",
    examples: ["launch checklist", "client handoff doc", "maintenance SOP", "plugin stack worksheet"],
  },
  {
    id: "tool",
    name: "Stack builder tool",
    whyItWorks: "A simple interactive tool creates bookmarks, backlinks, and repeat visits.",
    trafficMatch: "Plugin stack, website checklist, and WordPress setup queries.",
    examples: ["free stack recommendation", "paid PDF report", "email capture before export"],
  },
];

export const toolCategories: ToolCategory[] = [
  {
    id: "build",
    name: "Build and Design",
    description: "Themes and builders that define page speed, editing workflow, and client handoff.",
    intent: "Choose a theme or builder",
    tools: [
      { id: "astra", name: "Astra", description: "Lightweight theme for service websites and quick client delivery.", url: "https://wpastra.com", category: "build", useCase: "small business sites", pricing: "Free + Pro" },
      { id: "generatepress", name: "GeneratePress", description: "Stable, fast theme for content sites that need long-term maintainability.", url: "https://generatepress.com", category: "build", useCase: "blogs and content hubs", pricing: "Free + Pro" },
      { id: "elementor", name: "Elementor", description: "Visual builder for landing pages and clients who need direct editing control.", url: "https://elementor.com", category: "build", useCase: "landing pages", pricing: "Free + Pro" },
      { id: "blocksy", name: "Blocksy", description: "Modern theme with strong WooCommerce support and flexible design controls.", url: "https://creativethemes.com/blocksy/", category: "build", useCase: "WooCommerce stores", pricing: "Free + Pro" },
    ],
  },
  {
    id: "growth",
    name: "SEO and Conversion",
    description: "Tools for search visibility, leads, forms, email, memberships, and revenue paths.",
    intent: "Get traffic and leads",
    tools: [
      { id: "rank-math", name: "Rank Math", description: "SEO plugin for titles, schema, sitemaps, redirects, and on-page checks.", url: "https://rankmath.com", category: "growth", useCase: "technical SEO", pricing: "Free + Pro" },
      { id: "fluent-forms", name: "Fluent Forms", description: "Fast form builder for inquiries, quotes, bookings, and lead magnets.", url: "https://fluentforms.com", category: "growth", useCase: "lead capture", pricing: "Free + Pro" },
      { id: "convertkit", name: "ConvertKit", description: "Email marketing for creators who need landing pages, tags, and automations.", url: "https://convertkit.com", category: "growth", useCase: "email list growth", pricing: "Free + Paid" },
      { id: "memberpress", name: "MemberPress", description: "Membership and course plugin for paid content and subscriptions.", url: "https://memberpress.com", category: "growth", useCase: "paid content", pricing: "Paid" },
    ],
  },
  {
    id: "operations",
    name: "Performance and Maintenance",
    description: "Tools that reduce load time, operational risk, and post-launch maintenance cost.",
    intent: "Keep the site healthy",
    tools: [
      { id: "wp-rocket", name: "WP Rocket", description: "Caching and optimization plugin for commercial WordPress sites.", url: "https://wp-rocket.me", category: "operations", useCase: "speed optimization", pricing: "Paid" },
      { id: "litespeed-cache", name: "LiteSpeed Cache", description: "High-value caching option when the host runs LiteSpeed.", url: "https://wordpress.org/plugins/litespeed-cache/", category: "operations", useCase: "server-level cache", pricing: "Free" },
      { id: "shortpixel", name: "ShortPixel", description: "Image compression and WebP conversion to reduce page weight.", url: "https://shortpixel.com", category: "operations", useCase: "image optimization", pricing: "Free + Paid" },
      { id: "wordfence", name: "Wordfence", description: "Firewall, malware scans, and login security for exposed WordPress installs.", url: "https://www.wordfence.com", category: "operations", useCase: "security", pricing: "Free + Pro" },
    ],
  },
];

export const launchChecklist = [
  "Define the primary conversion before choosing plugins.",
  "Keep one plugin per job: forms, SEO, cache, security, email, ecommerce.",
  "Test forms, checkout, emails, redirects, and analytics before launch.",
  "Publish support pages that answer real buyer questions, not generic plugin descriptions.",
  "Review Search Console weekly for impressions, pages indexed, and query intent gaps.",
];

export const gefeiOperatingNotes = [
  "Start from searchable demand, not personal preference.",
  "Open the Google top 10 and identify whether weak inner pages are ranking.",
  "Use keyword difficulty, backlink needs, and SERP quality to choose the first battles.",
  "Build pages or tools that actually solve the query so users bookmark and share them.",
  "Expand programmatically only after the first cluster proves impressions and clicks in Search Console.",
];

export const searchDatabase = toolCategories.flatMap((category) =>
  category.tools.map((tool) => ({
    key: tool.id,
    category: tool.category,
    name: tool.name,
    desc: tool.description,
    useCase: tool.useCase,
    pricing: tool.pricing,
  }))
);
