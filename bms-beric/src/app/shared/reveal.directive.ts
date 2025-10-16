import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @HostBinding('class.reveal') protected readonly revealClass = true;
  @HostBinding('class.reveal-visible') protected isVisible = false;

  private observer?: IntersectionObserver;
  private delayValue = 0;

  @Input()
  set appRevealDelay(value: number | string | undefined) {
    const numeric = Number(value);
    if (!Number.isNaN(numeric) && numeric >= 0) {
      this.delayValue = numeric;
      this.element.nativeElement.style.setProperty(
        '--reveal-delay',
        `${numeric}ms`
      );
    }
  }

  constructor(private readonly element: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: [0.2, 0.6],
      }
    );

    this.element.nativeElement.style.setProperty(
      '--reveal-delay',
      `${this.delayValue}ms`
    );
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
