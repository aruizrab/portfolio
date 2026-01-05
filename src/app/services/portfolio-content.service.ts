import { Injectable, computed, inject } from '@angular/core';
import { PORTFOLIO_CONTENT, PortfolioData } from '../data/portfolio-data';
import { LanguageService } from './language.service';

@Injectable({ providedIn: 'root' })
export class PortfolioContentService {
    private readonly language = inject(LanguageService);

    private readonly data = computed<PortfolioData>(() => {
        const code = this.language.language();
        return PORTFOLIO_CONTENT[code];
    });

    readonly navigation = computed(() => this.data().navigation);
    readonly hero = computed(() => this.data().hero);
    readonly projects = computed(() => this.data().projects);
    readonly experience = computed(() => this.data().experience);
    readonly education = computed(() => this.data().education);
    readonly skills = computed(() => this.data().skills);
    readonly contact = computed(() => this.data().contact);
    readonly blog = computed(() => this.data().blog);
}
