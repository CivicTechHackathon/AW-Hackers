import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddbinPage } from './addbin';

@NgModule({
  declarations: [
    AddbinPage,
  ],
  imports: [
    IonicPageModule.forChild(AddbinPage),
  ],
})
export class AddbinPageModule {}
