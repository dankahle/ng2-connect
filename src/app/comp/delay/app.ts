import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Delay} from './comp/delay/delay';


@Component({
   selector: 'my-app',
   templateUrl: 'app/app.html',
   directives: [CORE_DIRECTIVES,FORM_DIRECTIVES, Delay]
})
class AppComponent {
   private index: number;
   parentDelay = 1000;
   doit(index) {
      this.index = index;
   }
}
bootstrap(AppComponent);
