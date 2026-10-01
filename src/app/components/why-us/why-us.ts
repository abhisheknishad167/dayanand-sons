import { Component } from '@angular/core';
import { CountUpDirective } from '../../directives/count-up.directive';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CountUpDirective],
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
