import {Injectable, EventEmitter} from 'angular2/core';
import {Http} from 'angular2/http';
import {User} from './user';

@Injectable() // so you can inject constructor
export class UserProp {
   constructor(private http: Http) {

   }

   getProp(prop:string) {
      var ee = new EventEmitter();
      var obs = this.http.get('app/services/userProp/users.json')
         .subscribe(x => {
            ee.emit(x.json()[0][prop]);
         });
      return ee;
   }
}
