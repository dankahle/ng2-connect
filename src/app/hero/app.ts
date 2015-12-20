/*
import {bootstrap, Component, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/core';
import {HeroService} from './hero/heroService';
import {Hero} from './hero/hero'
import {Http, HTTP_PROVIDERS} from 'angular2/http';


@Component({
   selector: 'my-app',
   templateUrl: 'app/app.html',
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
})

export class AppComponent {
   heroes:Hero[] = [];

   constructor(hs:HeroService) {

/!*
      var obs = {
         next(x) { console.log(x, 'lala')}, // gets called, but not onNext
         throw(x) { console.log('error', x)},
         return() { console.log('completed')},// never gets called
      }
*!/

/!*
      hs
         .getHeroes()
         .subscribe(x => {
            console.log(x)
            this.heroes.push(x)
         });
*!/
      hs
         .getHeroes()
         .subscribe(x => {
            //console.log(x.json())
            this.heroes = x.json()
         });

   }


}
bootstrap(AppComponent, [Http, HTTP_PROVIDERS, HeroService]);





*/
