import {Component, Input, EventEmitter} from 'angular2/core';

@Component({
   selector: 'comp',
   template: `
      <div>stuff: {{stuff}}</div>
      <button (click)="stuff = 'child'">child</button>
   `,
   inputs: ['stuff'],
   outputs: ['stuffChange']
})
export class Comp {
   _stuff: string;
   get stuff() {
      return this._stuff;
   }
   set stuff(val) {
      // you get some weird action here when child changes its value, must update parent which
      // then tries to update child again, other than that, seems to not change when
      // there is no change
      if(this._stuff !== val) {
         console.log('stuff', val)
         this._stuff = val;
         this.stuffChange.emit(val);
      }
   }
   stuffChange = new EventEmitter();

}

