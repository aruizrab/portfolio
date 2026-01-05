import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { LanguageService } from '../../services/language.service';

describe('EducationComponent', () => {
    let component: EducationComponent;
    let fixture: ComponentFixture<EducationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [EducationComponent],
            providers: [PortfolioContentService, LanguageService]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EducationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
