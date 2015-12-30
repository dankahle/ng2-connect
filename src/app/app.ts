/// <reference path="../../typings/tsd.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, EventEmitter, provide, Query, ViewChild} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink} from 'angular2/router';
import {Attr} from './dirs/attr';
import {Comp} from './comp/comp';
import {Serv} from './services/serv';


@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
      <div *ngFor="#item of [4,5,6]">
         <comp [idx]="item"></comp>
      </div>
  `,
   providers: [Serv],
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, Comp, Attr]
})
export class AppComponent {
   comp:Comp;

   @ViewChild(Comp) comp;
   constructor(private serv:Serv) {
   }

   ngAfterViewInit() {
      console.log( this.comp.idx);
   }
}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS,
   FORM_PROVIDERS, ROUTER_PROVIDERS]);










