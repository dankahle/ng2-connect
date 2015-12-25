import {Component} from 'angular2/core';

@Component({
   selector: 'mycomp',
   template: `<div class="outer">
                  before<br>
                  <!--<ng-content></ng-content> // gets all divs -->
                  <ng-content select=".one, .three"></ng-content> <!-- gets the first and third -->
                  <br>after
              </div>`

})

export class MyComp {

}
