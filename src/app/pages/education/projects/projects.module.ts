import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectsPage } from './projects.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/myteams',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: ProjectsPage,
    children: [
      {
        path: 'myteams',
        loadChildren: './myteams/myteams.module#MyteamsPageModule'
      },
      {
        path: 'allteams',
        loadChildren: './all-teams/all-teams.module#AllTeamsPageModule'

      }
    ]
  },

  {
    path: 'myteams',
    loadChildren: './myteams/myteams.module#MyteamsPageModule'
  },
  {
    path: 'allteams',
    loadChildren: './all-teams/all-teams.module#AllTeamsPageModule'

  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectsPage]
})
export class ProjectsPageModule { }
