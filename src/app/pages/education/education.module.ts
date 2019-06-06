import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EducationPage } from './education.page';
import { EvaluationPage } from './evaluation/evaluation.page';
import { ProjectsPage } from './projects/projects.page';
import { EvaluationPageModule } from './evaluation/evaluation.module';
import { ProjectsPageModule } from './projects/projects.module';

const routes: Routes = [
  {
    path: '',
    component: EducationPage,
    children: [
    ]
  },
  {
    path: 'evaluation',
    loadChildren: './evaluation/evaluation.module#EvaluationPageModule'
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsPageModule'
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EducationPage]
})
export class EducationPageModule { }
