import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../services/portfolio-content.service';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    private readonly content = inject(PortfolioContentService);
    readonly experience = this.content.experience;
}
