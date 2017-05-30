import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AboutPage } from './../pages/about/about';
import { CustomHeaderComponent } from './../components/custom-header/custom-header.component';
import { MenuSettingsPage } from './../pages/menu-settings/menu-settings';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule, FirebaseAppConfig} from 'angularfire2';

const firebaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBb8_-ubqd0BMHrFDA7lUR-GBKxDLBthaY",
    authDomain: "ionic2-firebase-chat-27459.firebaseapp.com",
    databaseURL: "https://ionic2-firebase-chat-27459.firebaseio.com",
    storageBucket: "ionic2-firebase-chat-27459.appspot.com",
    messagingSenderId: "806135010123"
};

@NgModule({
  declarations: [
    AboutPage,
    CustomHeaderComponent,
    MenuSettingsPage,
    MyApp,
    HomePage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseAppConfig),
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          menuType: 'reveal'
        },
        android: {
          menuType: 'overlay'
        },
        windows: {
          menuType: 'push'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AboutPage,
    MenuSettingsPage,
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
