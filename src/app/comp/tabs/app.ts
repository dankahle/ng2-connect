/// <reference path="../../../../typings/tsd.d.ts" />
import {bootstrap} from 'angular2/platform/browser';
import {Component, Pipe, EventEmitter, provide} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouterLink} from 'angular2/router';
import {DkTabControl} from "../../comp/tabs/dkTabControl";
import {DkTab} from "../../comp/tabs/dkTab";

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
      <dkTabControl>
         <dkTab name="one">
            <br><p>tab one content</p>
         </dkTab>
         <dkTab name="two">
            <br><p>tab two content</p>
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
   FORM_PROVIDERS, ROUTER_PROVIDERS]);








