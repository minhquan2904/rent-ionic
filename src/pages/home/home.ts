import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import { OpenMapPage } from '../open-map/open-map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showList: Boolean = false;
  public listLocationEx: Array<any> = ['Su pham ky thuat', 'ktx D1', 'ktx d2', 'lang dai hoc', 'Suoi tien', 'CoopMark', 'Vincom']
  public listResults: Array<any> = [];
  constructor(public navCtrl: NavController) {
 
  }
  goToMyPage() {
    // go to the MyPage component
    this.navCtrl.push(OpenMapPage);
  }
  onInput(ev){
    console.log(this.showList)
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.showList = true;
      this.listResults = this.listLocationEx.filter((item) => {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    } else {
      this.showList = false;
    }
  }
  onCancel($event){
    this.showList = false;
  }
  
  
  
}
