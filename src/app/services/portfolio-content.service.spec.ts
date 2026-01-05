import { TestBed } from '@angular/core/testing';
import { PortfolioContentService } from './portfolio-content.service';
import { LanguageService } from './language.service';

describe('PortfolioContentService', () => {
    let service: PortfolioContentService;
    let languageService: LanguageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PortfolioContentService);
        languageService = TestBed.inject(LanguageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should provide content based on current language', () => {
        languageService.setLanguage('en');
        // Trigger change detection or signal update if necessary, 
        // but computed signals should update automatically when accessed.
        expect(service.hero().name).toBe('Alex Ruiz');

        languageService.setLanguage('es');
        // Check if content updates. 
        // Note: In real app, signals update synchronously.
        expect(service.navigation().projects).toBe('Proyectos');
    });
});
