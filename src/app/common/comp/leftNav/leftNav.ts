/// <reference path="../../../../../typings/jquery/jquery.d.ts" />
import {Component, ApplicationRef, EventEmitter, ElementRef, Renderer, ViewEncapsulation} from 'angular2/core';
import {Animation} from '../../../../../node_modules/angular2/src/animate/animation';
import {CssAnimationOptions} from '../../../../../node_modules/angular2/src/animate/css_animation_options';
import {BrowserDetails} from '../../../../../node_modules/angular2/src/animate/browser_details';
import {SetMaxHeight} from '../../../common/dir/setMaxHeight/setMaxHeight';

@Component({
   selector: 'leftNav',
   templateUrl: 'app/common/comp/leftNav/leftNav.html',
   styleUrls: ['app/common/comp/leftNav/leftNav.css'],
   inputs: ['width', 'slide'],
   outputs: ['opened', 'closed'],
   //encapsulation: ViewEncapsulation.Native,
   host: {

   },
   directives: [SetMaxHeight]
})
export class LeftNav {
   open = false;
   opened = new EventEmitter<LeftNav>();
   closed = new EventEmitter<LeftNav>();
   leftNav:HTMLElement;
   $leftNav:JQuery;

   set width(width) {
      this.$leftNav.outerWidth(width);
   }

   set slide (slide) {
      if(!slide)
         this.$leftNav.css('transition', 'none');
   }

   constructor(public elem:ElementRef, private rend:Renderer) {
      this.leftNav = jq(this.elem.nativeElement).find('.left-nav')[0];
      this.$leftNav = jq(this.leftNav);
   }

   fopen() {
      var options = new CssAnimationOptions();
      options.classesToAdd = ['open'];
      let anim = new Animation(this.leftNav, options, new BrowserDetails());
      anim.onComplete(() => {
         this.opened.emit(this);
         this.open = true;
      })
   }

   fclose() {
      var options = new CssAnimationOptions();
      options.classesToRemove = ['open'];
      let anim = new Animation(this.leftNav, options, new BrowserDetails());
      anim.onComplete(() => {
         this.closed.emit(this);
         this.open = false;
      })
   }
}

