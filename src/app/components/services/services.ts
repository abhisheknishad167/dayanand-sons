import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  services = [
    {
      icon: 'apartment',
      title: 'Civil & Residential',
      description: 'Premium residential developments that prioritize structural longevity and timeless aesthetic appeal.',
      items: ['LUXURY TOWERS', 'HERITAGE RESTORATION', 'GATED COMMUNITIES']
    },
    {
      icon: 'business',
      title: 'Commercial',
      description: "High-performance corporate environments engineered for Pune's expanding IT and business hubs.",
      items: ['TECH PARKS', 'RETAIL COMPLEXES', 'HOTEL INFRASTRUCTURE']
    },
    {
      icon: 'factory',
      title: 'Industrial',
      description: 'Heavy-duty industrial facilities designed for the manufacturing giants of Chakan and Talegaon.',
      items: ['MANUFACTURING PLANTS', 'LOGISTICS HUBS', 'STEEL STRUCTURES']
    }
  ];
}
