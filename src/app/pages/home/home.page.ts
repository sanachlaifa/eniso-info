import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data2: Observable<any>;
  //headers : any =new HttpHeaders();
  items: any;
  contenu: any;
  sujet: any;

  ngOnInit() {
  }
  constructor(public router: Router, public http: HttpClient, private authService: AuthService) {
    //let msg = router.getCurrentNavigation().extras.state.msg;

    const msg = authService.sessionID;
    if ((!msg) || (msg === undefined)) {
      router.navigateByUrl('/login');
    }
    console.log('msg ' + msg);
    const url2 = "http://eniso.info/ws/core/wscript?s=Return(bean(%27core%27).findFullArticlesByDisposition(1,true,%22Welcome%22))";

    const headers = new HttpHeaders();
    headers.append('X-JSESSIONID', msg);
    this.data2 = this.http.get(url2 + '&jsessionid=' + msg, { headers: headers, observe: 'response' });

    this.data2
      .subscribe(data => {
        this.items = data['body']['\$1'];


        console.log(data['body']['\$1']);
      })

  }

}
