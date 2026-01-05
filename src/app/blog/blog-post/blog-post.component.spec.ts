import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogPostComponent } from './blog-post.component';
import { BlogService } from '../blog.service';
import { PortfolioContentService } from '../../services/portfolio-content.service';
import { LanguageService } from '../../services/language.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BlogPostComponent', () => {
    let component: BlogPostComponent;
    let fixture: ComponentFixture<BlogPostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BlogPostComponent, HttpClientTestingModule, RouterTestingModule],
            providers: [
                BlogService,
                PortfolioContentService,
                LanguageService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of({ get: (key: string) => 'test-slug' })
                    }
                }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BlogPostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
