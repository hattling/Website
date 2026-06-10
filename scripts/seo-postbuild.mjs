import { promises as fs } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import ts from 'typescript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist', 'dadswebsite', 'browser');
const siteUrl = 'https://axialtechnocoats.co.in';
const company = {
  name: 'Axial TechnoCoats India',
  email: 'Axialtechnocoats@gmail.com',
  phone: '+91 93222 63420',
  address: {
    streetAddress: 'Actual Industrial Area, Uchat Road',
    addressLocality: 'Mangathane',
    addressRegion: 'Maharashtra',
    postalCode: '421312',
    addressCountry: 'IN',
  },
  languages: ['English', 'Hindi', 'Marathi', 'Gujarati'],
};

const staticPages = [
  {
    path: '/',
    label: 'Home',
    title: 'Industrial Paint Manufacturer in Maharashtra | Axial TechnoCoats India',
    description:
      'Axial TechnoCoats India manufactures industrial primers, road marking paint, paint thinner and turpentine for contractors, dealers and B2B buyers.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/about',
    label: 'About',
    title: 'About Axial TechnoCoats India | Industrial Coatings Manufacturer',
    description:
      'Learn about Axial TechnoCoats India, a Maharashtra industrial coatings manufacturer serving contractors, infrastructure companies, dealers and distributors.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/categories',
    label: 'Product Categories',
    title: 'Industrial Paint Product Categories | Axial TechnoCoats India',
    description:
      'Explore red oxide primer, yellow oxide primer, road marking paint, thinner, turpentine and industrial coating categories from Axial TechnoCoats India.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/industries',
    label: 'Industries',
    title: 'Industries Served | Axial TechnoCoats India',
    description:
      'Industrial paint and coating systems for construction, infrastructure, road contractors, manufacturing, government projects and distribution channels.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/resources',
    label: 'Resources',
    title: 'Industrial Paint Resources and Buying Guides | Axial TechnoCoats India',
    description:
      'Read industrial paint buying guides, primer selection resources, road marking paint notes and distributor-focused procurement checklists.',
    priority: '0.6',
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    label: 'Contact',
    title: 'Contact Axial TechnoCoats India | Request Industrial Paint Quote',
    description:
      'Contact Axial TechnoCoats India for industrial paint, primer, road marking paint, thinner and turpentine supply inquiries in Maharashtra and India.',
    priority: '0.8',
    changefreq: 'monthly',
  },
];

const products = await loadData('src/app/data/products.data.ts', 'PRODUCTS');
const categories = await loadData('src/app/data/categories.data.ts', 'CATEGORIES');
const indexHtml = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

const routes = [
  ...staticPages,
  ...categories.map((category) => ({
    path: `/categories/${category.slug}`,
    label: category.title,
    title: `${category.title} Manufacturer and Supplier | Axial TechnoCoats India`,
    description: `${category.description} Browse B2B supply details, use cases and related products from Axial TechnoCoats India.`,
    image: category.image,
    category,
    priority: category.slug === 'industrial-primers' || category.slug === 'road-marking-paints' || category.slug === 'solvents-thinners' ? '0.8' : '0.7',
    changefreq: 'monthly',
  })),
  ...products.map((product) => ({
    path: `/products/${product.slug}`,
    label: product.name,
    title: product.seoTitle,
    description: product.metaDescription,
    image: product.image,
    product,
    category: categories.find((category) => category.slug === product.categorySlug),
    priority: ['red-oxide-primer', 'yellow-oxide-primer', 'road-marking-paint'].includes(product.slug) ? '0.9' : '0.8',
    changefreq: 'monthly',
  })),
];

for (const route of routes) {
  const html = renderRouteHtml(indexHtml, route);
  const outputFiles =
    route.path === '/'
      ? [path.join(distDir, 'index.html')]
      : [path.join(distDir, `${route.path.slice(1)}.html`), path.join(distDir, route.path.slice(1), 'index.html')];

  for (const outputFile of outputFiles) {
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, html, 'utf8');
  }
}

await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap(routes), 'utf8');
await fs.writeFile(path.join(distDir, 'robots.txt'), robots(), 'utf8');

console.log(`SEO postbuild generated ${routes.length} route HTML snapshots, sitemap.xml and robots.txt.`);

async function loadData(relativePath, exportName) {
  const sourcePath = path.join(rootDir, relativePath);
  const source = await fs.readFile(sourcePath, 'utf8');
  const sourceWithoutTypeImports = source.replace(/^import\s+\{[^}]+\}\s+from\s+['"]\.\.\/models\/[^'"]+['"];\s*$/gm, '');
  const output = ts.transpileModule(sourceWithoutTypeImports, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const context = {
    exports: {},
    module: { exports: {} },
  };

  vm.createContext(context);
  vm.runInContext(output, context, { filename: sourcePath });

  return context.exports[exportName] ?? context.module.exports[exportName];
}

