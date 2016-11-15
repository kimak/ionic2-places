import { Injectable, Pipe } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/toArray';
/*
  Generated class for the GroupBy pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'groupBy',
  pure: false,
})
@Injectable()
export class GroupBy {
  /*
    Takes a value and makes it lowercase.
   */
   transform(value: Array<any>, property: string="name") {

        let results = []
        Observable.from(value).groupBy(
          (item:any)=> { return item[property].substring(0,1); },
          (item:any)=> { return item })
          .flatMap(group => group.toArray())
          .subscribe((data)=>{
            results.push({value:data[0][property].substring(0,1),list:data});
          })
       return results;
    }
}
