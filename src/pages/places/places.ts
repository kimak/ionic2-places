import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Places} from '../../providers/places';

/*
  Generated class for the Places page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
  providers: [Places],
})
export class PlacesPage {

  items:any = []
  constructor(private nav: NavController, private places:Places) {
      this.places.load().then((data)=>{
        this.items = data;
      })
  }

}
