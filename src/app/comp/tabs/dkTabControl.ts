import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {DkTab} from './dkTab';


@Component({
   selector: 'dkTabControl',
   template: `
      <div>selectedTab: {{selectedTab?.name}}</div>
      <a class="dk-tab" *ngFor="#tab of tabs" (click)="selectTab(tab)"
      [class.selected]="tab.selected">
      {{tab.name}}
      </a>
      <ng-content></ng-content>
   `,
   styles: [`
      .dk-tab { border:1px solid; margin-right: 20px; }
      .dk-tab.selected { background: tan; }
      .dk-tab:hover { background: plum; }
   `],
   directives: [NgFor]
})
export class DkTabControl {
   tabs: DkTab[] = [];
   selectedTab: DkTab;

   addTab(tab:DkTab) {
      this.tabs.push(tab);
      if(this.tabs.length == 1)
         this.selectTab(tab);
   }

   selectTab(tab) {
      this.tabs.forEach(x => x.selected = false);
      tab.selected = true;
   }

}
