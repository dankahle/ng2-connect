// bitches about app.fireChange not being there if left uncommented
/*
import {Directive, NgModel} from 'angular2/angular2';
import {AppComponent} from '../../app';

// this sets valid/invalid classes on host based on ngModel.valid
@Directive({
   selector: '[ng-model]',
   host: {
      '[class.valid]': 'valid',
      '[class.invalid]': 'invalid',
      role: 'button',
      '[title]': '"lala2"'
   },
   inputs: ['parent']
})
export class NgModelStatus {
   _parent: AppComponent;
   constructor(public control:NgModel) {
   }
   get valid() { return this.control.valid; }
   get invalid() { return !this.control.valid; }
   set parent(val) {
      this._parent = val;
      this._parent.fireChange.toRx().subscribe((cval) => {
         console.log('pchange', cval)
      })
   }
}

*/
