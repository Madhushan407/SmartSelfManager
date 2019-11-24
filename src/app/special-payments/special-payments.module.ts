import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpecialPaymentsPage } from './special-payments.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialPaymentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpecialPaymentsPage]
})
export class SpecialPaymentsPageModule {}
