import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the AddPlacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})

export class AddPlacePage {
  placeList: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.placeList = af.database.list('/places');
  }

  addPlace(name, address, phone, city) {
      this.placeList.push({
        name: name,
        address: address,
        phone: phone,
        city: city
      }).then( newPlace => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    }
  }
