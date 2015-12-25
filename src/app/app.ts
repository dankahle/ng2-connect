import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink} from 'angular2/router';
import {Landing} from './router/Landing';
import {UserDetail} from './router/UserDetail';
import {About} from './router/About';
import {UserList} from './router/userList';
import {UserServ} from './router/userServ';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
   <a [routerLink]="['UserList']">UserList</a>
   <a [routerLink]="['About']">About</a>
   <router-outlet></router-outlet>
  `,
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
   {path: '/users', name: 'UserList', component: UserList},
   {path: '/users/:id', name: 'UserDetail', component: UserDetail},
   {path: '/about', name: 'About', component: About},
   {path: '/', name: 'Landing', component: Landing, useAsDefault: true},
])
export class AppComponent {
   constructor() {
   }

}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS, FORM_PROVIDERS, ROUTER_PROVIDERS, UserServ]);






