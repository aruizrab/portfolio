import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogService } from './blog.service';

describe('BlogService', () => {
    let service: BlogService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BlogService]
        });
        service = TestBed.inject(BlogService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch posts', () => {
        const dummyPosts = [
            { slug: 'test', title: 'Test', description: 'Desc', date: '2023-01-01', tags: [] }
        ];

        service.getPosts().subscribe(posts => {
            expect(posts.length).toBe(1);
            expect(posts).toEqual(dummyPosts);
        });

        const req = httpMock.expectOne('assets/blog/index.json');
        expect(req.request.method).toBe('GET');
        req.flush(dummyPosts);
    });

    it('should fetch a single post', () => {
        const dummyPosts = [
            { slug: 'test', title: 'Test', description: 'Desc', date: '2023-01-01', tags: [] }
        ];
        const dummyContent = '---\ntitle: Test\n---\n# Hello World';

        service.getPost('test').subscribe(post => {
            expect(post.slug).toBe('test');
            expect(post.html).toContain('<h1>Hello World</h1>');
        });

        // First request for index
        const reqIndex = httpMock.expectOne('assets/blog/index.json');
        reqIndex.flush(dummyPosts);

        // Second request for content
        const reqContent = httpMock.expectOne('assets/blog/test.md');
        expect(reqContent.request.method).toBe('GET');
        reqContent.flush(dummyContent);
    });
});
