import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'record-income', loadChildren: './record-income/record-income.module#RecordIncomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'create-profile', loadChildren: './create-profile/create-profile.module#CreateProfilePageModule' },
  { path: 'daily-payments', loadChildren: './daily-payments/daily-payments.module#DailyPaymentsPageModule' },
  { path: 'special-payments', loadChildren: './special-payments/special-payments.module#SpecialPaymentsPageModule' },
  { path: 'payment-history', loadChildren: './payment-history/payment-history.module#PaymentHistoryPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'details', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'details/:id', loadChildren: './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'daily-payment-details', loadChildren: './pages/daily-payment-details/daily-payment-details.module#DailyPaymentDetailsPageModule' },
  { path: 'daily-payment-details/:id', loadChildren: './pages/daily-payment-details/daily-payment-details.module#DailyPaymentDetailsPageModule' },
  { path: 'special-payment-details', loadChildren: './pages/special-payment-details/special-payment-details.module#SpecialPaymentDetailsPageModule' },
  { path: 'special-payment-details/:id', loadChildren: './pages/special-payment-details/special-payment-details.module#SpecialPaymentDetailsPageModule' },
  { path: 'income-record-details', loadChildren: './pages/income-record-details/income-record-details.module#IncomeRecordDetailsPageModule' },
  { path: 'income-record-details/:id', loadChildren: './pages/income-record-details/income-record-details.module#IncomeRecordDetailsPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
