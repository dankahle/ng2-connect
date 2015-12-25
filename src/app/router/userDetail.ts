/// <reference path="../../../typings/lodash.d.ts" />
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {UserServ} from './userServ';
import {User} from './user';

@Component({
   template: `
      <div>userdetail page</div>
      <div>name: {{user.name}}</div>
      <div>age: {{user.age}}</div>
   `,
})
export class UserDetail {
   user:User;
   users:User[];

   constructor(userServ:UserServ, routeParams:RouteParams) {
      this.user = _.findWhere(userServ.getUsers(), {id: parseInt(routeParams.get('id'))});
   }

}
