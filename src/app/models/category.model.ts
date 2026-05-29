export type ApplicationType = 'External' | 'Internal' | 'Heavy Duty';
export type SurfaceType = 'Steel' | 'Concrete' | 'Aluminum' | 'Mixed';
export type IndustryType = 'Automotive' | 'Marine' | 'Infrastructure' | 'Manufacturing' | 'Energy';

export type Category = {
  slug: string;
  title: string;
  description: string;
  image: string;
  application: ApplicationType;
  surface: SurfaceType;
  industry: IndustryType;
  longDescription: string;
  useCases: string[];
  highlights: string[];
};
