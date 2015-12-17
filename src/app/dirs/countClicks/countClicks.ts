import {Directive, EventEmitter} from 'angular2/angular2';

@Directive({
   selector: 'button[count-clicks]',
   host: {
      '(click)': 'onClick($event)'
   },
   outputs: ['bclick']

})

export class CountClicks {
   clicks = 0;
   bclick = new EventEmitter();
   onClick(e) {
      this.bclick.next({id: e.target.id, count: ++this.clicks});
   }
}
