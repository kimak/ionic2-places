import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlacesPage } from '../pages/places/places';
import { AddPage } from '../pages/add/add';
import { AroundPage } from '../pages/around/around';
import { FriendsPage } from '../pages/friends/friends';

const pages = [
  HomePage,
  TabsPage,
  PlacesPage,
  AddPage,
  AroundPage,
  FriendsPage,
];

@NgModule({
  declarations: pages,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: []
})
export class AppModule {}
