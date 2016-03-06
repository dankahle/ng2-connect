import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {LeftNav} from '../../../common/comp/leftNav/leftNav';
import {DashboardService, BoardGroup} from '../../service/dashboardService';
import {Board} from '../../../model/board';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
   templateUrl: 'app/dashboard/route/home/home.html',
   styleUrls: ['app/dashboard/route/home/home.css'],
   directives: [LeftNav, COMMON_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class Home {
   view:string;
   boardGroups:BoardGroup[] = [];
   hideGroup:boolean[] = [false, true];

   constructor(private dashboardService:DashboardService, private router:Router, private routeParams:RouteParams) {
      this.view = 'dashboard/:id=' + routeParams.get('id');
      this.refresh();
   }

   setDefault(defBoard) {
      this.boardGroups.forEach(group => {
         group.boards.forEach(board => {
            board.default = false;
         })
      })
      defBoard.default = true;
   }

   refresh() {
      this.dashboardService.getAll()
         .subscribe(boardGroups => {
            boardGroups[0].groupName = 'profile';
            this.boardGroups = boardGroups;

            if(boardGroups[0].boards.length === 0)
               this.router.navigate(['../HomeNew']);

            if(!this.routeParams.get('id'))
               this.router.navigate(['../Home', {id: boardGroups[0].boards[0].id}]);

         });
   }


}
