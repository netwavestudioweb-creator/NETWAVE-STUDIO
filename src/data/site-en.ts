// English data source. Main market: Ireland (prices in EUR). UK (GBP) and Australia (AUD) prices in MARKET_PRICES_EN.
// Grid validated by the founder on 21/10/2026: docs/strategie-pays-et-prix.md
// Matches the strategy defined in docs/plan-presence-en-ligne.md and docs/recherche-presence/6-packs.md

import { CONTACT } from "./site";

export { CONTACT };

export const NAV_LINKS_EN = [
  { href: "/en", label: "Home" },
  { href: "/en/pricing", label: "Pricing" },
  { href: "/en/services", label: "Services" },
  { href: "/en/about", label: "The Studio" },
] as const;

export const formatEur = (n: number) => `€${n.toLocaleString("en-IE")}`;
export const formatGbp = (n: number) => `£${n.toLocaleString("en-GB")}`;
export const formatAud = (n: number) => `A$${n.toLocaleString("en-AU")}`;

export const FLAGSHIP_EN = {
  name: "Online Presence in 10 Days",
  href: "/en/pricing",
  fromPrice: 490,
  days: 10,
  refundPercent: 20,
  promise:
    "A complete, professional online presence ready in 10 working days for your restaurant, retail shop, salon, clinic, or local trade. Found on Google, contacted on WhatsApp. Delivered on time or 20% refunded.",
  whyCheaper: [
    {
      title: "No middlemen",
      text: "No account managers or sales reps between you and your developer. You speak directly with the specialist building your site.",
    },
    {
      title: "Proven process",
      text: "Modern toolstack and a streamlined workflow: fewer billable hours, uncompromising quality.",
    },
    {
      title: "Transparent fixed pricing",
      text: "You pay strictly for what your business needs to be found and contacted. No hidden fees, ever.",
    },
  ],
  conditions: [
    "Day 1 is the kickoff call, once we have received all your initial assets (photos, menu or service list).",
    "Your wireframe is presented on Day 2–3: we allow 1 working day for your approval; beyond that, each day of waiting moves the go-live date by the same amount.",
    "If your website is not live by the 10th working day due to a delay on our end, we refund 20% of your package price in writing.",
    "Scope modifications requested after wireframe sign-off may adjust the delivery date with your written approval.",
    "The guarantee applies to Launch, Essential+, and Growth packages. Custom enterprise setups have their own agreed schedule.",
    "Third-party turnaround times (such as Google postcard/video profile verification or registrar DNS propagation) are independent of our 10-day guarantee.",
    "Hosting is managed by the studio; the code and the domain name are yours.",
  ],
  timeline: [
    { day: "Day 1", title: "Kickoff", text: "Video or WhatsApp call: your trade, your local area, your competitors, and targets." },
    { day: "Day 2–3", title: "Wireframe", text: "You approve the mobile look & feel and structure of your homepage." },
    { day: "Day 4–8", title: "Build", text: "Pages, local SEO, Google Profile and WhatsApp Business setup. Private preview link provided." },
    { day: "Day 9", title: "Testing", text: "You test everything directly on your smartphone; we polish." },
    { day: "Day 10", title: "Go-Live", text: "Your site is live, logins delivered in writing, with a video walkthrough." },
  ],
} as const;

export type PackEn = {
  id: "launch" | "essential-plus" | "growth" | "prestige";
  name: string;
  tagline: string;
  price: number;
  installment: number;
  fromPrefix: boolean;
  featured: boolean;
  cta: string;
  features: string[];
  bonuses: string[];
};

