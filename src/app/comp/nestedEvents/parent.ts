import {Component} from 'angular2/core';
import {Child} from './child';

@Component({
   selector: '[parent]',
   template: 'parent<br><child (click)="handler($event)"></child>',
   directives: [Child]
})

export class Parent {
   handler(v) {
      console.log('parent', v);
   }
}
