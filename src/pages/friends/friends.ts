import { Component } from '@angular/core';
import {Contacts} from 'ionic-native';

/*
  Generated class for the Friends page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html'
})
export class FriendsPage {

    contactsfound:any;

    constructor() {

        this.contactsfound = [];
        /* Uncomment this mock data to avoid device building on test
        let contacts:any = [{name:"Bob"},{name:"Bobby"},{name:"Charles"},{name:"Erik"},{name:"Amery"},{name:"Alhan"}];
        setTimeout(()=>{
          contacts.forEach( (c)=> {
            if (c.name) {
              this.contactsfound.push({name: c.name});
            }
          });
        },1000)*/


        Contacts.find(['*']).then((contacts) => {
          contacts.forEach( (c)=> {
            if (c.name.givenName && c.phoneNumbers) {
              this.contactsfound.push({name: c.name.givenName, phone: c.phoneNumbers[0].value}); // grab only the properties you need avoiding birthday (ios bug on date formating) http://stackoverflow.com/questions/36798316/ionic-cordova-contacts-plugin-returns-invalid-date-on-ios-after-upgrade-to-ionic
            }
          });
        },(error)=>{
            alert("error "+error)
        }).catch((error)=>{
          alert("catch"+error)
        })
      }

}
