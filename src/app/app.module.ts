import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PlacesPage } from '../pages/places/places';
import { AddPage } from '../pages/add/add';
import { AroundPage } from '../pages/around/around';
import { FriendsPage } from '../pages/friends/friends';
import { HeaderContentComponent } from '../components/header-content/header-content';

const app:Array<any>=[MyApp];
const pages:Array<any> = [
  HomePage,
  TabsPage,
  PlacesPage,
  AddPage,
  AroundPage,
  FriendsPage,
];
const components:Array<any> = [
  HeaderContentComponent,
];
const appIonicConfig = {
  mode: 'md',
  platforms: {
    ios: {
      tabsPlacement: 'top',
    }
  }
};

@NgModule({
  declarations: app.concat(pages).concat(components),
  imports: [
    IonicModule.forRoot(MyApp,appIonicConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: app.concat(pages),
  providers: []
})
export class AppModule {}
