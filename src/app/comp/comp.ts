import {Component, Input, EventEmitter} from 'angular2/core';
import {Serv} from '../services/serv';

@Component({
   selector: 'comp',
   template: `
      <div>comp</div>
   `,
   viewProviders: [Serv],
   inputs: ['idx']
})
export class Comp {
   constructor(serv:Serv) {
   }

   idx:number;

}

