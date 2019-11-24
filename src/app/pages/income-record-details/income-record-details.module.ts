import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IncomeRecordDetailsPage } from './income-record-details.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeRecordDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IncomeRecordDetailsPage]
})
export class IncomeRecordDetailsPageModule {}
