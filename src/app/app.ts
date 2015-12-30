/// <reference path="../../typings/tsd.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink} from 'angular2/router';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
      name: {{name}}
  `,
   directives: [COMMON_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class AppComponent {
   name = _.uniq([4,5,5,6]);

}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS, FORM_PROVIDERS, ROUTER_PROVIDERS]);










