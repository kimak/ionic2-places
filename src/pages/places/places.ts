import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Places page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-places',
  templateUrl: 'places.html'
})
export class PlacesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PlacesPage Page');
  }

}
