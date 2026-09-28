import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';
import { ProjectsComponent } from './components/projects/projects';
import { WhyUsComponent } from './components/why-us/why-us';
import { CtaComponent } from './components/cta/cta';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    ProjectsComponent,
    WhyUsComponent,
    CtaComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'dayanand-sons';
}
