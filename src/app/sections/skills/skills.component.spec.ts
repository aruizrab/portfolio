import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { LanguageService } from '../../services/language.service';

describe('SkillsComponent', () => {
    let component: SkillsComponent;
    let fixture: ComponentFixture<SkillsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SkillsComponent],
            providers: [PortfolioContentService, LanguageService]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SkillsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
