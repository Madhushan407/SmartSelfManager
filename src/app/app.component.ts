import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  //
  public appPages =[
  {
    title: 'Home',
    url:'/main',
    icon: 'home',
    color: 'dark'
  },
  {
    title: 'Record Income',
    url: '/record-income',
    icon:'list',
    color:'primary'
  },
  {
    title: 'Daily Payments',
    url: '/daily-payments',
    icon:'today',
    color: 'secondary'
  },
  {
    title:'Special Payments',
    url: '/special-payments',
    icon:'calendar',
    color:'danger'
  },
  {
    title:'Dash Board',
    url: '/dashboard',
    icon:'analytics',
    color:'soft-grey'
  },
  {
    title:'',
    url: '',
    icon:'',
    color:''
  },
  {
    title:'Settings',
    url: '/settings',
    icon:'cog',
    color:'soft-grey'
  },


];
//



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
