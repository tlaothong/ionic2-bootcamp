import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: any = [];

  constructor(public navCtrl: NavController, private http: Http) {

  }

  public  ionViewDidEnter() {
    var url = 'https://raw.githubusercontent.com/tlaothong/ionic2-bootcamp/master/albums.json';
    this.http.get(url).subscribe(rsp => {
      this.items = rsp.json();
    });
    // this.http.post('http://sample.com/new-album.php?id=20', {
    //   first: 'John',
    //   last: 'Doe',
    //   birthDate: '2016-11-20'
    // }).subscribe(rsp => {

    // });
  }

}
