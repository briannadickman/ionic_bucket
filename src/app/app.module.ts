import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ToVisitPage } from '../pages/to-visit/to-visit';
import { VisitedPage } from '../pages/visited/visited';
import { AddPlacePage } from '../pages/add-place/add-place';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ToVisitPage,
    VisitedPage,
    AddPlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ToVisitPage,
    VisitedPage,
    AddPlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}

export const firebaseConfig = {
  apiKey: "AIzaSyCm5Ws_wq4jLJxAcgs2_2JV--Q5XHvHcOE",
  authDomain: "bucket-ionic-and-firebase.firebaseapp.com",
  databaseURL: "https://bucket-ionic-and-firebase.firebaseio.com/",
  storageBucket: "gs://bucket-ionic-and-firebase.appspot.com",
  messagingSenderId: "609067141823"
};
