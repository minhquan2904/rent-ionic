import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenMapPage } from './open-map';

@NgModule({
  declarations: [
    OpenMapPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenMapPage),
  ],
})
export class OpenMapPageModule {}
