import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MapPage} from '../map/map'

/**
 * Generated class for the AddbinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addbin',
  templateUrl: 'addbin.html',
})
export class AddbinPage {
Areaname : string;
Binid: any;
key : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoLocation(){
    let data= {
      areaname:this.Areaname,
      binId:this.Binid,
      key : this.key
    }
    console.log(data)
    this.navCtrl.push(MapPage,data);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddbinPage');
  }

}
