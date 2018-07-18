import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OpenMapPage } from '../open-map/open-map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {
 
  }
  goToMyPage() {
    // go to the MyPage component
    this.navCtrl.push(OpenMapPage);
  }
  onInput($event){
    console.log($event);
  }
  onCancel($event){
    console.log($event);
  }
  
  
  
}
