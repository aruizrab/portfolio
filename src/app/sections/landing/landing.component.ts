import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [CommonModule, RouterLink, RevealOnScrollDirective],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})
export class LandingComponent {
    private readonly content = inject(PortfolioContentService);
    readonly hero = this.content.hero;
}
