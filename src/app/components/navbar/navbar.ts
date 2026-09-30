import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  menuOpen = false;
  activeSection = 'home';
  isScrolled = false;

  private sectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          this.activeSection = visibleSection.target.id;
        }
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.25, 0.6] }
    );

    document.querySelectorAll('main section[id]').forEach((section) => {
      this.sectionObserver?.observe(section);
    });
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 12;
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
