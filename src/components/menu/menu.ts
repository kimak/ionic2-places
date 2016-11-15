import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Menu component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class Menu {

  constructor(public navCtrl: NavController) {

  }
  openPage(page) {
    this.navCtrl.push(page);
  }

}
