import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Alex Developer - Portfolio'
    },
    {
        path: 'blog',
        component: BlogListComponent,
        title: 'Blog - Alex Developer'
    },
    {
        path: 'blog/:slug',
        component: BlogPostComponent,
        title: 'Blog Post - Alex Developer'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
