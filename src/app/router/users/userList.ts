import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {User} from './user';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {UserServ} from "./userServ";
import {UserDetail} from './userDetail';
@Component({
   template: `
      <div>users page</div>
      <div class="left">
         <div *ngFor="#user of users">
            name: {{user.name}} age: {{user.age}} <a [routerLink]="['UserDetail', {id: user.id}]">detail</a>
         </div>
      </div>
      <div class="right">
         <router-outlet></router-outlet>
      </div>
   `,
   styles: [`
      .left { width: 25%; float:left;}
      .right { width: 25%; float:left;}
   `],
   directives: [NgFor, ROUTER_DIRECTIVES]
})
@RouteConfig([
   {path: '/', name: 'UserList', component: UserList, useAsDefault: true},
   {path: '/:id', name: 'UserDetail', component: UserDetail},
])
export class UserList {
   users:User[];

   constructor(userServ:UserServ) {
      this.users = userServ.getUsers();
   }
}
