import { Component } from '@angular/core';
import { LandingComponent } from '../sections/landing/landing.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { EducationComponent } from '../sections/education/education.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [LandingComponent, ProjectsComponent, ExperienceComponent, EducationComponent, ContactComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent { }
