import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-myteams',
  templateUrl: './myteams.page.html',
  styleUrls: ['./myteams.page.scss'],
})
export class MyteamsPage implements OnInit {
  goBack = 'menu/education';

  constructor(private authService: AuthService, private prjService: ProjectsService) {
    this.prjService.getTeams();
    console.log(authService.user.userFullTitle);
    
  }

  ngOnInit() {
  }

}
