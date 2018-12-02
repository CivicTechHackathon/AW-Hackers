import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddbinPage } from '../addbin/addbin'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
gotobin(){
  this.navCtrl.push(AddbinPage);
}
}
