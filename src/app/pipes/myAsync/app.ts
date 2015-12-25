/*
import {bootstrap, Pipe, Component, CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {MyAsync} from './pipes/myAsync/myAsync';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
       <div (click)="doit()">val: {{obs | myAsync | json}}</div>{{url}}
   `,
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
   pipes: [MyAsync]
})

export class AppComponent {
   obs:any = null;

   constructor(private http: Http) {
      this.obs = http.get('app/pipes/getObject/users.json');
   }

}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS, FORM_PROVIDERS]);





*/
