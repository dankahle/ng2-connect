import {Component, Input, SimpleChange} from 'angular2/core';

@Component({
   selector: 'comp',
   template: '<div>comp{{myProp}}</div>',
   inputs: ['stuff']
})
export class Comp {
   @Input() myProp: any;
   ngOnChanges(changes: {[propName: string]: SimpleChange}) {
      console.log('ngOnChanges - myProp = ' + changes['myProp'].currentValue);
   }
}
