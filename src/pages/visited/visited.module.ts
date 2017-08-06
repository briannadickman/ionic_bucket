import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitedPage } from './visited';

@NgModule({
  declarations: [
    VisitedPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitedPage),
  ],
})
export class VisitedPageModule {}
