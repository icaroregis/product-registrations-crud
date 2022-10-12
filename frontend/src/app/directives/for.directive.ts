import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myFor]',
})
export class ForDirective implements OnInit {
  /* Também podemos utilizar ao invés do OnInit o Onchange e toda vez que mudar também será mudado aqui no componente */
  @Input('myForEm') numbers!: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, { $implicit: number });
    }
  }
}
