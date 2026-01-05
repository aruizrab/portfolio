import { CommonModule } from '@angular/common';
import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PortfolioContentService } from './services/portfolio-content.service';
import { LanguageService } from './services/language.service';
import { LanguageCode } from './data/portfolio-data';
import { ThemeService } from './services/theme.service';

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
  private readonly themeService = inject(ThemeService);

  readonly year = new Date().getFullYear();
  readonly navigation = this.content.navigation;
  readonly hero = this.content.hero;
  readonly languageOptions = this.languageService.options;
  readonly currentLanguage = computed(() => {
    const code = this.languageService.language();
    return this.languageOptions.find((opt) => opt.code === code) ?? this.languageOptions[0];
  });
  readonly otherLanguages = computed(() => this.languageOptions.filter((opt) => opt.code !== this.currentLanguage().code));
  readonly languageMenuOpen = signal(false);
  readonly mobileMenuOpen = signal(false);
  readonly theme = this.themeService.theme;
  readonly themeToggleAriaLabel = computed(() => `Toggle theme (current: ${this.theme()})`);
  readonly themeToggleId = 'theme-toggle';

  toggleLanguageMenu(): void {
    this.languageMenuOpen.update((open) => !open);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  selectLanguage(code: LanguageCode): void {
    this.languageService.setLanguage(code);
    this.languageMenuOpen.set(false);
    this.closeMobileMenu();
  }

  setThemeFromToggle(checked: boolean): void {
    this.themeService.setTheme(checked ? 'dark' : 'light');
  }

  onThemeToggleChange(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    if (!target) {
      return;
    }

    this.setThemeFromToggle(target.checked);
  }

  @HostListener('document:click', ['$event'])
  closeOnOutsideClick(event: Event): void {
    const target = event.target as HTMLElement | null;

    // Close language menu if clicked outside
    if (this.languageMenuOpen() && !target?.closest('.language-switcher')) {
      this.languageMenuOpen.set(false);
    }

    // Close mobile menu if clicked outside (and not on the toggle button)
    if (this.mobileMenuOpen() && !target?.closest('.mobile-menu-toggle') && !target?.closest('.nav-wrapper')) {
      this.mobileMenuOpen.set(false);
    }
  }
}
