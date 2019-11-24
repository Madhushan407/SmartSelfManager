import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SpecialPaymentDetailsPage } from './special-payment-details.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialPaymentDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SpecialPaymentDetailsPage]
})
export class SpecialPaymentDetailsPageModule {}
