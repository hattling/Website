import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly sanitizer = inject(DomSanitizer);

  form = {
    name: '',
    company: '',
    email: '',
    requirement: '',
  };

  get mapUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps?q=Actual%20Industrial%20Area%2C%20Uchat%20Rd%2C%20Mangathane%2C%20Maharashtra%20421312%2C%20India&z=15&output=embed',
    );
  }
}
