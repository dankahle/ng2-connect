import {bootstrap, Component, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';


@Component({
   selector: 'my-app',
   templateUrl: 'app/app.html',
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
})

export class AppComponent {

}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS]);





