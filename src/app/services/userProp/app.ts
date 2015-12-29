/*
/// <reference path="../../typings/tsd.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, EventEmitter, provide, Query} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink} from 'angular2/router';
import {Attr} from './dirs/attr';
import {Comp} from './comp/comp';
import {UserProp} from './services/userProp/userProp';


@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
      <input [(ngModel)]="prop" (change)="getProp()"><br>
      <div>val: {{val}}</div>
  `,
   providers: [UserProp],
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, Comp, Attr]
})
export class AppComponent {
   prop:string;
   val:any;

   constructor(private userProp:UserProp) {
   }

   getProp() {
      this.userProp
         .getProp(this.prop)
         .subscribe(x => this.val = x);
   }
}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS,
   FORM_PROVIDERS, ROUTER_PROVIDERS]);










*/
