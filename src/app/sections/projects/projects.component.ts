import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, RevealOnScrollDirective],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    private readonly content = inject(PortfolioContentService);
    readonly projects = this.content.projects;
}
