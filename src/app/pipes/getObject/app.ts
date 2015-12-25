/*
import {bootstrap, Pipe, Component, CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {GetObject} from './pipes/getObject/getObject';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
       <div (click)="_url = 'app/pipes/getObject/users2.json'">val: {{url | getObject | json}}</div>{{url}}
   `,
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
   pipes: [GetObject]
})

export class AppComponent {
   _url = 'app/pipes/getObject/users.json';
   get url() {
      return this._url;
   }

}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS, FORM_PROVIDERS]);





*/
