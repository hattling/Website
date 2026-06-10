import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;
  private routerSubscription?: Subscription;

  sections: HTMLElement[] = [];
  currentSectionIndex = 0;

  ngOnInit(): void {
    this.seo.applyForUrl(this.router.url);
    this.routerSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.seo.applyForUrl(event.urlAfterRedirects);
        this.refreshSections();
      });
  }

  ngAfterViewInit(): void {
    this.refreshSections();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.routerSubscription?.unsubscribe();
  }

  scrollToSection(index: number): void {
    const section = this.sections[index];
    if (!section) return;
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollBySection(direction: -1 | 1): void {
    const nextIndex = Math.max(0, Math.min(this.sections.length - 1, this.currentSectionIndex + direction));
    this.scrollToSection(nextIndex);
  }

  private refreshSections(): void {
    if (typeof window === 'undefined') return;

    window.setTimeout(() => {
      this.observer?.disconnect();
      this.sections = Array.from(this.document.querySelectorAll<HTMLElement>('main > section'));
      this.currentSectionIndex = 0;

      if (!this.sections.length || typeof IntersectionObserver === 'undefined') return;

      this.zone.runOutsideAngular(() => {
        this.observer = new IntersectionObserver(
          (entries) => {
            const activeEntry = entries
              .filter((entry) => entry.isIntersecting)
              .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

            if (!activeEntry) return;

            const index = this.sections.indexOf(activeEntry.target as HTMLElement);
            if (index === -1 || index === this.currentSectionIndex) return;

            this.zone.run(() => {
              this.currentSectionIndex = index;
            });
          },
          { rootMargin: '-25% 0px -45% 0px', threshold: [0.2, 0.4, 0.6, 0.8] },
        );

        this.sections.forEach((section) => this.observer?.observe(section));
      });
    });
  }
}
