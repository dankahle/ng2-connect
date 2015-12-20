/*
import {bootstrap, Component, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {NgModelStatus} from './dirs/ngModelStatus/ngModelStatus';


@Component({
   selector: 'my-app',
   templateUrl: 'app/app.html',
   styles: [`
 .valid {color: blue;}
 .invalid {color: red;}
 `],
   outputs: ['fireChange'],
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, NgModelStatus]
})


export class AppComponent {
   prop = 'lala';
   self = this;
   fireChange = new EventEmitter();
   doit(val) {
      this.fireChange.next(val);
   }
}
bootstrap(AppComponent);


*/
