import {Component} from 'angular2/angular2';
//import {Greeter} from '../../greeter';

class Greeter {
   getGreeting() {
      return 'hi from greeting version';
   }
}

@Component({
   selector: 'greeting',
   template: '<div>{{greeting}}</div>',
   providers: [Greeter]
})

export class Greeting {
   greeting: string;
   constructor(greeter:Greeter) {
      this.greeting = greeter.getGreeting();
   }
}
