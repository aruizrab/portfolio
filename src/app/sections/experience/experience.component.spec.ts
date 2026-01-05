import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { LanguageService } from '../../services/language.service';

describe('ExperienceComponent', () => {
    let component: ExperienceComponent;
    let fixture: ComponentFixture<ExperienceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ExperienceComponent],
            providers: [PortfolioContentService, LanguageService]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ExperienceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
