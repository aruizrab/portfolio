import { Injectable, signal } from '@angular/core';
import { LanguageCode } from '../data/portfolio-data';

type BrowserWindow = typeof window;

export interface LanguageOption {
    code: LanguageCode;
    label: string;
    icon: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
    {
        code: 'en',
        label: 'English',
        icon: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg'
    },
    {
        code: 'es',
        label: 'Español',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
    },
    {
        code: 'de',
        label: 'Deutsch',
        icon: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'
    }
];

const STORAGE_KEY = 'portfolio-language';
const DEFAULT_LANGUAGE: LanguageCode = 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    private readonly langSignal = signal<LanguageCode>(this.loadInitial());

    readonly language = this.langSignal.asReadonly();
    readonly options = LANGUAGE_OPTIONS;

    setLanguage(code: LanguageCode): void {
        if (this.langSignal() === code) {
            return;
        }

        this.langSignal.set(code);
        this.persist(code);
    }

    private loadInitial(): LanguageCode {
        const win = this.safeWindow();
        if (!win) {
            return DEFAULT_LANGUAGE;
        }

        const stored = win.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
        if (stored && LANGUAGE_OPTIONS.some((opt) => opt.code === stored)) {
            return stored;
        }

        return DEFAULT_LANGUAGE;
    }

    private persist(code: LanguageCode): void {
        const win = this.safeWindow();
        if (!win) {
            return;
        }

        win.localStorage.setItem(STORAGE_KEY, code);
    }

    private safeWindow(): BrowserWindow | null {
        return typeof window === 'undefined' ? null : window;
    }
}
