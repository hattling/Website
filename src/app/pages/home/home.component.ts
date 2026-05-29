import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CATEGORIES } from '../../data/categories.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly categories = CATEGORIES.slice(0, 4);
  parallaxOffset = 0;
  parallaxContentOffset = 0;
  parallaxGlowOffset = 0;

  readonly benefits = [
    { title: 'Extreme Durability', detail: 'Built to withstand abrasion, impact, and prolonged mechanical stress.' },
    { title: 'Chemical Resistance', detail: 'Formulations designed to perform in aggressive chemical environments.' },
    { title: 'Precision Formulation', detail: 'Engineered batch consistency with strict tolerance and quality control.' },
    { title: 'Custom Performance', detail: 'Tailored coating systems aligned to substrate, climate, and lifecycle goals.' },
  ];

  readonly industries = [
    { name: 'Automotive', summary: 'High-performance protective layers for components and structural assemblies.' },
    { name: 'Marine', summary: 'Corrosion defense for hulls, offshore platforms, and salt-exposed assets.' },
    { name: 'Infrastructure', summary: 'Long-life coatings for bridges, pipelines, and civil structures.' },
    { name: 'Manufacturing', summary: 'Reliable surface systems for heavy equipment and production lines.' },
    { name: 'Energy', summary: 'Protective chemistry for power plants, storage terminals, and field assets.' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollY = window.scrollY || 0;
    this.parallaxOffset = Math.min(scrollY * 0.28, 180);
    this.parallaxContentOffset = Math.min(scrollY * 0.12, 65);
    this.parallaxGlowOffset = Math.min(scrollY * 0.4, 240);
  }
}
