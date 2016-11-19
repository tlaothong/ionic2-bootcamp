import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, Camera } from 'ionic-native';

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

  public barcode: any;
  public photo: "";

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello NativePage Page');
  }

  public takePhoto() {
    var options = {
        // Some common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        // sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        // allowEdit: true,
        correctOrientation: true  //Corrects Android orientation quirks
    };
    Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo = imageData;
    }, (err) => {
      // Handle error
      this.barcode = "Error: " + err;
    });
  }

  public scanBarcode() {

    BarcodeScanner.scan().then((barcodeData) => {
      this.barcode = barcodeData;
    }, (err) => {
      // An error occurred
      this.barcode = "Error: " + err;
    });

  }

}
