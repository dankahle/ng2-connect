import {Component, ViewEncapsulation} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
   selector: 'header',
   templateUrl: 'app/inbound/comp/header/inbound.html',
   encapsulation: ViewEncapsulation.Native,
   directives: [ROUTER_DIRECTIVES]
})
export class Header {

}
