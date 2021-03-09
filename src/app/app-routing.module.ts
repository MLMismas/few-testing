import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankingComponent } from './components/banking/banking.component';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'banking',
    component: BankingComponent
  },
  {
    path: 'todos',
    component: TodosComponent
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
