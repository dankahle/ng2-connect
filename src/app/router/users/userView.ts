import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {UserList} from './userList';
import {UserDetail} from './userDetail';
@Component({
   template: `
         <h3>User View</h3>
         <router-outlet></router-outlet>
      </div>
   `,
   styles: [`
      .left { width: 25%; float:left;}
      .right { width: 25%; float:left;}
   `],
   directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
   {path: '/', name: 'UserView', component: UserList, useAsDefault: true},
   {path: '/', name: 'UserList', component: UserList},
   {path: '/:id', name: 'UserDetail', component: UserDetail},
])
export class UserView {

}
