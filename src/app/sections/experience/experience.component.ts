import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/portfolio-data';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    readonly history = EXPERIENCE;
}
