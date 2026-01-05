import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
    let service: LanguageService;

    beforeEach(() => {
        // Clear local storage BEFORE creating the service to ensure clean state
        localStorage.clear();
        TestBed.configureTestingModule({});
        service = TestBed.inject(LanguageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have default language as en', () => {
        expect(service.language()).toBe('en');
    });

    it('should update language', () => {
        service.setLanguage('es');
        expect(service.language()).toBe('es');
    });

    it('should persist language to localStorage', () => {
        const spy = spyOn(localStorage, 'setItem');
        service.setLanguage('de');
        expect(spy).toHaveBeenCalledWith('portfolio-language', 'de');
    });
});
