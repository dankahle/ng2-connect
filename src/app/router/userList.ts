import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {User} from './user';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {UserServ} from "./userServ";

@Component({
   template: `
      <div>users page</div>
      <div *ngFor="#user of users">
         name: {{user.name}} age: {{user.age}} <a [routerLink]="['UserDetail', {id: user.id}]">edit</a>
      </div>
   `,
   directives: [NgFor, ROUTER_DIRECTIVES]
})
export class UserList {
   users:User[];

   constructor(userServ:UserServ) {
      this.users = userServ.getUsers();
   }
}
