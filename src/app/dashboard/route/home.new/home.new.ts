import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
   templateUrl: 'app/dashboard/route/home.new/home.new.html',
   encapsulation: ViewEncapsulation.Native
})
export class HomeNew {
   view = 'dashboard.new';

   constructor() {

   }

   routerOnActivate(a) {
   }

}

