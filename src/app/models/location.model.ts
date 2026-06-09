export type LocationPage = {
  slug: string;
  city: string;
  region: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  focusProducts: string[];
  targetCustomers: string[];
  localFaqs: Array<{ question: string; answer: string }>;
};
