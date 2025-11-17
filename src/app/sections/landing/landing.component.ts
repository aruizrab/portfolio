import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HERO } from '../../data/portfolio-data';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})
export class LandingComponent {
    readonly hero = HERO;
    readonly focusAreas = ['Angular 17', 'TypeScript', 'Design Systems', 'DevRel', 'DX Tooling'];
}
