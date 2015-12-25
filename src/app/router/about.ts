import {Component} from 'angular2/core';

@Component({
   template: `
      <div>about page</div>
   `,
})
export class About {
   onInit() {console.log('about')}

}
