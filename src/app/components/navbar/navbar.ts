import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  activeSection = 'home';
  isScrolled = false;

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 12;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const navOffset = document.querySelector('.navbar')?.getBoundingClientRect().height ?? 0;
    const scrollPosition = window.scrollY + navOffset + 24;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));

    const currentSection = sections
      .filter((section) => section.offsetTop <= scrollPosition)
      .at(-1);

    if (currentSection) {
      this.activeSection = currentSection.id;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  selectSection(section: string): void {
    this.activeSection = section;
    this.closeMenu();
  }
}
