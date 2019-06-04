import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit, AfterViewInit {

  username: string;
  v: any;
  password: string;
  data: Observable<any>;
  constructor(public router: Router,
    private menu: MenuController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private base: BaseService) {
    //this.menu.enable(false);
    console.log('constructor');


  }

  ngAfterViewInit() {
    this.menu.enable(false);
    console.log('ngAfterViewInit');

  }

  ngOnInit() {
    console.log('init');

    /*  if (this.base.isEnabled) {
       this.menu.enable(false);
       this.base.isEnabled = false;
     } */
  }

  Show() {
    console.log('username: ' + this.username);
    console.log('password: ' + this.password);
  }
  connect() {
    this.Show();
    this.data = this.authService.getUser(this.username, this.password);
    this.data.subscribe(data => {
      if (data.$error === undefined) {
        const extra = { msg: data.$1.sessionId };

        // Register the session id
        this.authService.sessionID = data.$1.sessionId;

        this.router.navigateByUrl('/home', { state: extra });

        setTimeout(() => {
          this.menu.enable(true);
        }, 200);

      } else {
        this.presentAlert('Attention!!!', 'login ou mot de passe incorrecte');
      }

    });
  }

  ngDestroy() {
    console.log('destroyed');

    /*  if (this.base.isEnabled) {
       this.menu.enable(false);
       this.base.isEnabled = false;
     } */
  }

  async presentAlert(title: string, msg: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: '----',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }


}


