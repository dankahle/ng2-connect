/*
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
import {Attr} from './dirs/attr/attr';
import {DkTabControl} from "./comp/tabs/dkTabControl";
import {DkTab} from "./comp/tabs/dkTab";

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
      <dkTabControl>
         <dkTab name="one">
            <p>one: para one</p>
            <p>one: para two</p>
         </dkTab>
         <dkTab name="two">
            <p>two: para one</p>
            <p>two: para two</p>
         </dkTab>
      </dkTabControl>

  `,
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, DkTabControl, DkTab]
})
export class AppComponent {
   constructor() {
   }

}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS,
   FORM_PROVIDERS, ROUTER_PROVIDERS, provide('Heroes', {useValue: heroes})]);








*/