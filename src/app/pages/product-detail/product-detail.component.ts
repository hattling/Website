import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../../data/products.data';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly product = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    return PRODUCTS.find((item) => item.slug === slug) ?? null;
  });

  readonly relatedProducts = computed(() => {
    const current = this.product();
    if (!current) return [];
    return PRODUCTS.filter((item) => item.slug !== current.slug && item.categorySlug === current.categorySlug).slice(0, 3);
  });
}
