import {Component, Query, QueryList} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {DkTab} from './dkTab';

@Component({
   selector: 'dkTabControl',
   template: `
         <ul class="nav nav-tabs">
            <li *ngFor="#tab of tabs" [class.active]="tab === selectedTab"><a href="" (click)="selectTab($event, tab)">{{tab.name}}</a></li>
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
   qlTabs:QueryList<DkTab>;
   tabs: DkTab[] = [];
   selectedTab:DkTab;

   constructor(@Query(DkTab, {}) tabs: QueryList<DkTab>) {
      this.qlTabs = tabs;
   }

   ngAfterContentInit() {
      console.log('init')
      this.tabs = this.qlTabs.toArray();
      this.selectTab(null, this.tabs[0]);
   }
   // self-registering tabs, should be able to use Query, but doesn't work right now
/*
   addTab(tab:DkTab) {
      this.tabs.push(tab);
      if (this.tabs.length == 1)
         this.selectTab(tab);
   }
*/

   selectTab(e, tab) {
      this.tabs.forEach(x => x.selected = false);
      this.selectedTab = tab;
      tab.selected = true;
      if(e)
         e.preventDefault();
   }

}


