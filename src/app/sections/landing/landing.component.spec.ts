import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingComponent } from './landing.component';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { LanguageService } from '../../services/language.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingComponent', () => {
    let component: LandingComponent;
    let fixture: ComponentFixture<LandingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LandingComponent, RouterTestingModule],
            providers: [PortfolioContentService, LanguageService]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display hero name', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Alex Ruiz');
    });
});
