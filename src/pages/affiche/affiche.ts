import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicPageModule } from 'ionic-angular';
import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the AffichePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@NgModule({
  declarations: [
    AffichePage
  ],
  imports:[
    IonicPageModule.forChild(AffichePage)
  ],
  entryComponents: [
    AffichePage
  ]
})

@IonicPage({
  name: 'plzgo',
})
@Component({

  selector: 'page-affiche',
  templateUrl: 'affiche.html',
})
export class AffichePage {
  data2 : Observable<any>;
  //headers : any =new HttpHeaders();
  items: any;
  contenu: any ;
  sujet: any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient ) {
    let msg = navParams.get('msg');
    
    console.log("msg "+msg);
    //console.log(this.headers);
    var url2 = "http://eniso.info/ws/core/wscript?s=Return(bean(%27core%27).findFullArticlesByDisposition(1,true,%22Welcome%22))";
   // this.data2 = this.http.get(url2,{ headers: this.headers });
   /*  this.data2 = this.http.get(url2,{
      headers: new HttpHeaders().append('Cookie' , 'JSESSIONID'+msg)
}); */
const headers = new HttpHeaders();
    headers.append('X-JSESSIONID', msg);
this.data2 =this.http.get(url2 + '&jsessionid=' + msg, {headers: headers, observe: 'response'});

    this.data2
    .subscribe(data=>{
      this.items = data['body']['\$1'];
      
      
      console.log(data['body']['\$1']);
    })
    //this.connect2();
  
  
  }
  
    
    
  }
  

  
 
  


