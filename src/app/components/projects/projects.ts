import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = [
    {
      image: 'images/dayanand-project-1.jpg',
      alt: 'Completed building in the Dayanand and Sons work profile',
      category: 'WORK PROFILE',
      tone: 'commercial',
      title: 'Built Environment',
      description: 'A building project presented in the Dayanand & Sons work profile.'
    },
    {
      image: 'images/dayanand-gallery-01.jpg',
      alt: 'Building under construction',
      category: 'CONSTRUCTION',
      tone: 'construction',
      title: 'Construction Progress',
      description: 'On-site construction work documented in the work profile.'
    },
    {
      image: 'images/dayanand-gallery-02.jpg',
      alt: 'Concrete structure under construction',
      category: 'STRUCTURAL',
      tone: 'structural',
      title: 'Structural Works',
      description: 'Structural construction and engineering in progress.'
    },
    {
      image: 'images/dayanand-project-2.jpg',
      alt: 'Residential building design',
      category: 'RESIDENTIAL',
      tone: 'residential',
      title: 'Residential Development',
      description: 'A residential building concept included in the work profile.'
    },
    {
      image: 'images/dayanand-gallery-03.jpg',
      alt: 'Active construction site',
      category: 'SITE WORK',
      tone: 'site-work',
      title: 'Site Development',
      description: 'Site preparation and construction activity.'
    },
    {
      image: 'images/dayanand-gallery-04.jpg',
      alt: 'Building construction in progress',
      category: 'CONSTRUCTION',
      tone: 'construction',
      title: 'Construction Progress',
      description: 'Building work captured during construction.'
    },
    {
      image: 'images/dayanand-gallery-05.jpg',
      alt: 'Modern residential building design',
      category: 'RESIDENTIAL',
      tone: 'residential',
      title: 'Residential Design',
      description: 'A residential design image from the work profile.'
    },
    {
      image: 'images/dayanand-gallery-06.jpg',
      alt: 'Concrete structural work',
      category: 'STRUCTURAL',
      tone: 'structural',
      title: 'Structural Works',
      description: 'Concrete and structural work on site.'
    },
    {
      image: 'images/dayanand-gallery-07.jpg',
      alt: 'Reinforced concrete slab construction',
      category: 'STRUCTURAL',
      tone: 'structural',
      title: 'Structural Works',
      description: 'Reinforced concrete construction documented on site.'
    },
    {
      image: 'images/dayanand-gallery-08.jpg',
      alt: 'Contemporary building design',
      category: 'DESIGN',
      tone: 'design',
      title: 'Building Design',
      description: 'A contemporary building concept from the work profile.'
    },
    {
      image: 'images/dayanand-gallery-09.jpg',
      alt: 'Construction site with excavation work',
      category: 'SITE WORK',
      tone: 'site-work',
      title: 'Site Development',
      description: 'Excavation and site work in progress.'
    },
    {
      image: 'images/dayanand-gallery-10.jpg',
      alt: 'Residential building concept',
      category: 'RESIDENTIAL',
      tone: 'residential',
      title: 'Residential Design',
      description: 'A residential building concept from the work profile.'
    },
    {
      image: 'images/dayanand-gallery-11.jpg',
      alt: 'Multi-storey residential building design',
      category: 'RESIDENTIAL',
      tone: 'residential',
      title: 'Residential Design',
      description: 'A multi-storey residential design image.'
    },
    {
      image: 'images/dayanand-gallery-12.jpg',
      alt: 'Construction excavation site',
      category: 'SITE WORK',
      tone: 'site-work',
      title: 'Site Development',
      description: 'Excavation and early-stage site development.'
    },
    {
      image: 'images/dayanand-project-3.jpg',
      alt: 'Reinforced slab construction',
      category: 'STRUCTURAL',
      tone: 'structural',
      title: 'Structural Works',
      description: 'Reinforced slab construction documented on site.'
    },
    {
      image: 'images/dayanand-project-4.jpg',
      alt: 'Modern residential building rendering',
      category: 'DESIGN',
      tone: 'design',
      title: 'Building Design',
      description: 'A modern building design included in the work profile.'
    }
  ];
}
