import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';
import { Menu } from '../components/menu/menu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Menu
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page
  ],
  providers: []
})
export class AppModule {}
