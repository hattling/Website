import { LocationPage } from '../models/location.model';

const priorityCustomers = [
  'Contractors',
  'Government contractors',
  'Infrastructure companies',
  'Construction companies',
  'Road contractors',
  'Industrial buyers',
  'Dealers and distributors',
];

const products = ['Red Oxide Primer', 'Yellow Oxide Primer', 'Road Marking Paint', 'Paint Thinner', 'Turpentine'];

function locationPage(city: string, slug: string, region = 'Maharashtra'): LocationPage {
  return {
    slug,
    city,
    region,
    seoTitle: `Paint Manufacturer in ${city} | Axial TechnoCoats India`,
    metaDescription: `Axial TechnoCoats India serves ${city} with industrial paint, primers, road marking paint, thinner and turpentine for B2B buyers.`,
    h1: `Paint Manufacturer Serving ${city}`,
    summary: `Axial TechnoCoats India supports B2B paint requirements in ${city} for contractors, dealers, distributors, infrastructure companies and industrial buyers. The company focuses on practical product supply, responsive quotation handling and factory-direct inquiries from Maharashtra and across India.`,
    focusProducts: products,
    targetCustomers: priorityCustomers,
    localFaqs: [
      {
        question: `Do you supply industrial paint in ${city}?`,
        answer: `Yes. Axial TechnoCoats India accepts B2B inquiries from ${city} for primers, road marking paint, thinner, turpentine and related industrial paint products.`,
      },
      {
        question: `Can contractors in ${city} request bulk pricing?`,
        answer:
          'Yes. Contractors can share quantity, application details and delivery expectations through the contact form or WhatsApp inquiry.',
      },
      {
        question: `Do you work with dealers and distributors in ${city}?`,
        answer:
          'Yes. Dealer and distributor inquiries are a core conversion goal, especially for recurring paint, primer and solvent demand.',
      },
    ],
  };
}

export const LOCATIONS: LocationPage[] = [
  locationPage('Mumbai', 'mumbai'),
  locationPage('Thane', 'thane'),
  locationPage('Navi Mumbai', 'navi-mumbai'),
  locationPage('Kalyan', 'kalyan'),
  locationPage('Dombivli', 'dombivli'),
  locationPage('Bhiwandi', 'bhiwandi'),
  locationPage('Palghar', 'palghar'),
  locationPage('Vasai', 'vasai'),
  locationPage('Virar', 'virar'),
  locationPage('Panvel', 'panvel'),
  locationPage('Pune', 'pune'),
  locationPage('Nashik', 'nashik'),
  locationPage('Nagpur', 'nagpur'),
  locationPage('Aurangabad', 'aurangabad'),
  locationPage('Kolhapur', 'kolhapur'),
  {
    ...locationPage('Maharashtra', 'maharashtra', 'Maharashtra'),
    seoTitle: 'Paint Manufacturer in Maharashtra | Axial TechnoCoats India',
    h1: 'Paint Manufacturer in Maharashtra',
    summary:
      'Axial TechnoCoats India is a paint manufacturer, wholesaler and distributor serving Maharashtra with industrial primers, road marking paint, paint thinner, turpentine and supporting coating categories for B2B buyers.',
  },
  {
    ...locationPage('India', 'pan-india', 'India'),
    seoTitle: 'Industrial Paint Manufacturer Serving India | Axial TechnoCoats India',
    h1: 'Industrial Paint Manufacturer Serving India',
    summary:
      'Axial TechnoCoats India accepts Pan India B2B inquiries for industrial paint products, distributor requirements, dealer supply and factory-direct orders.',
  },
];
