import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LanguageService } from './services/language.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
      providers: [provideAnimations()]
    }).compileComponents();

    const languageService = TestBed.inject(LanguageService);
    languageService.setLanguage('en');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero name as brand text', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.brand')?.textContent?.trim()).toBe('Alex Ruiz');
  });

  it('should include localized navigation links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = Array.from(compiled.querySelectorAll('nav a')).map((el) => el.textContent?.trim());
    expect(navLinks).toContain('Projects');
    expect(navLinks).toContain('Blog');
  });
});
