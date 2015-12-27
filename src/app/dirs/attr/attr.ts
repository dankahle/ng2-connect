import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
   selector: '[attr]',
   host: {

   },
   inputs: [],
   outputs: []
})
export class Attr {
   constructor(elem:ElementRef, rend:Renderer) {
      elem.nativeElement.hidden = true;
   }
}

