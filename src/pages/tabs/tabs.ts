import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';
import { Tab3Page } from '../tab3/tab3';

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

  tab1Root: any = Tab1Page ;
  tab2Root: any = Tab2Page ;
  tab3Root: any = Tab3Page ;

  constructor(public navCtrl: NavController) {

  }

}
