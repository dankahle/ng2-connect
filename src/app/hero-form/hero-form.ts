import {Component} from 'angular2/core';
import {NgForm, FORM_DIRECTIVES, CORE_DIRECTIVES, FORM_PROVIDERS} from 'angular2/common';
import {Hero} from './hero';

@Component({
   selector: 'hero-form',
   templateUrl: 'app/hero-form/hero-form.html',
   styleUrls: ['app/hero-form/styles.css'],
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, NgForm],
   providers: [FORM_PROVIDERS]
})
export class HeroForm {
   powers = ['Really Smart', 'Super Flexible',
      'Super Hot', 'Weather Changer'];

   model = new Hero(18, 'Dr IQ', "", 'Chuck Overstreet');
   submitted = false;

   onSubmit() {
      this.submitted = true;
   }

   // TODO: Remove this when we're done
   get diagnostic() {
      return JSON.stringify(this.model);
   }
}
