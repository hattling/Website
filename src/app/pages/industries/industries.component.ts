import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent {
  readonly industries = [
    {
      name: 'Automotive',
      description:
        'Coating systems for automotive structures and components requiring aesthetic precision, abrasion resistance, and long-term corrosion control.',
      applications: ['Chassis assemblies', 'Subframes and brackets', 'Underbody protection'],
    },
    {
      name: 'Marine',
      description:
        'High-durability coatings engineered for salt-rich, high-humidity environments where corrosion defense and lifecycle extension are critical.',
      applications: ['Hull and deck structures', 'Offshore support equipment', 'Port-side infrastructure'],
    },
    {
      name: 'Infrastructure',
      description:
        'Long-life protective systems for bridges, pipelines, and public assets exposed to weathering, pollutants, and high service demands.',
      applications: ['Bridge steel members', 'Civil steel fabrication', 'Utility and transport structures'],
    },
    {
      name: 'Manufacturing',
      description:
        'Process-compatible coatings that support production reliability, equipment longevity, and maintenance interval optimization.',
      applications: ['Process machinery frames', 'Factory enclosures', 'Handling and material systems'],
    },
    {
      name: 'Energy',
      description:
        'Performance coatings for power and process assets requiring thermal resilience, chemical resistance, and harsh-environment durability.',
      applications: ['Power generation assets', 'Storage terminals', 'Refining and process lines'],
    },
  ];
}
