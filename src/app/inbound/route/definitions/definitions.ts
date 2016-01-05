import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
   encapsulation: ViewEncapsulation.Native,
   templateUrl: 'app/inbound/route/definitions/definitions.html'
})
export class Definitions {
   view = 'definitions';

   constructor() {

   }
}
