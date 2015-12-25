import {EventEmitter, Injectable} from 'angular2/core';
import {Hero} from './hero';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Injectable()
export class HeroService {

   constructor(public http: Http) {

   }

   getHeroes() {
      return this.http.get('app/hero/heroes.ts');
   }


/*
   getHeroes() {

      var ee = new EventEmitter().toRx();
      var heroes = [
         new Hero(1, 'dank'),
         new Hero(2, 'carl')
      ];
      //ee.next(5);

      setTimeout(function() {
         heroes.forEach(x => ee.next(x))
      },0)

      return ee;
   }
*/
}

