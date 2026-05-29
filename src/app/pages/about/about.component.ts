import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly storyPoints = [
    'Founded to solve high-failure coating environments with engineering-first formulation.',
    'Scaled from custom industrial batches to multi-sector production systems.',
    'Built around repeatability, process discipline, and long-term client performance.',
  ];

  readonly whatWeDo = [
    'Protective and anti-corrosion systems',
    'Industrial primers and specialty finishes',
    'Heat-resistant and process-specific coatings',
    'Custom formulation for unique operating environments',
  ];

  readonly approach = [
    { title: 'Precision Formulation', detail: 'Controlled chemistry and tight batch consistency across production cycles.' },
    { title: 'Testing and Validation', detail: 'Performance is verified under chemical, thermal, and mechanical stress scenarios.' },
    { title: 'Quality Control', detail: 'Process checkpoints ensure substrate compatibility, curing accuracy, and field reliability.' },
  ];

  readonly reasons = [
    'Reliable performance in demanding environments',
    'Consistent quality across projects and production scale',
    'Flexible customization for unique industrial requirements',
    'Technical support from specification through application',
  ];
}
