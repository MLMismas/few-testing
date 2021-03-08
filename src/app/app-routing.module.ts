import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankingComponent } from './components/banking/banking.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'banking',
    component: BankingComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
