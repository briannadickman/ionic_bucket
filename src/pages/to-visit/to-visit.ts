import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPlacePage } from '../pages/add-place/add-place';

/**
 * Generated class for the ToVisitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-to-visit',
  templateUrl: 'to-visit.html',
})

export class ToVisitPage {
  placeList: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.placeList = af.database.list('/places');
  }

  addPlace(){
    this.navCtrl.push(AddPlacePage);
  }

}
