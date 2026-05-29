import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
  {
    slug: 'protective-coatings',
    title: 'Protective Coatings',
    description: 'Corrosion-resistant systems for steel, concrete, and high-wear environments.',
    image: 'https://images.unsplash.com/photo-1581092786450-7ef25f140997?auto=format&fit=crop&w=1200&q=80',
    application: 'Heavy Duty',
    surface: 'Steel',
    industry: 'Infrastructure',
    longDescription:
      'Protective coating systems engineered for severe environments requiring long-term resistance against corrosion, abrasion, and moisture ingress.',
    useCases: ['Bridges and structural steel', 'Pipelines and storage vessels', 'Heavy equipment frames'],
    highlights: ['High film build tolerance', 'Excellent adhesion profile', 'Extended maintenance cycle'],
  },
  {
    slug: 'industrial-primers',
    title: 'Industrial Primers',
    description: 'High-adhesion primers engineered for durability and substrate compatibility.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
    application: 'External',
    surface: 'Mixed',
    industry: 'Manufacturing',
    longDescription:
      'Industrial primers designed to optimize topcoat performance while ensuring reliable bonding across varied substrate conditions.',
    useCases: ['Fabricated metal parts', 'Production line components', 'Heavy machinery housings'],
    highlights: ['Fast recoat windows', 'Improved substrate wetting', 'Reliable cross-system compatibility'],
  },
  {
    slug: 'specialty-finishes',
    title: 'Specialty Finishes',
    description: 'Performance finishes balancing visual precision with environmental resistance.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
    application: 'Internal',
    surface: 'Aluminum',
    industry: 'Automotive',
    longDescription:
      'Specialty finish systems combining premium appearance with engineered resistance to UV, chemicals, and process wear.',
    useCases: ['Automotive trim and structures', 'Precision fabricated assemblies', 'Architectural metal elements'],
    highlights: ['Color consistency controls', 'UV and gloss retention', 'Fine texture management'],
  },
  {
    slug: 'powder-coatings',
    title: 'Powder Coatings',
    description: 'Efficient, low-emission coating systems with consistent film build and protection.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
    application: 'External',
    surface: 'Steel',
    industry: 'Energy',
    longDescription:
      'High-efficiency powder coating families that deliver environmental compliance, process consistency, and long-term protection.',
    useCases: ['Equipment enclosures', 'Racking and support structures', 'Industrial hardware'],
    highlights: ['Low VOC profile', 'Uniform coverage', 'Production-friendly cure options'],
  },
  {
    slug: 'anti-corrosion-systems',
    title: 'Anti-Corrosion Systems',
    description: 'Multi-layer protection designed for marine and high-humidity installations.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    application: 'Heavy Duty',
    surface: 'Steel',
    industry: 'Marine',
    longDescription:
      'Layered anti-corrosion solutions built for chloride-rich, wet, and cyclic weather conditions requiring dependable barrier performance.',
    useCases: ['Marine hull and deck structures', 'Offshore support assets', 'Coastal industrial plants'],
    highlights: ['Salt spray endurance', 'Cathodic support options', 'High humidity stability'],
  },
  {
    slug: 'heat-resistant-coatings',
    title: 'Heat-Resistant Coatings',
    description: 'Thermal-stable formulations for process lines and elevated temperature zones.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    application: 'Heavy Duty',
    surface: 'Mixed',
    industry: 'Energy',
    longDescription:
      'Thermal-resistant systems engineered to maintain coating integrity, color, and protection under elevated process temperatures.',
    useCases: ['Exhaust and heat exchanger surfaces', 'Process piping', 'Power generation equipment'],
    highlights: ['High-temperature retention', 'Thermal cycling resistance', 'Reduced coating breakdown'],
  },
];
