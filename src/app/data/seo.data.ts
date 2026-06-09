import { LOCATIONS } from './locations.data';
import { PRODUCTS } from './products.data';

export const COMPANY = {
  name: 'Axial TechnoCoats India',
  website: 'https://axialtechnocoats.co.in',
  email: 'Axialtechnocoats@gmail.com',
  phone: '+91 93222 63420',
  whatsapp: '919322263420',
  address: 'Actual Industrial Area, Uchat Road, Mangathane, Maharashtra 421312, India',
  languages: ['English', 'Hindi', 'Marathi', 'Gujarati'],
  customerTypes: [
    'Contractors',
    'Government contractors',
    'Infrastructure companies',
    'Construction companies',
    'Road contractors',
    'Industrial buyers',
    'Hardware distributors',
    'Paint distributors',
    'Building material suppliers',
    'Dealers',
    'Bulk buyers',
    'Manufacturing companies',
    'Retail partners',
  ],
};

export const SITE_STRUCTURE = [
  { label: 'Home', url: '/' },
  { label: 'About Us', url: '/about' },
  { label: 'Products', url: '/products' },
  ...PRODUCTS.map((product) => ({ label: product.name, url: `/products/${product.slug}` })),
  { label: 'Industries Served', url: '/industries' },
  { label: 'Locations', url: '/locations' },
  ...LOCATIONS.map((location) => ({ label: `Paint Manufacturer in ${location.city}`, url: `/locations/${location.slug}` })),
  { label: 'Distributor Program', url: '/distributor-program' },
  { label: 'Dealer Program', url: '/dealer-program' },
  { label: 'Resources', url: '/resources' },
  { label: 'Blog', url: '/blog' },
  { label: 'FAQs', url: '/faqs' },
  { label: 'Contact Us', url: '/contact' },
];

export const AUDIT_CHECKLISTS = [
  {
    title: 'Technical SEO Audit',
    items: [
      'Validate crawlable routes for home, products, locations, programs, resources, blog, FAQs and contact pages.',
      'Maintain XML sitemap coverage for every priority landing page.',
      'Keep robots.txt open for public pages and block only low-value system paths.',
      'Use one canonical URL per route to reduce duplicate indexation.',
      'Avoid thin pages by giving each product and location page unique B2B content, FAQs and CTAs.',
    ],
  },
  {
    title: 'Core Web Vitals',
    items: [
      'Compress media assets and avoid oversized hero imagery on mobile.',
      'Keep layout dimensions stable for hero videos, cards, forms and CTA controls.',
      'Limit third-party scripts and defer non-critical embeds.',
      'Use concise CSS and reusable page components.',
      'Measure LCP, CLS and INP after deployment using Search Console and PageSpeed Insights.',
    ],
  },
  {
    title: 'Angular SEO and SSR Recommendations',
    items: [
      'Use server-side rendering or prerendering for product and location pages before large SEO campaigns.',
      'Set route-level titles, meta descriptions, canonical links and JSON-LD.',
      'Generate static HTML for sitemap URLs if search visibility becomes the primary acquisition channel.',
      'Avoid hiding priority content behind client-only interactions.',
      'Use clean internal links rather than relying only on filters or JavaScript controls.',
    ],
  },
  {
    title: 'Risk Controls',
    items: [
      'Prevent product-location cannibalization by assigning one primary keyword and one recommended page per cluster.',
      'Make every location page locally distinct with city-specific buyers, use cases and FAQs.',
      'Keep product pages focused on product intent and location pages focused on city intent.',
      'Expand content gradually instead of publishing many near-identical pages.',
      'Track duplicate, thin and orphan pages monthly.',
    ],
  },
];

export const KEYWORD_CLUSTERS = [
  {
    cluster: 'Brand Keywords',
    primary: 'Axial TechnoCoats India',
    secondary: 'Axial TechnoCoats paint manufacturer',
    supporting: ['Axial TechnoCoats products', 'Axial TechnoCoats India contact', 'Axial TechnoCoats Maharashtra'],
    intent: 'Brand navigation and trust validation',
    page: '/',
    links: ['/about', '/contact', '/products'],
  },
  {
    cluster: 'Commercial Keywords',
    primary: 'industrial paint manufacturer',
    secondary: 'industrial paint supplier in Maharashtra',
    supporting: ['paint manufacturer for contractors', 'factory direct paint supplier', 'bulk industrial paint supplier'],
    intent: 'B2B supplier comparison',
    page: '/products',
    links: ['/about', '/industries', '/contact'],
  },
  {
    cluster: 'Local Keywords',
    primary: 'paint manufacturer in Mumbai',
    secondary: 'paint manufacturer in Thane',
    supporting: LOCATIONS.slice(0, 15).map((location) => `paint manufacturer in ${location.city}`),
    intent: 'Local supplier discovery',
    page: '/locations',
    links: LOCATIONS.slice(0, 6).map((location) => `/locations/${location.slug}`),
  },
  {
    cluster: 'Distributor Keywords',
    primary: 'paint distributor opportunity',
    secondary: 'industrial paint distributor program',
    supporting: ['paint dealership inquiry', 'paint distributor in Maharashtra', 'industrial paint dealer supply'],
    intent: 'Channel partnership inquiry',
    page: '/distributor-program',
    links: ['/dealer-program', '/products', '/contact'],
  },
  {
    cluster: 'Primer Keywords',
    primary: 'red oxide primer manufacturer',
    secondary: 'yellow oxide primer manufacturer',
    supporting: ['industrial primer manufacturer', 'red oxide primer supplier', 'primer for metal surfaces'],
    intent: 'Product procurement',
    page: '/products/red-oxide-primer',
    links: ['/products/yellow-oxide-primer', '/locations/maharashtra', '/contact'],
  },
  {
    cluster: 'Road Marking Paint Keywords',
    primary: 'road marking paint manufacturer',
    secondary: 'road marking paint supplier',
    supporting: ['road paint for contractors', 'traffic marking paint supplier', 'road safety paint manufacturer'],
    intent: 'Project procurement',
    page: '/products/road-marking-paint',
    links: ['/industries', '/locations/mumbai', '/contact'],
  },
  {
    cluster: 'Thinner and Turpentine Keywords',
    primary: 'paint thinner manufacturer',
    secondary: 'turpentine supplier',
    supporting: ['paint thinner distributor', 'turpentine manufacturer', 'paint solvent supplier'],
    intent: 'Channel and bulk supply',
    page: '/products/paint-thinner',
    links: ['/products/turpentine', '/distributor-program', '/contact'],
  },
];

