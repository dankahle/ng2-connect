import {Input, Output, Component, EventEmitter} from 'angular2/core';
import {User} from './user';

@Component({
   selector: 'my-model',
   template: `
      <div (click)="doit()">my-model: {{stuff.name + stuff.age}}</div>
   `,
   inputs: ['stuff'],
   outputs: ['stuffChange']
})
export class MyModel {
   stuff: User;
   stuffChange = new EventEmitter();
   doit() {
      this.stuffChange.next(new User('dank', 50));
   }
}
