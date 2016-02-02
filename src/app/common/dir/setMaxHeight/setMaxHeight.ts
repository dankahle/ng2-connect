import {Directive, ElementRef, Renderer, Inject} from 'angular2/core';

@Directive({
   selector: '[setMaxHeight]'
})
export class SetMaxHeight {
   constructor(elem:ElementRef, rend:Renderer, @Inject('GlobalNavHeight') globalNavHeight) {
      //console.log('elem', elem.nativeElement);
      //jq(elem.nativeElement).css('min-height', '' + (window.innerHeight - globalNavHeight) + 'px')
      rend.setElementStyle(elem, 'min-height', '' + (window.innerHeight - globalNavHeight) + 'px')
   }
}
