import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { BankingComponent } from './components/banking/banking.component';
import { BankAccountService } from 'src/services/bank-account.service';
import { BonusCalculatorService } from 'src/services/bonus-calc-service';
import { TodosComponent } from './components/todos/todos.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { TodoEntryComponent } from './components/todos/todo-entry/todo-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BankingComponent,
    TodosComponent,
    TodoListComponent,
    TodoEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BankAccountService, BonusCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
