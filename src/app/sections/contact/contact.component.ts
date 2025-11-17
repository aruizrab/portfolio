import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CONTACT } from '../../data/portfolio-data';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    readonly contact = CONTACT;
}
