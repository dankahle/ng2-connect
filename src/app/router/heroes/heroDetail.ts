/// <reference path="../../../../typings/tsd.d.ts" />
import {Component, Inject} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from './hero';

@Component({
   template: `
      <h5>Hero Detail &nbsp;&nbsp;<a href="javascript:history.go(-1)">back</a></h5>
      <div>name: {{hero.name}}</div>
      <div>age: {{hero.age}}</div>
   `,
})
export class HeroDetail {
   hero:any;

   constructor(@Inject('Heroes') heroes, routeParams:RouteParams) {
      this.hero =  _.findWhere(heroes, {id: parseInt(routeParams.get('id'))});
   }

}
