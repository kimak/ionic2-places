import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Around page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-around',
  templateUrl: 'around.html'
})
export class AroundPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AroundPage Page');
  }

}
