import {Component, EventEmitter} from 'angular2/angular2';

@Component({
   selector: 'child',
   template: '<div (click)="doit()">child</div>',
   outputs: ['cout']
})

export class Child {
   cout = new EventEmitter();
   doit() {
      this.cout.next('five');
   }
}
