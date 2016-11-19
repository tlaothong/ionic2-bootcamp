import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public items: any = [];

  constructor(public navCtrl: NavController, private http: Http) {
  }

  public ionViewDidEnter() {
    var url = 'http://simwebapi.azurewebsites.net/api/customers';
    this.http.get(url).subscribe(rsp => {
      this.items = rsp.json();
    });
  }

}
