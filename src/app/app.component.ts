import { CommonModule } from '@angular/common';
import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PortfolioContentService } from './services/portfolio-content.service';
import { LanguageService } from './services/language.service';
import { LanguageCode } from './data/portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-8px) scale(0.96)' }),
        animate('150ms ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ]),
      transition(':leave', [
        animate('120ms ease-in', style({ opacity: 0, transform: 'translateY(-6px) scale(0.96)' }))
      ])
    ])
  ]
})
export class AppComponent {
  private readonly content = inject(PortfolioContentService);
  private readonly languageService = inject(LanguageService);

  readonly year = new Date().getFullYear();
  readonly navigation = this.content.navigation;
  readonly hero = this.content.hero;
  readonly languageOptions = this.languageService.options;
  readonly currentLanguage = computed(() => {
    const code = this.languageService.language();
    return this.languageOptions.find((opt) => opt.code === code) ?? this.languageOptions[0];
  });
  readonly otherLanguages = computed(() => this.languageOptions.filter((opt) => opt.code !== this.currentLanguage().code));
  readonly menuOpen = signal(false);

  toggleLanguageMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  selectLanguage(code: LanguageCode): void {
    this.languageService.setLanguage(code);
    this.menuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: Event): void {
    if (!this.menuOpen()) {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (target?.closest('.language-switcher')) {
      return;
    }

    this.menuOpen.set(false);
  }
}
