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
import { HttpClientModule } from '@angular/common/http';
import { TodosDataService } from 'src/services/todos-data.service';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SongsComponent } from './components/songs/songs.component';
import { SongsListComponent } from './components/songs/songs-list/songs-list.component';
import { SongsEntryComponent } from './components/songs/songs-entry/songs-entry.component';
import { SongsDataService } from 'src/services/songs-data.service';
import { EffectsModule } from '@ngrx/effects';
import { SongEffects } from './effects/songs.effects';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BankingComponent,
    TodosComponent,
    TodoListComponent,
    TodoEntryComponent,
    CounterComponent,
    SongsComponent,
    SongsListComponent,
    SongsEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([SongEffects])
  ],
  providers: [
    BankAccountService,
    BonusCalculatorService,
    TodosDataService,
    SongsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
