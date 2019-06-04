import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router, private authService: AuthService) {

    if (authService.sessionID) {
      authService.logout().subscribe(data => {
        try {
          console.log(data['\$1']);
          router.navigateByUrl('/signin');
        } catch (error) {
          console.log(data['\error']);

        }

      });
    }

  }

  ngOnInit() {
  }

}
