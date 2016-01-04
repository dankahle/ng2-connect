import {Observable} from '../../../../node_modules/rxjs/rx';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Board} from '../../model/board';

export interface BoardGroup {
   groupName: string;
   boards: Board[];
}

@Injectable()
export class DashboardService {

   constructor(private http:Http) {

   }

   getAll():Observable<BoardGroup[]> {

      return new Observable(function(observer) {
         this.http.get('/src/app/dashboard/service/dashboards.json')
            .subscribe(x => {
               observer.next(x.json());
               observer.complete();
            })

      }.bind(this));
   }
}

