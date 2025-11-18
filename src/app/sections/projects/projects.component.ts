import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../services/portfolio-content.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    private readonly content = inject(PortfolioContentService);
    readonly projects = this.content.projects;
}
