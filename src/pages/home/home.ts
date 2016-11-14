import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slidesOptions:Object={
    pager:true,
  };

  constructor(public navCtrl: NavController) {

  }

  goTabs(){
    this.navCtrl.push(TabsPage)
  }

}
