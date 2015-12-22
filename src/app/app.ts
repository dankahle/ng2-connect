import {bootstrap, ElementRef, Component, CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
       <div>lala</div>
   `,
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
})

export class AppComponent {

constructor(elem: ElementRef) {
   var a = elem.nativeElement;
   console.log('constaints test?', a.classList.contains('test'));
   a.classList.add('one');
   a.classList.toggle("two");
}

}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS, FORM_PROVIDERS]);





