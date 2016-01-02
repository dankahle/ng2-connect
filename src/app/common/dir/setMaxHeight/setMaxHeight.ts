import {Directive, ElementRef, Renderer, Inject} from 'angular2/core';

@Directive({
   selector: '[setMaxHeight]'
})
export class SetMaxHeight {
   constructor(elem:ElementRef, rend:Renderer, @Inject('GlobalNavHeight') globalNavHeight) {
      rend.setElementStyle(elem, 'height', '' + (window.innerHeight - globalNavHeight) + 'px')
   }
}
