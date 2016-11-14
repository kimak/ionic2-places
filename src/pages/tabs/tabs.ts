import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PlacesPage } from '../places/places';
import { AddPage } from '../add/add';
import { AroundPage } from '../around/around';
import { FriendsPage } from '../friends/friends';
import { Routes } from '../../app/app.routes';
import {Auth} from '../../providers/auth';

/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = PlacesPage;
  tab2Root: any = AddPage;
  tab3Root: any = AroundPage;
  tab4Root: any = FriendsPage;

  email:string;

  constructor(public navCtrl: NavController, private auth:Auth) {
     this.email = (auth.user) ? auth.user.email : null
  }

  logout(){
    this.auth.logout();
    this.navCtrl.setRoot(Routes.getRootPage(false));
  }

}
