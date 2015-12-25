import {Pipe} from 'angular2/core';
import {Http} from 'angular2/http';

@Pipe({
   name: 'getObject',
   pure: false // by setting to false, you state you want this updated on each binding
})
export class GetObject {
   rtn = {};
   _url = 'firstTime';

   constructor(private http: Http) {}

   doit (url) {
      this.http.get(url)
         .subscribe(x => this.rtn = x.json())
   }
   transform(url:string) {
      console.log('getjson')
      if(this._url != url) {
         console.log('score')
         this._url = url;
         setTimeout(this.doit.bind(this, url), 1000)
      }
      return this.rtn;
   }
}
