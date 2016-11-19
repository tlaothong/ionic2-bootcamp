import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Native page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-native',
  templateUrl: 'native.html'
})
export class NativePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello NativePage Page');
  }

}
