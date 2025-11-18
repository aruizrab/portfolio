import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, RevealOnScrollDirective],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    private readonly content = inject(PortfolioContentService);
    readonly experience = this.content.experience;
}
