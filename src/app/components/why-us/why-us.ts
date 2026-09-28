import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss'
})
export class WhyUsComponent {
  features = [
    {
      icon: 'verified',
      title: 'Unwavering Reliability',
      description: 'Zero project abandonment in 25 years. We deliver as promised, regardless of complexity.'
    },
    {
      icon: 'high_quality',
      title: 'Premium Quality',
      description: "Sourcing only high-grade materials and employing the region's finest master craftsmen."
    },
    {
      icon: 'location_on',
      title: 'Local Expertise',
      description: "Deep understanding of Pune's terrain, climate, and regulatory framework."
    }
  ];

  stats = [
    { value: '12M+', label: 'Sq. Ft. Built' },
    { value: '200+', label: 'Global Clients' }
  ];
}
