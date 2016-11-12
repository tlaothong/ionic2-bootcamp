import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Page1Page } from '../page1/page1';

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

  public goPage1() {
    this.navCtrl.push(Page1Page, {});
  }

  public ShowName() {
    alert(this.firstName + ' ' + this.lastName);
  }

}
