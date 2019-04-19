import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AffichePage } from './affiche';

@NgModule({
  declarations: [
    AffichePage,
  ],
  imports: [
    IonicPageModule.forChild(AffichePage),
  ],
})
export class AffichePageModule {}
