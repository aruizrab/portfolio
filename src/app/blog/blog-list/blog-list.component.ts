import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { BlogService } from '../blog.service';
import { PortfolioContentService } from '../../services/portfolio-content.service';

@Component({
    selector: 'app-blog-list',
    standalone: true,
    imports: [CommonModule, RouterLink, AsyncPipe, DatePipe],
    templateUrl: './blog-list.component.html',
    styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
    readonly posts$ = this.blogService.getPosts();
    private readonly content = inject(PortfolioContentService);
    readonly blog = this.content.blog;

    constructor(private blogService: BlogService) { }
}
