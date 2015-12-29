import {Component, Query, QueryList} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {DkTab} from './dkTab';

@Component({
   selector: 'dkTabControl',
   template: `
         <ul class="nav nav-tabs">
            <li *ngFor="#tab of tabs" [class.active]="tab.selected"><a href="" (click)="selectTab($event, tab)">{{tab.name}}</a></li>
         </ul>
      <ng-content></ng-content>
   `,
   styles: [`
      .dk-tab { border:1px solid; margin-right: 20px; }
      .dk-tab.active { background: tan; }
      .dk-tab:hover { background: plum; }
   `],
   directives: [NgFor]
})
export class DkTabControl {
   tabs:QueryList<DkTab>;

   constructor(@Query(DkTab, {}) tabs: QueryList<DkTab>) {
      this.tabs = tabs// array is empty here
   }


   ngAfterContentInit() {
      //this.tabs = this.qlTabs.toArray();// array is full here, so can turn into an arr here
      this.selectTab(null, this.tabs.first);
   }

   // self-registering tabs, inject DkTabControl into DkTab constructor
/*
   addTab(tab:DkTab) {
      this.tabs.push(tab);
      if (this.tabs.length == 1)
         this.selectTab(tab);
   }
*/

   selectTab(e, tab) {
      this.tabs.toArray().forEach(x => x.selected = false);
      tab.selected = true;
      if(e)
         e.preventDefault();
   }
}


