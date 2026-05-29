import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    slug: 'px-900-epoxy-barrier',
    categorySlug: 'protective-coatings',
    name: 'PX-900 Epoxy Barrier',
    shortDescription: 'Two-component epoxy barrier system for aggressive corrosion zones.',
    overview:
      'PX-900 delivers high-build corrosion protection for steel and prepared concrete in severe industrial service environments.',
    features: [
      'High film build with excellent edge retention',
      'Strong adhesion to blasted steel and primed substrates',
      'Chemical and moisture resistance for long service intervals',
    ],
    specifications: [
      { label: 'Finish', value: 'Semi-Gloss' },
      { label: 'Volume Solids', value: '78% +/- 2%' },
      { label: 'Dry Film Thickness', value: '125-250 microns per coat' },
      { label: 'Touch Dry', value: '2-3 hours at 25C' },
      { label: 'Recoat Window', value: '8-48 hours at 25C' },
    ],
    applications: ['Structural steel', 'Storage tanks', 'Pipeline exteriors'],
    industries: ['Infrastructure', 'Energy', 'Manufacturing'],
    datasheetLabel: 'PX-900 Technical Datasheet (PDF)',
    image: 'https://images.unsplash.com/photo-1581092786450-7ef25f140997?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'mp-420-zinc-primer',
    categorySlug: 'industrial-primers',
    name: 'MP-420 Zinc Primer',
    shortDescription: 'Zinc-rich primer providing enhanced cathodic protection.',
    overview:
      'MP-420 is engineered for high-corrosion industrial assets requiring robust substrate protection and strong topcoat compatibility.',
    features: [
      'Excellent anti-corrosion properties in marine and industrial atmospheres',
      'Fast handling and recoat cycles for production efficiency',
      'Compatible with epoxy and polyurethane topcoat systems',
    ],
    specifications: [
      { label: 'Finish', value: 'Matte Gray' },
      { label: 'Volume Solids', value: '62% +/- 2%' },
      { label: 'Dry Film Thickness', value: '60-100 microns per coat' },
      { label: 'Touch Dry', value: '30-45 minutes at 25C' },
      { label: 'Recoat Window', value: '2-24 hours at 25C' },
    ],
    applications: ['Steel fabrication', 'Heavy machinery', 'Marine support structures'],
    industries: ['Manufacturing', 'Marine', 'Infrastructure'],
    datasheetLabel: 'MP-420 Technical Datasheet (PDF)',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'sf-680-ceramic-finish',
    categorySlug: 'specialty-finishes',
    name: 'SF-680 Ceramic Finish',
    shortDescription: 'High-performance specialty finish for thermal and chemical stress.',
    overview:
      'SF-680 combines aesthetic precision with engineered resistance where both appearance and long-term durability are critical.',
    features: [
      'Superior color and gloss retention',
      'Enhanced resistance to process chemicals and UV exposure',
      'Fine-finish application with stable texture control',
    ],
    specifications: [
      { label: 'Finish', value: 'High Gloss / Custom Sheen' },
      { label: 'Volume Solids', value: '56% +/- 2%' },
      { label: 'Dry Film Thickness', value: '40-70 microns per coat' },
      { label: 'Touch Dry', value: '20-30 minutes at 25C' },
      { label: 'Recoat Window', value: '1-12 hours at 25C' },
    ],
    applications: ['Automotive components', 'Precision equipment housings', 'Architectural metal'],
    industries: ['Automotive', 'Manufacturing'],
    datasheetLabel: 'SF-680 Technical Datasheet (PDF)',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'hr-510-thermal-shield',
    categorySlug: 'heat-resistant-coatings',
    name: 'HR-510 Thermal Shield',
    shortDescription: 'Thermal-resistant coating designed for elevated temperature equipment.',
    overview:
      'HR-510 protects process assets exposed to repeated heat cycling while maintaining film integrity and adhesion performance.',
    features: [
      'Temperature resistance up to 510C intermittent service',
      'Stable adhesion under thermal cycling conditions',
      'Reduced degradation in high-heat industrial zones',
    ],
    specifications: [
      { label: 'Finish', value: 'Low Sheen' },
      { label: 'Volume Solids', value: '48% +/- 2%' },
      { label: 'Dry Film Thickness', value: '35-60 microns per coat' },
      { label: 'Touch Dry', value: '15-25 minutes at 25C' },
      { label: 'Recoat Window', value: '1-8 hours at 25C' },
    ],
    applications: ['Process lines', 'Exhaust ducts', 'Heat exchangers'],
    industries: ['Energy', 'Manufacturing'],
    datasheetLabel: 'HR-510 Technical Datasheet (PDF)',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  },
];
