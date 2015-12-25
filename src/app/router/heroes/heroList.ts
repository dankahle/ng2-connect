import {Component, Inject} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Hero} from './hero';
import {HeroDetail} from './heroDetail';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
   template: `
      <h5>hero list</h5>
      <div *ngFor="#hero of heroes">
         name: {{hero.name}} age: {{hero.age}} <a href="javascript:void(0)" (click)="goToDetail(hero.id)">detail</a>
      </div>
   `,
   directives: [NgFor, ROUTER_DIRECTIVES]
})
export class HeroList {
   heroes: Hero;

   constructor(@Inject('Heroes') heroes, private router:Router) {
      this.heroes = heroes;
   }

   goToDetail(id:number) {
      this.router.navigate(['HeroDetail', {id: id}]);
   }
}
