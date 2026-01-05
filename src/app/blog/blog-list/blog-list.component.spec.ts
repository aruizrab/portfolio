import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogListComponent } from './blog-list.component';
import { BlogService } from '../blog.service';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { LanguageService } from '../../services/language.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogListComponent', () => {
    let component: BlogListComponent;
    let fixture: ComponentFixture<BlogListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BlogListComponent, HttpClientTestingModule, RouterTestingModule],
            providers: [BlogService, PortfolioContentService, LanguageService]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BlogListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