export const INTERNAL_LINKING_MAP = [
  'Home links to hero products, priority locations, distributor program and quote form.',
  'Product listing links to every hero product and supporting category hub.',
  'Product pages link to related products, locations, industries and quote form.',
  'Location pages link to all hero products and contact form.',
  'Distributor and dealer pages link to products, resources and contact.',
  'Blog and resources link back to product pages, local pages and FAQs.',
];

export const ROADMAPS = [
  {
    title: '90-Day SEO Roadmap',
    items: [
      'Launch product, location, distributor, dealer, resources, FAQ and contact pages with metadata and schema.',
      'Submit sitemap and verify indexation in Google Search Console.',
      'Set up Google Business Profile, NAP consistency and local citation tracking.',
      'Publish first 12 supporting articles around primers, road marking paint, thinner and contractor buying intent.',
      'Review form submissions, WhatsApp inquiries and ranking baseline.',
    ],
  },
  {
    title: '6-Month SEO Roadmap',
    items: [
      'Expand local landing pages with project-use content and city-specific FAQs.',
      'Add manufacturing process, quality control and factory capability pages for EEAT.',
      'Build distributor and dealer lead magnets.',
      'Publish comparison and buying guide content for high-intent B2B searches.',
      'Review cannibalization, internal links and conversion paths monthly.',
    ],
  },
  {
    title: '12-Month SEO Roadmap',
    items: [
      'Scale topical authority with 100 industrial paint articles and contractor resources.',
      'Add SSR or prerendering for priority pages if organic search becomes a core acquisition channel.',
      'Strengthen local links through chambers, directories, supplier networks and project associations.',
      'Create multilingual landing page variants for Hindi, Marathi and Gujarati search demand.',
      'Use lead quality data to prioritize the highest-converting products and cities.',
    ],
  },
];

const articleSeeds = [
  'Red oxide primer buying guide for contractors',
  'Yellow oxide primer use cases for metal surfaces',
  'Road marking paint selection guide for road contractors',
  'Paint thinner buying guide for dealers',
  'Turpentine supply guide for hardware distributors',
  'Industrial paint procurement checklist',
  'Primer vs topcoat selection for construction projects',
  'Surface preparation checklist before primer application',
  'How distributors can evaluate paint manufacturers',
  'Dealer stocking guide for industrial paint products',
  'Road safety paint planning for infrastructure projects',
  'Common primer purchasing mistakes',
  'Bulk paint ordering checklist',
  'Industrial paint FAQs for contractors',
  'Paint storage and handling guide',
  'Factory-direct paint buying guide',
  'Paint distributor onboarding checklist',
  'Government contractor paint procurement guide',
  'Construction company primer planning guide',
  'Industrial maintenance painting checklist',
  'Paint product comparison guide',
  'Road marking project estimation guide',
  'Solvent safety basics for paint buyers',
  'Dealer margin planning for paint categories',
  'How to request a paint quotation',
];

const articleModifiers = ['Mumbai', 'Thane', 'Navi Mumbai', 'Pune'];

export const ARTICLE_IDEAS = articleSeeds.flatMap((idea) => articleModifiers.map((modifier) => `${idea} in ${modifier}`)).slice(0, 100);

export const CONTENT_CALENDAR = Array.from({ length: 12 }, (_, index) => {
  const start = index * 8;
  return {
    month: `Month ${index + 1}`,
    theme: ['Primers', 'Road Marking Paint', 'Solvents', 'Local SEO', 'Distributor Growth', 'Contractor Education'][index % 6],
    ideas: ARTICLE_IDEAS.slice(start, start + (index < 4 ? 9 : 8)),
  };
});

export const GENERAL_FAQS = [
  {
    question: 'What products does Axial TechnoCoats India manufacture and supply?',
    answer:
      'The priority products are red oxide primer, yellow oxide primer, road marking paint, paint thinner and turpentine, with supporting industrial paint and coating categories planned for SEO growth.',
  },
  {
    question: 'Who are the primary customers?',
    answer:
      'The company primarily serves B2B buyers including contractors, government contractors, infrastructure companies, road contractors, industrial buyers, dealers, distributors and hardware channels.',
  },
  {
    question: 'Which locations are targeted?',
    answer:
      'Priority locations include Mumbai, Thane, Navi Mumbai, Kalyan, Dombivli, Bhiwandi, Palghar, Vasai, Virar, Panvel, Pune, Nashik, Nagpur, Aurangabad, Kolhapur, Maharashtra and Pan India.',
  },
  {
    question: 'How can distributors or dealers inquire?',
    answer:
      'Distributors and dealers can use the contact form or WhatsApp button and share their city, product interest, buyer type and expected monthly requirement.',
  },
];
