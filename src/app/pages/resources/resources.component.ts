import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss',
})
export class ResourcesComponent {
  readonly groups = [
    {
      title: 'Technical Datasheets',
      items: [
        'PX-900 Epoxy Barrier Datasheet',
        'MP-420 Zinc Primer Datasheet',
        'SF-680 Ceramic Finish Datasheet',
        'HR-510 Thermal Shield Datasheet',
      ],
    },
    {
      title: 'Safety Documents',
      items: [
        'General SDS - Protective Systems',
        'SDS - Solvent-Based Primers',
        'SDS - Specialty Finishes',
        'SDS - Heat-Resistant Series',
      ],
    },
    {
      title: 'Application Guides',
      items: [
        'Surface Preparation Guide',
        'Spray Parameters and Film Build Guide',
        'Curing and Recoat Timing Guide',
        'Inspection and Quality Control Checklist',
      ],
    },
    {
      title: 'Articles and Insights',
      items: [
        'Extending Coating Lifecycle in Harsh Environments',
        'Choosing the Right Primer-Topcoat Combination',
        'Thermal Resistance Selection for Process Equipment',
        'Reducing Maintenance Through Better Specification',
      ],
    },
  ];
}
