import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public actors = [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "nationality": "USA",
      "occupation": "N/A",
      "healthScore": 90,
      "mentalScore": 95,
      "iqScore": 180,
      "eqScore": 150
    },
    {
      "id": 2,
      "firstName": "James",
      "lastName": "Bond",
      "nationality": "UK",
      "occupation": "Classified",
      "healthScore": 95,
      "mentalScore": 85,
      "iqScore": 170,
      "eqScore": 170
    },
    {
      "id": 3,
      "firstName": "Ethan",
      "lastName": "Hunt",
      "nationality": "USA",
      "occupation": "Classified",
      "healthScore": 95,
      "mentalScore": 90,
      "iqScore": 180,
      "eqScore": 160
    },
    {
      "id": 4,
      "firstName": "Jason",
      "lastName": "Bond",
      "nationality": "USA",
      "occupation": "Secret Agent",
      "healthScore": 97,
      "mentalScore": 90,
      "iqScore": 175,
      "eqScore": 160
    },
    {
      "id": 5,
      "firstName": "Peter",
      "lastName": "Parker",
      "nationality": "USA",
      "occupation": "Photographer",
      "healthScore": 99,
      "mentalScore": 80,
      "iqScore": 175,
      "eqScore": 170
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
