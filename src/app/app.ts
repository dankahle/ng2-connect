/// <reference path="../../typings/tsd.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component, Directive, provide, ViewEncapsulation} from 'angular2/core';
import {COMMON_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink, Location} from 'angular2/router';
import {GlobalNav} from "./common/comp/globalNav/globalNav";
import {Globals} from './common/service/globals';
import {ApplicationRef, enableProdMode} from "angular2/core";
import {Dashboard} from './dashboard/dashboard';
import {DashboardService} from './dashboard/service/dashboardService';
import {Inbound} from './inbound/inbound';

//enableProdMode();

@Component({
   selector: 'app',
   templateUrl: 'app/app.html',
   styleUrls: ['app/app.css'],
   encapsulation: ViewEncapsulation.Native,
   directives: [COMMON_DIRECTIVES, ROUTER_DIRECTIVES, GlobalNav]
})
@RouteConfig([
   {path: '/dashboard/...', name: 'Dashboard', component: Dashboard, useAsDefault: true},
   {path: '/inbound/...', name: 'Inbound', component: Inbound},
])
export class App {


   constructor(private globals:Globals) {
      globals.register('app', this);
   }


}

bootstrap(App, [Http, HTTP_PROVIDERS, FORM_PROVIDERS, ROUTER_PROVIDERS,
   Globals, Location, DashboardService,
   provide('GlobalNavHeight', {useValue: 50})]);











