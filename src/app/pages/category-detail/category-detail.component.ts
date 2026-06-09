import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIES } from '../../data/categories.data';
import { PRODUCTS } from '../../data/products.data';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.scss',
})
export class CategoryDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly category = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    return CATEGORIES.find((item) => item.slug === slug) ?? null;
  });

  readonly relatedCategories = computed(() => {
    const current = this.category();
    if (!current) return [];
    return CATEGORIES.filter((item) => item.slug !== current.slug).slice(0, 3);
  });

  readonly categoryProducts = computed(() => {
    const current = this.category();
    if (!current) return [];
    return PRODUCTS.filter((item) => item.categorySlug === current.slug);
  });
}
