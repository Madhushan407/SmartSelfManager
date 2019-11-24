import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DailyPaymentDetailsPage } from './daily-payment-details.page';

const routes: Routes = [
  {
    path: '',
    component: DailyPaymentDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DailyPaymentDetailsPage]
})
export class DailyPaymentDetailsPageModule {}
