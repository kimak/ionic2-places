import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Endpoints} from './endpoints'
import {AuthHttp} from 'angular2-jwt';

/*
  Generated class for the Places provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Places {
  data: any;

  constructor(private authHttp: AuthHttp, private endpoints: Endpoints) {
    this.data = null;
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.authHttp.get(this.endpoints.getPlaces())
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getPlaceById(id){
    let selected = null
    this.data.map((place)=>{
        if(place.id==id) selected = place; return selected;
    })
    return selected
  }
}
