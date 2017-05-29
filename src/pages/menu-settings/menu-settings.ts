import { Component } from '@angular/core';
import { Menu, MenuController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-menu-settings',
  templateUrl: 'menu-settings.html'
})
export class MenuSettingsPage {

  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuSettingsPage');
  }

  ionViewDidEnter() {

    this.menuCtrl.enable(false, 'menu3');

    this.menuCtrl
      .enable(true, 'menu2')
      .open();

    /*this.menuCtrl.toggle('menu3')
      .then((opened: boolean) => {
        console.log('Abriu? ', opened);
        
      }).catch(err => console.log('Erro ao abrir menu3: ', err));*/
  }

  toggleMenu1Enable(): void {
    let isEnabled: boolean = this.menuCtrl.isEnabled('menu1');
    this.menuCtrl.enable(!isEnabled, 'menu1');
  }

  menuConfigs(): void {
    //console.log(this.menuCtrl.getMenus());

    let menus: Menu[] = this.menuCtrl.getMenus();

    menus.forEach((currentMenu: Menu, index: number, array: Menu[]) => {
      currentMenu.enable(false);
    });

    this.menuCtrl.get('menu3')
      .enable(true)
      .open()
      .then((opened: boolean) => {
        console.log('menu3 aberto?: ', opened);        
      });
    
  }

}