function renderRouteHtml(html, route) {
  const dom = new JSDOM(html);
  const { document } = dom.window;
  const canonical = absoluteUrl(route.path);
  const image = absoluteAsset(route.image ?? '/LOGO.png');

  document.title = route.title;
  upsertLink(document, 'canonical', canonical);
  upsertMeta(document, 'name', 'description', route.description);
  upsertMeta(document, 'name', 'robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
  upsertMeta(document, 'name', 'author', company.name);
  upsertMeta(document, 'name', 'application-name', company.name);
  upsertMeta(document, 'name', 'geo.region', 'IN-MH');
  upsertMeta(document, 'name', 'geo.placename', 'Mangathane, Maharashtra, India');
  upsertMeta(document, 'property', 'og:site_name', company.name);
  upsertMeta(document, 'property', 'og:title', route.title);
  upsertMeta(document, 'property', 'og:description', route.description);
  upsertMeta(document, 'property', 'og:type', route.product ? 'product' : 'website');
  upsertMeta(document, 'property', 'og:url', canonical);
  upsertMeta(document, 'property', 'og:image', image);
  upsertMeta(document, 'property', 'og:image:alt', `${company.name} logo and industrial coating brand mark`);
  upsertMeta(document, 'property', 'og:locale', 'en_IN');
  upsertMeta(document, 'name', 'twitter:card', 'summary_large_image');
  upsertMeta(document, 'name', 'twitter:title', route.title);
  upsertMeta(document, 'name', 'twitter:description', route.description);
  upsertMeta(document, 'name', 'twitter:image', image);

  document.querySelectorAll('script[data-seo-json-ld="true"]').forEach((element) => element.remove());

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-seo-json-ld', 'true');
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': structuredData(route) }).replace(/</g, '\\u003c');
  document.head.appendChild(script);

  return dom.serialize();
}

function upsertMeta(document, attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(document, rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function structuredData(route) {
  const canonical = absoluteUrl(route.path);
  const breadcrumbId = `${canonical}#breadcrumb`;
  const breadcrumbs = breadcrumbsFor(route);
  const graph = [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: company.name,
      url: `${siteUrl}/`,
      logo: absoluteAsset('/LOGO.png'),
      email: company.email,
      telephone: company.phone,
      address: { '@type': 'PostalAddress', ...company.address },
      areaServed: ['Maharashtra', 'India'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: company.phone,
          email: company.email,
          contactType: 'sales',
          areaServed: 'IN',
          availableLanguage: company.languages,
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: company.name,
      image: absoluteAsset('/LOGO.png'),
      url: `${siteUrl}/`,
      telephone: company.phone,
      email: company.email,
      address: { '@type': 'PostalAddress', ...company.address },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
        },
      ],
      priceRange: 'B2B quotations',
      areaServed: ['Maharashtra', 'India'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: company.name,
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: route.title,
      description: route.description,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      breadcrumb: { '@id': breadcrumbId },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: absoluteUrl(item.path),
      })),
    },
  ];

  if (route.product) {
    graph.push({
      '@type': 'Product',
      '@id': `${canonical}#product`,
      name: route.product.name,
      description: route.product.metaDescription,
      image: absoluteAsset(route.product.image),
      brand: { '@id': `${siteUrl}/#organization` },
      manufacturer: { '@id': `${siteUrl}/#organization` },
      category: route.category?.title ?? route.product.categorySlug,
      applicationCategory: route.product.applications,
      additionalProperty: route.product.specifications.map((specification) => ({
        '@type': 'PropertyValue',
        name: specification.label,
        value: specification.value,
      })),
    });
  }

  return graph;
}

function breadcrumbsFor(route) {
  if (route.path === '/') return [{ label: 'Home', path: '/' }];
  if (route.product) {
    return [
      { label: 'Home', path: '/' },
      { label: 'Product Categories', path: '/categories' },
      ...(route.category ? [{ label: route.category.title, path: `/categories/${route.category.slug}` }] : []),
      { label: route.product.name, path: route.path },
    ];
  }
  if (route.category) {
    return [
      { label: 'Home', path: '/' },
      { label: 'Product Categories', path: '/categories' },
      { label: route.category.title, path: route.path },
    ];
  }
  return [
    { label: 'Home', path: '/' },
    { label: route.label, path: route.path },
  ];
}

function absoluteUrl(routePath) {
  return routePath === '/' ? `${siteUrl}/` : `${siteUrl}${routePath}`;
}

function absoluteAsset(assetPath) {
  return new URL(assetPath, `${siteUrl}/`).href;
}

function sitemap(routeList) {
  const urls = routeList
    .map(
      (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}
