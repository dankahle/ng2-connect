/*
import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, EventEmitter, provide} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink} from 'angular2/router';
import {Landing} from './router/Landing';
import {UserDetail} from './router/users/UserDetail';
import {About} from './router/About';
import {UserView} from './router/users/userView';
import {HeroList} from './router/heroes/heroList';
import {HeroDetail} from './router/heroes/heroDetail';
import {Hero} from './router/heroes/hero';
import heroes from './router/heroes/heroes';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
   <h4>Routing app</h4>
   <div class="nav">
      <a [routerLink]="['Landing']">Home</a>
      <a [routerLink]="['UserView']">UserView</a>
      <a [routerLink]="['HeroList']">HeroList</a>
      <a [routerLink]="['About', {stuff: 'lala'}]">About</a>
   </div>
   <hr>
   <div class="view">
      <router-outlet></router-outlet>
   </div>
  `,
   styles: [`
         .nav a { border: 1px solid; padding-right: 20px; }
         .nav a:hover { background-color:plum !important; text-decoration:none; }
   `],
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
   {path: '/users/...', name: 'UserView', component: UserView},
   {path: '/hero', name: 'HeroList', component: HeroList},
   {path: '/hero/:id', name: 'HeroDetail', component: HeroDetail},
   {path: '/about', name: 'About', component: About},
   {path: '/', name: 'Landing', component: Landing, useAsDefault: true},
])
export class AppComponent {
   constructor() {
   }

}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS,
   FORM_PROVIDERS, ROUTER_PROVIDERS, provide('Heroes', {useValue: heroes})]);







*/
