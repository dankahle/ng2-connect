import {Component} from 'angular2/core';
import {} from 'angular2/common';
import {DkTabControl} from './dkTabControl';

@Component({
   selector: 'dkTab',
   template: `
   <div class="tab-pane" [hidden]="!selected">
      <ng-content></ng-content>
   </div>
   `,
   inputs: ['name']
})
export class DkTab {
   name:string;
   //parent: DkTabControl;
   selected = false;

   //self-registering tabs. The parent is unavailable if it has a @Query in it, so it's
   // one way or another, user the parent's query to fill the tab arr or
   // don't use a query and then the child can call the parent.
/*
   constructor(tabControl:DkTabControl) {
      this.parent = tabControl;
      this.parent.addTab(this);
   }
*/

   ngAfterContentChecked() {
      //console.log('child', this.parent.selectedTab);
   }
}

