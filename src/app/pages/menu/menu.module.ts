import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { HomePageModule } from '../home/home.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'profil',
        loadChildren: '../profil/profil.module#ProfilPageModule'
      },
      {
        path: 'calendar',
        loadChildren: '../calendar/calendar.module#CalendarPageModule'
      },
      {
        path: 'documents',
        loadChildren: '../documents/documents.module#DocumentsPageModule'
      },
      {
        path: 'education',
        loadChildren: '../education/education.module#EducationPageModule',
      }
/*       { path: 'evaluation', loadChildren: './pages/education/evaluation/evaluation.module#EvaluationPageModule' },
      { path: 'projects', loadChildren: './pages/education/projects/projects.module#ProjectsPageModule' },
 */
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
