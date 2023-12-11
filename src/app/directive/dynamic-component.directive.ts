import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]',
  standalone: true
})
export class DynamicComponentDirective {

  public viewContainerRef = inject(ViewContainerRef);

}
