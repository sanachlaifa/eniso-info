import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Profil',
      url: '/profil',
      icon: 'contact'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: 'calendar'
    },
    {
      title: 'Documents',
      url: '/documents',
      icon: 'document'
    },
    {
      title: 'Education',
      url: '/education',
      icon: 'book'
    },
    {
      title: 'Logout',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService,
    private menu: MenuController,
  ) {
    this.initializeApp();
    this.menu.enable(true);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logout() {
    console.log('logout!');
    if (this.authService.sessionID) {
      this.authService.logout().subscribe(data => {
        try {
          console.log(data['\$1']);
          this.router.navigateByUrl('/signin');
          this.menu.enable(false);
        } catch (error) {
          console.log(data['\error']);

        }

      });
    }
  }
}
