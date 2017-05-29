import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { AboutPage } from './../pages/about/about';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit {

  @ViewChild(Nav) nav: Nav;
  pages: [{title: string, component: any}];
  rootPage = HomePage;

  constructor(
    public menuCtrl: MenuController,
    platform: Platform
  ) {

    this.pages = [
      {title: 'Home Page', component: HomePage},
      {title: 'About Page', component: AboutPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ngAfterViewInit() {
    this.menuCtrl.open('menu1');
  }

  openPage(page: {title: string, component: any}): void {
    this.nav.setRoot(page.component);
  }

  onOpen(): void {
    console.log('Menu opened!');    
  }

  onClose(): void {
    console.log('Menu closed!');    
  }

  onDrag(): void {
    console.log('Menu dragged!');    
  }

}
