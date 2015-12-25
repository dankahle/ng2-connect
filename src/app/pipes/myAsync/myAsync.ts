import {Observable} from 'rxjs';
import {Pipe} from 'angular2/core';
import {Http} from 'angular2/http';

@Pipe({
   name: 'myAsync',
   pure: false // by setting to false, you state you want this updated on each binding
})
export class MyAsync {
   rtn:any = null;
   lastObs:any = undefined;

   constructor(private http: Http) {}

   transform(obs) {
      if(obs && this.lastObs !== obs) {
         this.lastObs = obs;
         if(obs.then) {
            obs.then((x:any) => this.rtn = x.json());
         }
         else if(obs.subscribe)  {
            obs.subscribe(x => this.rtn = x.json());
         }
      }
      return this.rtn;
   }
}
