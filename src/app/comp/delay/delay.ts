import {Component, EventEmitter} from 'angular2/angular2';


@Component({
   selector: 'delay',
   template: '<div>myd delay: {{delay}}</div>',
   inputs: ['delay', 'stuff'],
   outputs: ['fire']
})

export class Delay {
   private _delay: number;
   private index = 0;
   private lastint:any;
   private fire = new EventEmitter();

   get delay() {
      return this._delay;
   }

   set delay(val:number) {
      if(this.lastint)
         clearInterval(this.lastint);
      this._delay = val;
      this.lastint = setInterval(() => {
         this.fire.next(++this.index);
      }, val);
   }
}


