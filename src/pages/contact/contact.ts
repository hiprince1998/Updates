import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(private screenOrientation:ScreenOrientation,public navCtrl: NavController) {

this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);

  }

  currentOrientation(){

    alert(this.screenOrientation.type);
  }




}
