/*
import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {CountClicks} from './dirs/countClicks/countClicks';
/// <reference path="types/lodash.d.ts" />

 interface CountPair{
 id: string,
 count: number
 }

@Component({
   selector: 'my-app',
   templateUrl: 'app/app.html',
   directives: [CORE_DIRECTIVES,FORM_DIRECTIVES, CountClicks]
})


class AppComponent {
   pairs: CountPair[] = [];
   addToSet(pair) {
      var item = _.findWhere(this.pairs, {id: pair.id});
      if(item)
         item.count = pair.count;
      else
         this.pairs.push(pair);
   }

}
bootstrap(AppComponent);
*/
