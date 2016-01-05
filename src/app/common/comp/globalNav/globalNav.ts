import {Component, ApplicationRef, ViewEncapsulation} from 'angular2/core';
import {Globals} from '../../service/globals';
import {RouterLink, Location} from 'angular2/router';

@Component({
   selector: 'globalNav',
   templateUrl: 'app/common/comp/globalNav/globalNav.html',
   styleUrls: ['app/common/comp/globalNav/globalNav.css'],
   encapsulation: ViewEncapsulation.Native,
   directives: [RouterLink]
})

export class GlobalNav {
   _title: string;

   constructor(private globals:Globals, private loc:Location) {
      globals.register('globalNav', this);
   }

   get title() {
      let path = this.loc.path();
      if(path.indexOf('/dashboard') === 0)
         return 'dashboard';
      else if(path.indexOf('/inbound') === 0)
         return 'inbound';
   }

}


