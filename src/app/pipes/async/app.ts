/*
import {bootstrap, Component, Pipe, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES, FORM_PROVIDERS} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {MyAsync} from './pipes/myAsync/myAsync';

@Component({
   selector: 'my-app',
   //templateUrl: 'app/app.html',
   template: `
       <div (click)="doit()">val: {{obs | async }}</div>{{url}}
   `,
   directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
   pipes: [MyAsync]
})

export class AppComponent {
   obs:any;

   constructor(private http: Http) {
      this.obs = new EventEmitter().toRx();
      setTimeout(() => this.obs.send(7), 1000);

      //this.obs = new Promise((res, rej) => {
      //   setTimeout(() => res(6), 1000);
      //});

      //this.obs = http.get('app/pipes/getObject/users.json')
      //            .map((x:any) => x.json())
   }

}

bootstrap(AppComponent, [Http, HTTP_PROVIDERS, FORM_PROVIDERS]);





*/
