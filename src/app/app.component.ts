import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Routes } from './app.routes';
import {Auth} from '../providers/auth';
import {Places} from '../providers/places';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [Places],
})
export class MyApp {
  rootPage: any;

  constructor( platform: Platform, private auth:Auth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ngOnInit() {
    this.rootPage = Routes.getRootPage(false);
  }
}
