import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme-preference';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);

    private readonly themeSignal = signal<Theme>(this.loadInitialTheme());

    readonly theme = this.themeSignal.asReadonly();

    constructor() {
        effect(() => {
            if (!isPlatformBrowser(this.platformId)) {
                return;
            }

            this.document.documentElement.setAttribute('data-theme', this.themeSignal());
        });
    }

    toggleTheme(): void {
        const nextTheme: Theme = this.themeSignal() === 'light' ? 'dark' : 'light';
        this.setTheme(nextTheme);
    }

    setTheme(theme: Theme): void {
        this.themeSignal.set(theme);
        this.persist(theme);
    }

    private loadInitialTheme(): Theme {
        if (!isPlatformBrowser(this.platformId)) {
            return 'light';
        }

        const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }

        if (typeof window.matchMedia === 'function') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        return 'light';
    }

    private persist(value: Theme): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        window.localStorage.setItem(STORAGE_KEY, value);
    }
}
