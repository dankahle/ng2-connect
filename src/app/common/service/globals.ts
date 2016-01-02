

import {App} from '../../app';
import {GlobalNav} from '../comp/globalNav/globalNav';

export class Globals {
   app: App;
   globalNav: GlobalNav;

   register(prop, val) {
      this[prop] = val;
   }
}
