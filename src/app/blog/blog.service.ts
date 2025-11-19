import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { marked } from 'marked';
import { Observable, map, shareReplay, switchMap, throwError } from 'rxjs';

export interface BlogPostSummary {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
}

export interface BlogPost extends BlogPostSummary {
    html: string;
}

@Injectable({ providedIn: 'root' })
export class BlogService {
    private posts$?: Observable<BlogPostSummary[]>;
    private readonly frontMatterPattern = /^---[\r\n]+[\s\S]*?[\r\n]+---[\r\n]*/;

    constructor(private http: HttpClient) { }

    getPosts(): Observable<BlogPostSummary[]> {
        if (!this.posts$) {
            this.posts$ = this.http
                .get<BlogPostSummary[]>('assets/blog/index.json', { headers: { 'cache-control': 'no-cache' } })
                .pipe(shareReplay(1));
        }

        return this.posts$;
    }

    getPost(slug: string): Observable<BlogPost> {
        return this.getPosts().pipe(
            map((posts) => posts.find((post) => post.slug === slug)),
            switchMap((post) => {
                if (!post) {
                    return throwError(() => new Error(`Post ${slug} not found`));
                }

                return this.http
                    .get(`assets/blog/${slug}.md`, { responseType: 'text' })
                    .pipe(
                        map((content) => ({
                            ...post,
                            html: marked.parse(this.stripFrontMatter(content)) as string
                        }))
                    );
            })
        );
    }

    private stripFrontMatter(markdown: string): string {
        if (!markdown.startsWith('---')) {
            return markdown;
        }

        return markdown.replace(this.frontMatterPattern, '').trimStart();
    }
}
