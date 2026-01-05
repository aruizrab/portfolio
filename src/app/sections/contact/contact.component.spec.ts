import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { LanguageService } from '../../services/language.service';

describe('ContactComponent', () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactComponent],
            providers: [PortfolioContentService, LanguageService]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
