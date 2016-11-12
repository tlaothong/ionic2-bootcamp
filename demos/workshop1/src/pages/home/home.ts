import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public firstName = "John";
  public lastName = "Doe";
  public isMale = true;
  public imageUrl = "http://ionicframework.com/present-ionic/slides/img/me.png";

  constructor(public navCtrl: NavController) {
  }

  public ShowName() {
    alert(this.firstName + ' ' + this.lastName);
  }

}
