import {Component} from 'angular2/core';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {LeftNav} from '../../../common/comp/leftNav/leftNav';
import {DashboardService, BoardGroup} from '../../service/dashboardService';
import {Board} from '../../../model/board';

@Component({
   templateUrl: 'app/dashboard/route/home/home.html',
   styleUrls: ['app/dashboard/route/home/home.css'],
   directives: [LeftNav, COMMON_DIRECTIVES]
})
export class Home {
   view = 'dashboard files';
   boardGroups:BoardGroup[] = [];

   constructor(private dashboardService:DashboardService) {
      this.refresh();
   }

   refresh() {
      this.dashboardService.getAll()
         .map(x => {
            x[0].groupName = 'profile';
            return x;
         })
         .subscribe(x => {
            this.boardGroups = x
         });
   }

}
