import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CATEGORIES } from '../data/categories.data';
import { PRODUCTS } from '../data/products.data';
import { COMPANY } from '../data/seo.data';
import type { Category } from '../models/category.model';
import type { Product } from '../models/product.model';

type BreadcrumbItem = {
  label: string;
  path: string;
};

type SeoPage = {
  path: string;
  title: string;
  description: string;
  label: string;
  image: string;
  type: 'website' | 'article' | 'product';
  keywords?: string[];
  product?: Product;
  category?: Category;
  breadcrumbs: BreadcrumbItem[];
};

const SITE_URL = COMPANY.website.replace(/\/$/, '');
const DEFAULT_IMAGE = '/LOGO.png';
const MAP_ADDRESS = {
  streetAddress: 'Actual Industrial Area, Uchat Road',
  addressLocality: 'Mangathane',
  addressRegion: 'Maharashtra',
  postalCode: '421312',
  addressCountry: 'IN',
};

const STATIC_PAGES: Record<string, Omit<SeoPage, 'path' | 'image' | 'type' | 'breadcrumbs'> & { image?: string; type?: SeoPage['type'] }> = {
  '/': {
    title: 'Industrial Paint Manufacturer in Maharashtra | Axial TechnoCoats India',
    description:
      'Axial TechnoCoats India manufactures industrial primers, road marking paint, paint thinner and turpentine for contractors, dealers and B2B buyers.',
    label: 'Home',
    keywords: ['industrial paint manufacturer', 'paint manufacturer in Maharashtra', 'Axial TechnoCoats India'],
  },
  '/about': {
    title: 'About Axial TechnoCoats India | Industrial Coatings Manufacturer',
    description:
      'Learn about Axial TechnoCoats India, a Maharashtra industrial coatings manufacturer serving contractors, infrastructure companies, dealers and distributors.',
    label: 'About',
  },
  '/categories': {
    title: 'Industrial Paint Product Categories | Axial TechnoCoats India',
    description:
      'Explore red oxide primer, yellow oxide primer, road marking paint, thinner, turpentine and industrial coating categories from Axial TechnoCoats India.',
    label: 'Product Categories',
  },
  '/industries': {
    title: 'Industries Served | Axial TechnoCoats India',
    description:
      'Industrial paint and coating systems for construction, infrastructure, road contractors, manufacturing, government projects and distribution channels.',
    label: 'Industries',
  },
  '/resources': {
    title: 'Industrial Paint Resources and Buying Guides | Axial TechnoCoats India',
    description:
      'Read industrial paint buying guides, primer selection resources, road marking paint notes and distributor-focused procurement checklists.',
    label: 'Resources',
    type: 'article',
  },
  '/contact': {
    title: 'Contact Axial TechnoCoats India | Request Industrial Paint Quote',
    description:
      'Contact Axial TechnoCoats India for industrial paint, primer, road marking paint, thinner and turpentine supply inquiries in Maharashtra and India.',
    label: 'Contact',
  },
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  applyForUrl(url: string): void {
    const page = this.resolvePage(url);

    this.title.setTitle(page.title);
    this.setCanonical(this.absoluteUrl(page.path));
    this.setMetaTags(page);
    this.setJsonLd(page);
  }

  private resolvePage(url: string): SeoPage {
    const path = this.normalizePath(url);
    const productMatch = path.match(/^\/products\/([^/]+)$/);
    const categoryMatch = path.match(/^\/categories\/([^/]+)$/);

    if (productMatch) {
      const product = PRODUCTS.find((item) => item.slug === productMatch[1]);
      if (product) return this.productPage(product);
    }

    if (categoryMatch) {
      const category = CATEGORIES.find((item) => item.slug === categoryMatch[1]);
      if (category) return this.categoryPage(category);
    }

    const staticPage = STATIC_PAGES[path] ?? STATIC_PAGES['/'];

    return {
      path: STATIC_PAGES[path] ? path : '/',
      title: staticPage.title,
      description: staticPage.description,
      label: staticPage.label,
      image: staticPage.image ?? DEFAULT_IMAGE,
      type: staticPage.type ?? 'website',
      keywords: staticPage.keywords,
      breadcrumbs: this.breadcrumbsFor(path, staticPage.label),
    };
  }

  private productPage(product: Product): SeoPage {
    const category = CATEGORIES.find((item) => item.slug === product.categorySlug);

    return {
      path: `/products/${product.slug}`,
      title: product.seoTitle,
      description: product.metaDescription,
      label: product.name,
      image: product.image,
      type: 'product',
      keywords: product.keywords,
      product,
      category,
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Product Categories', path: '/categories' },
        ...(category ? [{ label: category.title, path: `/categories/${category.slug}` }] : []),
        { label: product.name, path: `/products/${product.slug}` },
      ],
    };
  }

  private categoryPage(category: Category): SeoPage {
    return {
      path: `/categories/${category.slug}`,
      title: `${category.title} Manufacturer and Supplier | Axial TechnoCoats India`,
      description: `${category.description} Browse B2B supply details, use cases and related products from Axial TechnoCoats India.`,
      label: category.title,
      image: category.image,
      type: 'website',
      category,
      breadcrumbs: [
        { label: 'Home', path: '/' },
        { label: 'Product Categories', path: '/categories' },
        { label: category.title, path: `/categories/${category.slug}` },
      ],
    };
  }

  private setMetaTags(page: SeoPage): void {
    const canonical = this.absoluteUrl(page.path);
    const image = this.absoluteAsset(page.image);
    const robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ name: 'robots', content: robots });
    this.meta.updateTag({ name: 'author', content: COMPANY.name });
    this.meta.updateTag({ name: 'application-name', content: COMPANY.name });
    this.meta.updateTag({ name: 'geo.region', content: 'IN-MH' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Mangathane, Maharashtra, India' });

    if (page.keywords?.length) {
      this.meta.updateTag({ name: 'keywords', content: page.keywords.join(', ') });
    } else {
      this.meta.removeTag("name='keywords'");
    }

    this.meta.updateTag({ property: 'og:site_name', content: COMPANY.name });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:type', content: page.type === 'product' ? 'product' : 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:alt', content: `${COMPANY.name} logo and industrial coating brand mark` });
    this.meta.updateTag({ property: 'og:locale', content: 'en_IN' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  private setCanonical(href: string): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', href);
  }

  private setJsonLd(page: SeoPage): void {
    this.document.querySelectorAll('script[data-seo-json-ld="true"]').forEach((element) => element.remove());

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-json-ld', 'true');
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': this.structuredData(page) }).replace(
      /</g,
      '\\u003c',
    );
    this.document.head.appendChild(script);
  }

  private structuredData(page: SeoPage): Array<Record<string, unknown>> {
    const canonical = this.absoluteUrl(page.path);
    const breadcrumbId = `${canonical}#breadcrumb`;
    const graph: Array<Record<string, unknown>> = [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: COMPANY.name,
        url: `${SITE_URL}/`,
        logo: this.absoluteAsset('/LOGO.png'),
        email: COMPANY.email,
        telephone: COMPANY.phone,
        address: { '@type': 'PostalAddress', ...MAP_ADDRESS },
        areaServed: ['Maharashtra', 'India'],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: COMPANY.phone,
            email: COMPANY.email,
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: COMPANY.languages,
          },
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: COMPANY.name,
        image: this.absoluteAsset('/LOGO.png'),
        url: `${SITE_URL}/`,
        telephone: COMPANY.phone,
        email: COMPANY.email,
        address: { '@type': 'PostalAddress', ...MAP_ADDRESS },
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
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: COMPANY.name,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: page.title,
        description: page.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': breadcrumbId },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: page.breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: this.absoluteUrl(item.path),
        })),
      },
    ];

    if (page.product) graph.push(this.productSchema(page));
    if (page.path === '/categories') graph.push(this.categoriesItemList(page));
    if (page.category) graph.push(this.categoryItemList(page));

    return graph;
  }

  private productSchema(page: SeoPage): Record<string, unknown> {
    const product = page.product;
    if (!product) return {};

    return {
      '@type': 'Product',
      '@id': `${this.absoluteUrl(page.path)}#product`,
      name: product.name,
      description: product.metaDescription,
      image: this.absoluteAsset(product.image),
      brand: { '@id': `${SITE_URL}/#organization` },
      manufacturer: { '@id': `${SITE_URL}/#organization` },
      category: page.category?.title ?? product.categorySlug,
      applicationCategory: product.applications,
      audience: {
        '@type': 'BusinessAudience',
        audienceType: COMPANY.customerTypes,
      },
      additionalProperty: product.specifications.map((specification) => ({
        '@type': 'PropertyValue',
        name: specification.label,
        value: specification.value,
      })),
    };
  }

  private categoriesItemList(page: SeoPage): Record<string, unknown> {
    return {
      '@type': 'ItemList',
      '@id': `${this.absoluteUrl(page.path)}#categories`,
      name: 'Axial TechnoCoats India product categories',
      itemListElement: CATEGORIES.map((category, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: category.title,
        url: this.absoluteUrl(`/categories/${category.slug}`),
      })),
    };
  }

  private categoryItemList(page: SeoPage): Record<string, unknown> {
    if (!page.category) return {};
    const products = PRODUCTS.filter((product) => product.categorySlug === page.category?.slug);

    return {
      '@type': 'ItemList',
      '@id': `${this.absoluteUrl(page.path)}#products`,
      name: `${page.category.title} products`,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: this.absoluteUrl(`/products/${product.slug}`),
      })),
    };
  }

  private breadcrumbsFor(path: string, label: string): BreadcrumbItem[] {
    if (path === '/') return [{ label: 'Home', path: '/' }];

    return [
      { label: 'Home', path: '/' },
      { label, path },
    ];
  }

  private absoluteUrl(path: string): string {
    if (path === '/') return `${SITE_URL}/`;
    return `${SITE_URL}${path}`;
  }

  private absoluteAsset(path: string): string {
    return new URL(path, `${SITE_URL}/`).href;
  }

  private normalizePath(url: string): string {
    const path = (url.split(/[?#]/)[0] || '/').replace(/\/+$/, '');
    if (!path) return '/';
    return path.startsWith('/') ? path : `/${path}`;
  }
}
