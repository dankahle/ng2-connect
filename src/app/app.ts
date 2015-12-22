import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import  {Hero} from './hero-form/hero';
import  {HeroForm} from './hero-form/hero-form';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: '<hero-form></hero-form>',
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, HeroForm],
})

export class AppComponent {

}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS, FORM_PROVIDERS]);





