import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Routes } from '../../app/app.routes';
import {Places} from '../../providers/places';
import {Map} from '../../components/map/map';

/*
  Generated class for the PlacePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'place.html',
})
export class PlacePage {

  @ViewChild(Map)
  private map: Map;

  selectedPlace:any;

  constructor(private nav: NavController, private params: NavParams, private places:Places) {
    const selectedId = params.data.id;
    this.selectedPlace = places.getPlaceById(selectedId)
  }

  ionViewDidEnter(){
    const pos = this.selectedPlace.position
    this.map.init(pos.lat, pos.long)
  }

  onClickBack(){
    this.nav.pop()
  }
}
