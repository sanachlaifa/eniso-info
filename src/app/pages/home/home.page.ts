import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: Observable<any>;
  // headers : any =new HttpHeaders();
  items: any;
  contenu: any;
  sujet: any;

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
  }

  constructor(public router: Router,
              private authService: AuthService,
              private homeService: HomeService) {

    const msg = authService.sessionID;
    if ((!msg) || (msg === undefined)) {
      router.navigateByUrl('/login');
    }
    this.data = homeService.gerArticles(authService.sessionID);
    this.data
      .subscribe(data => {
        this.items = data.body.$1;
        console.log(data.body.$1);
      });

  }

}
