import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AboutPage } from './../pages/about/about';
import { CustomHeaderComponent } from './../components/custom-header/custom-header.component';
import { MenuSettingsPage } from './../pages/menu-settings/menu-settings';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    AboutPage,
    CustomHeaderComponent,
    MenuSettingsPage,
    MyApp,
    HomePage
  ],
  imports: [
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
