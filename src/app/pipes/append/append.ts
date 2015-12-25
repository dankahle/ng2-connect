import {Pipe} from 'angular2/core';

@Pipe({
   name: 'append'
})
export class Append {
   transform(value:string, args:string[]) {
      return value + ' ' + args.join(' ');
   }
}
