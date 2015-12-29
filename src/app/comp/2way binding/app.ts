/*
/// <reference path="../../typings/tsd.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, EventEmitter, provide, Query} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink} from 'angular2/router';
import {Comp} from './comp/2way binding/comp';
import {Attr} from './dirs/attr';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
      <button (click)="name = 'parent'">parent</button> name: {{name}}<br>
      <!--<comp [stuff]="name" (stuffChange)="doit($event)"></comp>-->
      <comp [(stuff)]="name"></comp>

  `,
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, Comp, Attr]
})
export class AppComponent {
   name: string;

   constructor() {
   }

   doit(e) {
      this.name = e;
   }
}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS,
   FORM_PROVIDERS, ROUTER_PROVIDERS]);








*/
