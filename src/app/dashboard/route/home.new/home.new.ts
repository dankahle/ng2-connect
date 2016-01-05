import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
   templateUrl: 'app/dashboard/route/files.new/files.new.html',
   encapsulation: ViewEncapsulation.Native
})
export class HomeNew {
   view = 'dashboard files.new';

   constructor() {

   }

   routerOnActivate(a) {
      console.log("dash files.new")
   }

}

