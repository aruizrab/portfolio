import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Directive({
    selector: '[appRevealOnScroll]',
    standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
    @Input('appRevealOnScroll')
    set order(value: number | string | null) {
        if (value === null || value === undefined || value === '') {
            this.revealOrder = 0;
            return;
        }
        const parsed = Number(value);
        this.revealOrder = Number.isFinite(parsed) ? parsed : 0;
    }

    private revealOrder = 0;
    private observer?: IntersectionObserver;
    private readonly element = inject(ElementRef<HTMLElement>);
    private readonly platformId = inject(PLATFORM_ID);

    ngAfterViewInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        const nativeElement = this.element.nativeElement;
        nativeElement.classList.add('reveal');
        nativeElement.style.setProperty('--reveal-order', this.revealOrder.toString());

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal--visible');
                        this.observer?.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
        );

        this.observer.observe(nativeElement);
    }

    ngOnDestroy(): void {
        this.observer?.disconnect();
    }
}
