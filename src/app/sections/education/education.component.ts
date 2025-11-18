import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../services/portfolio-content.service';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
    private readonly content = inject(PortfolioContentService);
    readonly education = this.content.education;
}
