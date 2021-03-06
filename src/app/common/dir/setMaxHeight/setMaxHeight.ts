import {Directive, ElementRef, Renderer, Inject} from 'angular2/core';

@Directive({
   selector: '[setMaxHeight]'
})
export class SetMaxHeight {
   constructor(elem:ElementRef, rend:Renderer, @Inject('GlobalNavHeight') globalNavHeight) {
      //jq(elem.nativeElement).css('min-height', '' + (window.innerHeight - globalNavHeight) + 'px')
      rend.setElementStyle(elem.nativeElement, 'min-height', '' + (window.innerHeight - globalNavHeight) + 'px')
   }
}
