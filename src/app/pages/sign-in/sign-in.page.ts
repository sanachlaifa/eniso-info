import { Component, OnInit } from '@angular/core';
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
export class SignInPage implements OnInit {

  username: string;
  v: any;
  password: string;
  data: Observable<any>;
  constructor(public router: Router,
    private menu: MenuController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private base: BaseService) {


  }


  ngOnInit() {
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

        // Register the session id
        this.authService.sessionID = data.$1.sessionId;
        console.log(this.authService.sessionID);

        //console.log(data.$1);
        this.authService.user = data.$1;
        this.authService.getUserGrade();
        console.log(this.authService.user);
        console.log(this.authService.grade);

        this.router.navigateByUrl('/menu/home');
        setTimeout(() => {
          this.menu.enable(true);
        }, 200);

      } else {
        this.presentAlert('Attention!!!', 'login ou mot de passe incorrecte');
      }

    });
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


