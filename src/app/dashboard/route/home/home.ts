import {Component} from 'angular2/core';
import {LeftNav} from '../../../common/comp/leftNav/leftNav';

@Component({
   templateUrl: 'app/dashboard/route/home/home.html',
   styleUrls: ['app/dashboard/route/home/home.css'],
   directives: [LeftNav]
})
export class Home {
   view = 'dashboard files';

   constructor() {

   }

}