export const PACKS_EN: PackEn[] = [
  {
    id: "launch",
    name: "Launch",
    tagline: "Be easily found on Google & Google Maps with a sharp, mobile-first presence.",
    price: 490,
    installment: 164,
    fromPrefix: false,
    featured: false,
    cta: "Choose Launch",
    features: [
      "One-page sectional website (ultra-fast mobile-first design)",
      "Domain name in your name, hosting & SSL included (1st year)",
      "Google Business Profile created or verified (10 photos)",
      "Direct Call & WhatsApp chat buttons",
      "Google Search Console & LocalBusiness schema markup",
      "All credentials and access handed over in writing",
      "Live in 10 working days, or 20% refunded",
    ],
    bonuses: ["Typographic logo", "QR code for Google reviews", "Link-in-bio page for Instagram / TikTok"],
  },
  {
    id: "essential-plus",
    name: "Essential+",
    tagline: "Complete local presence with WhatsApp catalogue and harmonized social profiles.",
    price: 990,
    installment: 330,
    fromPrefix: false,
    featured: false,
    cta: "Choose Essential+",
    features: [
      "Multi-page website (up to 5 pages)",
      "Google Business Profile fully optimized (categories, 20 photos)",
      "WhatsApp Business setup with 10-item product/service catalogue",
      "Facebook & Instagram profiles secured (2FA) and aligned",
      "1 professional business email address",
      "All Launch deliverables (domain and logins in your name, hosting, SSL)",
      "Live in 10 working days, or 20% refunded",
    ],
    bonuses: [
      "QR code + template message to collect client reviews",
      "Link-in-bio page",
      "Personalized video walkthrough",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Our recommended setup: found on Maps, receiving orders/bookings, and measured.",
    price: 1490,
    installment: 497,
    fromPrefix: false,
    featured: true,
    cta: "Choose Growth",
    features: [
      "Website up to 8 pages with trade module (menu & bookings, order or appointment booking)",
      "Online card payment or secure payment link integration",
      "Local SEO: 5 town keywords, LocalBusiness schema & 10 local business directories",
      "Google Business Profile + 4 scheduled posts",
      "Google review responses handled for your first month",
      "Live Google reviews embedded directly on your site",
      "Everything in Essential+ (WhatsApp catalogue, social setup, pro email)",
      "30-day performance & traffic report (calls, directions, clicks)",
      "Live in 10 working days, or 20% refunded",
    ],
    bonuses: [
      "Pack of 6 reusable Canva social media templates",
      "Digital business card (vCard QR code)",
      "Personalized video walkthrough",
      "30 days of priority direct support",
    ],
  },
  {
    id: "prestige",
    name: "Prestige",
    tagline: "For established brands, multi-location businesses, or bespoke online systems.",
    price: 2900,
    installment: 967,
    fromPrefix: true,
    featured: false,
    cta: "Request a Quote",
    features: [
      "Up to 15 pages or multi-location setup (table booking, customer portal, shop)",
      "Bilingual version included (e.g. English + French / Spanish)",
      "Legacy website migration with complete 301 redirection plan",
      "Full brand identity (custom logo design, brand guidelines, stationery)",
      "Dedicated real-time analytics dashboard",
      "3 months of monthly Visibility & SEO management included",
      "Weekly milestone meetings with written delivery roadmap",
    ],
    bonuses: ["All Growth package bonuses included"],
  },
];

export const MAIN_PACKS_EN = PACKS_EN.filter((p) => p.id !== "prestige");
export const PRESTIGE_EN = PACKS_EN.find((p) => p.id === "prestige")!;

export const PACK_COMPARISON_EN: { label: string; values: [string | boolean, string | boolean, string | boolean] }[] = [
  { label: "Website", values: ["1-page sectional", "Up to 5 pages", "Up to 8 pages + booking/ordering"] },
  { label: "Domain & logins in your name, hosting & SSL included", values: [true, true, true] },
  { label: "Google Business Profile & Maps", values: ["Completed, 10 photos", "Optimized, 20 photos", "Optimized + 4 posts"] },
  { label: "Direct Call & WhatsApp buttons", values: [true, true, true] },
  { label: "WhatsApp Business & catalogue", values: [false, "Setup + 10 items", "Setup + 10 items"] },
  { label: "Facebook & Instagram secured (2FA)", values: [false, true, true] },
  { label: "Professional business email", values: [false, "1 address", "1 address"] },
  { label: "Local SEO (5 keywords + 10 directories)", values: [false, false, true] },
  { label: "Booking, ordering or appointment module", values: [false, false, true] },
  { label: "Online card payment integration", values: [false, false, true] },
  { label: "Google review generation & management", values: ["Review QR code", "QR code + message template", "QR code + 1st month responses"] },
  { label: "Google reviews embedded on site", values: [false, false, true] },
  { label: "30-day analytics & results report", values: [false, false, true] },
  { label: "Included bonuses", values: ["Typo logo, link-in-bio", "QR code + templates", "Canva kit, vCard, video"] },
];

export const OPTIONS_EN = [
  { name: "Simple typographic logo (2 options, 2 rounds)", price: 79, note: "Start with a clean, modern mark" },
  { name: "Logo + mini brand guideline", price: 149, note: "Colour palette, typography & rules" },
  { name: "15–20s motion video for social media", price: 129, note: "Independent of the 10-day guarantee" },
  { name: "Printable flyer, poster or menu layout", price: 49, note: "Ready for your physical venue" },
  { name: "Extra webpage", price: 39, note: "Dedicated service or location page" },
  { name: "Second language translation", price: 99, note: "Reach international & expat clientele" },
  { name: "10 extra local directory citations", price: 49, note: "Boost local search visibility" },
  { name: "2nd Google Business location", price: 99, note: "Setup & local optimization" },
  { name: "Old website migration (301 redirects)", price: 79, note: "Preserves your search rankings" },
  { name: "24/7 AI WhatsApp assistant", price: 199, note: "From €199 + Meta API fees" },
  { name: "10 photos enhancement & retouching", price: 29, note: "Crisp, bright and professional" },
  { name: "Meta ad campaign launch (30 days)", price: 99, note: "Ad budget separate" },
  { name: "Pack of 10 social media branded templates", price: 59, note: "Ready to post" },
  { name: "Additional business email inbox", price: 19, note: "Per year" },
] as const;

export const SUBSCRIPTIONS_EN = [
  {
    name: "Presence",
    monthly: 59,
    yearly: 590,
    features: [
      "Fast cloud hosting, backups & updates",
      "Google Profile monitoring & review responses",
      "2 Google updates published per month",
      "30 mins of content updates included monthly",
      "Monthly performance report: calls, routes, clicks",
    ],
  },
  {
    name: "Visibility",
    monthly: 179,
    yearly: 1790,
    features: [
      "Everything in Presence included",
      "4 Google Business posts per month",
      "8 social posts (Facebook & Instagram)",
      "1 local SEO landing page per quarter",
      "Continuous customer review generation strategy",
      "Quarterly 15-minute strategy check-in",
    ],
  },
] as const;

export const COMBO_EN = {
  name: "Growth Pack + 3 Months Visibility",
  regular: 1490 + 3 * 179,
  price: 1749,
} as const;

export const TRUST_CHARTER_EN = [
  {
    title: "10 working days, or 20% back",
    text: "The delivery date is written in your quote. If we are late due to our fault, 20% of your package is refunded in writing.",
  },
  {
    title: "Everything in your name",
    text: "Domain, website, Google Profile, social accounts and raw code: all logins and master credentials handed over to you upon launch.",
  },
  {
    title: "Fixed price, same in Year 2",
    text: "No hidden hosting renewals or price hikes. We remind you 30 days before any annual renewal.",
  },
  {
    title: "Zero long-term lock-in",
    text: "Monthly maintenance can be cancelled anytime with 0 exit fees. You walk away with everything.",
  },
  {
    title: "We are not Google",
    text: "A Google Business Profile is inherently free: we charge for our setup and optimization work, never for 'verification'. No automated robocalls.",
  },
  {
    title: "A real human who answers",
    text: "A named dedicated specialist reachable directly on WhatsApp, answering within 24 business hours.",
  },
] as const;

export const DIAGNOSTIC_EN = {
  title: "Are you visible? Free Local Audit",
  points: [
    "A dated screenshot of what customers in your town see when searching your trade on Google & Maps",
    "Direct comparison against your top 3 local competitors (reviews, photos, website speed, social presence)",
    "3 free high-impact action steps you can implement right away, even without us",
  ],
  cta: "Get My Free Local Audit",
  href: "/en/contact?subject=audit",
} as const;

export const HOME_FAQ_EN = [
  {
    q: "What does 'online presence' mean?",
    a: "It means being found whenever someone in your town searches for your trade on Google, Maps, and social media, and being immediately contactable via phone or WhatsApp. We set up all four pillars: website, Google profile, social channels, and WhatsApp Business.",
  },
  {
    q: "Do you work with businesses in Ireland, the UK and further afield?",
    a: "Yes, worldwide. Everything is handled smoothly remotely via video and WhatsApp, with a private preview link to watch your site progress in real time. Our studio is on UTC+1, so we work Irish and UK business hours.",
  },
  {
    q: "How long does a project take?",
    a: "10 working days guaranteed for Launch, Essential+, and Growth packages from the day we receive your contents. If we miss the deadline due to our fault, you receive 20% of your fee back in writing.",
  },
  {
    q: "Do I truly own my website and domain name?",
    a: "Yes, 100%. The domain is registered in your name, and you receive full administrator access to your website, Google Business Profile, and social media. If you cancel maintenance, you keep everything. Hosting is managed by the studio; the code and the domain name are yours.",
  },
  {
    q: "Are you Google?",
    a: "No. No one can sell you a 'Google verification' because Google Business Profiles are free. We bill solely for our professional setup, copy, local SEO, and monthly upkeep, with a fixed price agreed upfront.",
  },
  {
    q: "What happens after the 10 days?",
    a: "You get 30 days of written post-launch warranty for any adjustments. Afterwards, you can optionally subscribe to our flexible monthly maintenance: Presence at €59/mo or Visibility at €179/mo, with no lock-in.",
  },
];

export const PRICING_FAQ_EN = [
  {
    q: "Is there any surcharge for splitting payment in 3 installments?",
    a: "No. The total price is identical to paying upfront, divided cleanly over three months with 0% interest.",
  },
  {
    q: "Why choose Growth over Essential+?",
    a: "For €500 more, Growth adds your trade-specific module (table booking, takeaway ordering or appointment scheduler), online card payment integration, local SEO across 10 business directories, 4 Google posts, first-month review management, and an analytics report at 30 days. It is the turnkey option we recommend to most local businesses.",
  },
  {
    q: "How do I pay?",
    a: "We accept international bank transfers (SWIFT / IBAN). 50% deposit at project kickoff, 50% upon final delivery after your smartphone tests.",
  },
  {
    q: "What is the total cost over 12 months?",
    a: "Example with the Growth package (€1,490) and the Presence maintenance (€59/mo): €1,490 + 12 × €59 = €2,198 for the entire first year (or €2,080 if paying maintenance annually with 2 months free). Year 2 renews at the exact same monthly rate.",
  },
];

/** Same packs, priced per country (grid validated on 21/10/2026). Ireland & EU is the default shown across the site. */
export const MARKET_PRICES_EN: { label: string; eur: string; gbp: string; aud: string }[] = [
  { label: "Launch", eur: formatEur(490), gbp: formatGbp(449), aud: formatAud(790) },
  { label: "Essential+", eur: formatEur(990), gbp: formatGbp(849), aud: formatAud(1490) },
  { label: "Growth (recommended)", eur: formatEur(1490), gbp: formatGbp(1290), aud: formatAud(2290) },
  { label: "Prestige", eur: `from ${formatEur(2900)}`, gbp: `from ${formatGbp(2490)}`, aud: `from ${formatAud(4500)}` },
  { label: "Presence care plan", eur: `${formatEur(59)}/mo`, gbp: `${formatGbp(55)}/mo`, aud: `${formatAud(89)}/mo` },
  { label: "Visibility care plan", eur: `${formatEur(179)}/mo`, gbp: `${formatGbp(159)}/mo`, aud: `${formatAud(279)}/mo` },
];
