import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Home} from './route/home/home';
import {HomeNew} from './route/home.new/home.new';

@Component({
   template: '<router-outlet></router-outlet>',
   directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
   {path: '/', name: 'Dashboard', component: Home, useAsDefault: true},
   {path: '/new', name: 'Home.new', component: HomeNew},
])
export class Dashboard {

   constructor() {

   }
}

