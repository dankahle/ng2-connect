/*
import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import  {MyModel} from './ng-model/mymodel';
import  {User} from './ng-model/user';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
         <my-model [(stuff)]="val"></my-model>val: {{val | json}}<br><br>

         <my-model [stuff]="val" (stuff-change)="val = $event"></my-model>val: {{val | json}}
   `,
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, MyModel],
})

export class AppComponent {
   val:User = {name: 'carl', age: 60};
}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS, FORM_PROVIDERS]);





*/
