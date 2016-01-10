import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Home} from './route/home/home';
import {HomeNew} from './route/home.new/home.new';

@Component({
   template: '<router-outlet></router-outlet>',
   encapsulation: ViewEncapsulation.Native,
   directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
   {path: '/:id', name: 'Home', component: Home},
   {path: '/', name: 'Home', component: Home, useAsDefault: true},
   {path: '/new', name: 'HomeNew', component: HomeNew},
])
export class Dashboard {

   constructor() {

   }
}

