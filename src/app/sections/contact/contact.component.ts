import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, RevealOnScrollDirective],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    private readonly content = inject(PortfolioContentService);
    readonly contact = this.content.contact;
}
