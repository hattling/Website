export type ApplicationType = 'Primer' | 'Road Safety' | 'Solvent' | 'Industrial Coating' | 'Decorative Industrial';
export type SurfaceType = 'Metal' | 'Concrete' | 'Road Surface' | 'Industrial Equipment' | 'Mixed';
export type IndustryType =
  | 'Construction'
  | 'Infrastructure'
  | 'Road Contractors'
  | 'Industrial Manufacturing'
  | 'Government Projects'
  | 'Distribution';

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
