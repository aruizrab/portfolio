import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, RevealOnScrollDirective],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
    private readonly content = inject(PortfolioContentService);
    readonly skills = this.content.skills;
}
