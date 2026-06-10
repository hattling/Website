import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CATEGORIES } from '../../data/categories.data';
import { PRODUCTS } from '../../data/products.data';
import { ApplicationType, Category, IndustryType, SurfaceType } from '../../models/category.model';

@Component({
  selector: 'app-product-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-categories.component.html',
  styleUrl: './product-categories.component.scss',
})
export class ProductCategoriesComponent {
  readonly categories: Category[] = CATEGORIES;
  readonly products = PRODUCTS;
  readonly applications: ApplicationType[] = ['Primer', 'Road Safety', 'Industrial Coating'];
  readonly surfaces: SurfaceType[] = ['Metal', 'Concrete', 'Industrial Equipment', 'Mixed'];
  readonly industries: IndustryType[] = ['Construction', 'Infrastructure', 'Road Contractors', 'Industrial Manufacturing', 'Government Projects'];
  readonly sortOptions = ['Performance', 'Alphabetical', 'Newest'] as const;

  selectedApplication = 'All';
  selectedSurface = 'All';
  selectedIndustry = 'All';
  selectedSort: (typeof this.sortOptions)[number] = 'Performance';

  get visibleCategories(): Category[] {
    const filtered = this.categories.filter((item) => {
      const applicationMatch = this.selectedApplication === 'All' || item.application === this.selectedApplication;
      const surfaceMatch = this.selectedSurface === 'All' || item.surface === this.selectedSurface;
      const industryMatch = this.selectedIndustry === 'All' || item.industry === this.selectedIndustry;
      return applicationMatch && surfaceMatch && industryMatch;
    });

    if (this.selectedSort === 'Alphabetical') return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    if (this.selectedSort === 'Newest') return [...filtered].reverse();
    return filtered;
  }

  resetFilters(): void {
    this.selectedApplication = 'All';
    this.selectedSurface = 'All';
    this.selectedIndustry = 'All';
    this.selectedSort = 'Performance';
  }

  readonly trustedMetrics = [
    { label: 'Validated Systems', value: '120+' },
    { label: 'Industrial Clients', value: '300+' },
    { label: 'Average Lifecycle Gain', value: '28%' },
  ];
}
