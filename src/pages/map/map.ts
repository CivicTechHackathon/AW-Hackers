import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  coordinates:any = {latitude :24.9295746 ,longitude:67.1129567};
  setbin:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams)
  }
  drag(map){
console.log(map)
this.setbin = {
  lat: map.coords.lat,
  lng:map.coords.lng
}
console.log(this.setbin);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  
  }
  
  

}
