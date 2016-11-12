import { Component } from '@angular/core';

import { IonicApp, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Routes } from '../../app/app.routes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  goLogin(){
    this.navCtrl.push(Routes.getPage(Routes.LOGIN));
  }

}
