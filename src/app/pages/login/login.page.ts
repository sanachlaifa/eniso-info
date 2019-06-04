import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  v: any;
  password: string;
  data: Observable<any>;
  constructor(public router: Router,
    private menu: MenuController,
    public alertCtrl: AlertController,
    private http: HttpClient,
    private authService: AuthService) {
    this.menu.enable(false);

  }



  ngOnInit() {
  }

  Show() {
    console.log("username: " + this.username);
    console.log("password: " + this.password);
  }
  connect() {
    this.Show();
    const url = "http://eniso.info/ws/core/login/" + this.username + "?password="
      + this.password;
    this.data = this.http.get(url);

    this.data.subscribe(data => {
      if (data['\$error'] === undefined) {
        const extra = { msg: data['\$1'].sessionId };

        // Register the session id
        this.authService.sessionID = data['\$1'].sessionId;

        this.router.navigateByUrl('/home', { state: extra });
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


