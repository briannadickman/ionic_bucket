import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToVisitPage } from './to-visit';

@NgModule({
  declarations: [
    ToVisitPage,
  ],
  imports: [
    IonicPageModule.forChild(ToVisitPage),
  ],
})
export class ToVisitPageModule {}
