import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Routes } from '../../app/app.routes';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  goTabs(){
    this.navCtrl.push(Routes.getPage(Routes.TABS));
  }

  openSignup(){
    let modal = this.modalCtrl.create(Routes.getPage(Routes.SIGNUP));
    modal.present();
  }

}
