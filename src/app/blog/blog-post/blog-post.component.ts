import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AsyncPipe } from '@angular/common';
import { catchError, map, of, switchMap } from 'rxjs';
import { BlogService } from '../blog.service';
import { PortfolioContentService } from '../../services/portfolio-content.service';

interface BlogViewModel {
    title: string;
    description: string;
    date: string;
    tags: string[];
    safeHtml: SafeHtml;
}

@Component({
    selector: 'app-blog-post',
    standalone: true,
    imports: [CommonModule, AsyncPipe, DatePipe, RouterLink],
    templateUrl: './blog-post.component.html',
    styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
    readonly post$ = this.route.paramMap.pipe(
        map((params) => params.get('slug') ?? ''),
        switchMap((slug) => this.blogService.getPost(slug)),
        map((post) => ({
            ...post,
            safeHtml: this.sanitizer.bypassSecurityTrustHtml(post.html)
        } as BlogViewModel)),
        catchError(() => of(null))
    );
    private readonly content = inject(PortfolioContentService);
    readonly blog = this.content.blog;

    constructor(
        private route: ActivatedRoute,
        private blogService: BlogService,
        private sanitizer: DomSanitizer
    ) { }
}
