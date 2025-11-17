import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EDUCATION } from '../../data/portfolio-data';

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
    readonly schools = EDUCATION;
}
