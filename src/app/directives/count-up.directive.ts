import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input() appCountUp = '';

  private observer?: IntersectionObserver;
  private animationFrame?: number;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const match = this.appCountUp.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;

    const target = Number(match[1]);
    const suffix = match[2];
    const element = this.elementRef.nativeElement;
    const finish = () => { element.textContent = this.appCountUp; };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      finish();
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        this.observer?.disconnect();
        this.animate(target, suffix);
      }
    }, { threshold: 0.6 });

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.animationFrame !== undefined) cancelAnimationFrame(this.animationFrame);
  }

  private animate(target: number, suffix: string): void {
    const element = this.elementRef.nativeElement;
    const duration = 1400;
    const start = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      element.textContent = `${Math.round(target * easedProgress)}${suffix}`;

      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(update);
      } else {
        element.textContent = this.appCountUp;
      }
    };

    this.animationFrame = requestAnimationFrame(update);
  }
}
