import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SignupPage } from '../pages/signup/signup';
import { UserService } from '../providers/user.service';

const firebaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBb8_-ubqd0BMHrFDA7lUR-GBKxDLBthaY",
    authDomain: "ionic2-firebase-chat-27459.firebaseapp.com",
    databaseURL: "https://ionic2-firebase-chat-27459.firebaseio.com",
    storageBucket: "ionic2-firebase-chat-27459.appspot.com"
    // messagingSenderId: "806135010123"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage
  ],
  imports: [
    HttpModule,
    AngularFireModule.initializeApp(firebaseAppConfig),
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService
  ]
})
export class AppModule {}
