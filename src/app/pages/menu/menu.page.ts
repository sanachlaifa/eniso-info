import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';
import { Router, RouterEvent } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  appPages = [
    {
      title: 'Profil',
      url: '/menu/profil',
      icon: 'contact'
    },
    {
      title: 'Home',
      url: '/menu/home',
      icon: 'home'
    },
    {
      title: 'Calendar',
      url: '/menu/calendar',
      icon: 'calendar'
    },
    {
      title: 'Documents',
      url: '/menu/documents',
      icon: 'document'
    },
    {
      title: 'Education',
      url: '/menu/education',
      icon: 'book'
    }

  ];
  selectedPath = '';
  constructor(private authService: AuthService, private menuCtr: MenuController, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
        BaseService.currentUrl = this.selectedPath;
      }

    });
  }

  ngOnInit() {
  }
  logout() {
    this.authService.logout().subscribe(msg => {
      try {
        console.log(msg['\$1']);
        this.menuCtr.enable(false);
        this.router.navigateByUrl('signin');
      } catch (error) {

      }

    });
  }
}
