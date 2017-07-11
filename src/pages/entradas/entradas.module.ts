import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntradasPage } from './entradas';

@NgModule({
  declarations: [
    EntradasPage,
  ],
  imports: [
    IonicPageModule.forChild(EntradasPage),
  ],
  exports: [
    EntradasPage
  ]
})
export class EntradasPageModule {}
