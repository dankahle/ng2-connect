/// <reference path="../../../../typings/tsd.d.ts" />

import {User} from './user';

export class UserServ {

   users = [
      {id: 1, name: 'dank', age: 50},
      {id: 2, name: 'carl', age: 60},
   ];

   getUsers() {
      return this.users;
   }

   getOne(id:number):User {
      return _.findWhere(this.users, {id: id});
   }
}
