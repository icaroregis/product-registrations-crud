import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreen]',
})
export class RedDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#006337';
  }
}
