import { AffichePage } from './../affiche/affiche';
import { Component, NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@NgModule()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
 
  username :string ;
  v : any;
  password : String;
  data : Observable<any>;
  constructor(public navCtrl: NavController , public http: HttpClient , public alertCtrl: AlertController) {

  }

  Show(){
      console.log("username: " +this.username);
      console.log("password: " +this.password);
  }
  connect(){
    this.Show();
    var url = "http://eniso.info/ws/core/login/"+this.username+"?password="
    +this.password;
    this.data = this.http.get(url);
    this.data.subscribe(data =>{
      if(data['\$error']===undefined){
        
          this.navCtrl.push('plzgo', {
            msg : data['\$1'].sessionId
          });
      }else{
        const alert = this.alertCtrl.create({
          title: 'Attention!!!',
          subTitle: 'login ou mot de passe incorrecte',
          buttons: ['OK']
        });
        alert.present();
      }
      
    });
  }
   


}