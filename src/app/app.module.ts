import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { BankingComponent } from './components/banking/banking.component';
import { BankAccountService } from 'src/services/bank-account.service';
import { BonusCalculatorService } from 'src/services/bonus-calc-service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BankAccountService, BonusCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
