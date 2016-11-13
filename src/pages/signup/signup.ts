import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public viewCtrl: ViewController) {}

  close(){
    this.viewCtrl.dismiss();
  }

}
