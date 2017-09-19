import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: 'body' })
export class HomeDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}