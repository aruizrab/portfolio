import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevealOnScrollDirective } from './reveal-on-scroll.directive';

@Component({
    template: `<div [appRevealOnScroll]="1">Test</div>`,
    standalone: true,
    imports: [RevealOnScrollDirective]
})
class TestComponent { }

describe('RevealOnScrollDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestComponent, RevealOnScrollDirective]
        });
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    it('should create an instance', () => {
        // Directive is created by the fixture
        const div = fixture.nativeElement.querySelector('div');
        expect(div).toBeTruthy();
    });

    it('should add reveal class', () => {
        fixture.detectChanges();
        const div = fixture.nativeElement.querySelector('div');
        expect(div.classList.contains('reveal')).toBeTrue();
    });

    it('should set reveal order style', () => {
        fixture.detectChanges();
        const div = fixture.nativeElement.querySelector('div');
        expect(div.style.getPropertyValue('--reveal-order')).toBe('1');
    });
});
