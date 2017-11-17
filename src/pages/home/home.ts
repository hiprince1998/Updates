import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
result:any;

  constructor( private barcode:BarcodeScanner,private vibration:Vibration,public navCtrl: NavController) {

  }

  vibrate(){
    this.vibration.vibrate(5000);
  }

  stopVibrate(){
    this.vibration.vibrate(0)
  }

  scan(){
    this.barcode.scan().then(data=>{
this.result=data.text
    })
  }

}
