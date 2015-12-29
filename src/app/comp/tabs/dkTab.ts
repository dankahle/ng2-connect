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
   parent: DkTabControl;
   selected = false;

/*
   constructor(tabControl:DkTabControl) {
      this.parent = tabControl;
      //this.parent.addTab(this);
   }
*/

   ngAfterContentChecked() {
      //console.log('child', this.parent.selectedTab);
   }
}

