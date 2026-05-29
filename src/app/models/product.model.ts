export type Product = {
  slug: string;
  categorySlug: string;
  name: string;
  shortDescription: string;
  overview: string;
  features: string[];
  specifications: Array<{ label: string; value: string }>;
  applications: string[];
  industries: string[];
  datasheetLabel: string;
  image: string;
};
