import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
   selector: '[attr]',
   host: {

   },
   inputs: ['color: attr'],
   outputs: []
})
export class Attr {

   constructor(private elem:ElementRef, private renderer:Renderer) {
      //elem.nativeElement.hidden = true;
   }

   set color(color) {
      this.renderer.setElementStyle(this.elem, 'color', color);
   }
}

