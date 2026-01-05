import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        title: 'Portfolio'
    },
    {
        path: 'blog',
        loadComponent: () => import('./blog/blog-list/blog-list.component').then(m => m.BlogListComponent),
        title: 'Blog'
    },
    {
        path: 'blog/:slug',
        loadComponent: () => import('./blog/blog-post/blog-post.component').then(m => m.BlogPostComponent),
        title: 'Blog Post'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
