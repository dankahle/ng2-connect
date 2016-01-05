import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Location} from 'angular2/router';
import {Files} from './route/files/files';
import {Definitions} from './route/definitions/definitions';

@Component({
   templateUrl: 'app/inbound/inbound.html' ,
   styleUrls: ['app/inbound/inbound.css'],
   encapsulation: ViewEncapsulation.Native,
   directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
   {path: '/files', name: 'Files', component: Files, useAsDefault: true},
   {path: '/definitions', name: 'Definitions', component: Definitions},
])
export class Inbound {

   constructor(private loc:Location) {

   }
}

