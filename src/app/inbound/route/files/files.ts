import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
   encapsulation: ViewEncapsulation.Native,
   templateUrl: 'app/inbound/route/files/files.html'
})
export class Files {
   view = 'files';

   constructor() {

   }
}

