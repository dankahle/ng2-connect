/// <reference path="../../typings/tsd.d.ts" />
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
import {CrisisCenterComponent} from './routereg/crisis-center/crisis-center.component';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `

  `,
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class AppComponent {
   promise = new Promise((res, rej) => res(5));

   constructor() {
   }

   ngOnInit() {
      console.log(_.uniq([4,5,5,6]))
      this.promise.then(x => console.log(x))

   }
}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS,
   FORM_PROVIDERS, ROUTER_PROVIDERS, provide('Heroes', {useValue: heroes})]);








