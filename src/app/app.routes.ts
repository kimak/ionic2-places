import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {TabsPage} from '../pages/tabs/tabs';
import {AddPage} from '../pages/add/add';
import {FriendsPage} from '../pages/friends/friends';
import {AroundPage} from '../pages/around/around';
import {PlacesPage} from '../pages/places/places';
import {SignupPage} from '../pages/signup/signup';

export class Routes {

  static HOME:string="home";
  static LOGIN:string="login";
  static TABS:string="tabs";
  static ADD:string="add";
  static PLACES:string="places";
  static AROUND:string="around";
  static FRIENDS:string="friends";
  static SIGNUP:string="signup";

  static pages = {
    [Routes.LOGIN]: LoginPage,
    [Routes.HOME]: HomePage,
    [Routes.TABS]: TabsPage,
    [Routes.ADD]: AddPage,
    [Routes.PLACES]: PlacesPage,
    [Routes.AROUND]: AroundPage,
    [Routes.FRIENDS]: FriendsPage,
    [Routes.SIGNUP]: SignupPage,
  };

  static getPage(id){
    const route = Routes.pages[id];
    return route;
  }

  static getRootPage(){
    let root = Routes.getPage(Routes.HOME);
    return root;
  }

  static getPages(){
    const pages = []
    for (var key in Routes.pages) {
      pages.push(Routes.pages[key]);
    }
    return pages;
  }

  static getDeepLinkerConfig(){
    const config = {links:[]}
    for (var key in Routes.pages) {
      config.links.push({ component: Routes.pages[key], name: key});
    }
    return config;
  }
}
