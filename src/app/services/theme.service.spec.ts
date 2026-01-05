import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { DOCUMENT } from '@angular/common';

describe('ThemeService', () => {
    let service: ThemeService;
    let document: Document;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ThemeService);
        document = TestBed.inject(DOCUMENT);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should toggle theme', () => {
        service.setTheme('light');
        service.toggleTheme();
        expect(service.theme()).toBe('dark');
        service.toggleTheme();
        expect(service.theme()).toBe('light');
    });

    it('should set theme attribute on document element', () => {
        service.setTheme('dark');
        // Effect might run asynchronously or need flush in tests, 
        // but usually TestBed.flushEffects() or fixture.detectChanges() is needed for components.
        // For services with effects, we might need to wait or check if it runs.
        // However, since we are in a browser-like environment (JSDOM via Karma/Jest), 
        // the effect should run.
        TestBed.flushEffects();
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });
});
