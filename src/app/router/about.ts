import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
   template: `
      <div>about page</div>
   `,
})
export class About {

   constructor(routeParams:RouteParams) {
      console.log(routeParams.get('stuff'));
   }

   onInit() {console.log('about')}



}
