import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera} from 'ionic-native';
/*
  Generated class for the Add page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  public base64Image: string;

  constructor(public navCtrl: NavController) {}

  getPicture(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 200,
      targetHeight: 200
    }).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (error) => {
      console.log("error ",error)
    });
  }

}
