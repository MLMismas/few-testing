import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCurrentCounter } from 'src/app/reducers';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  current$: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(selectCurrentCounter);
  }
  decrement(): void {
    this.store.dispatch(actions.countDecremented());
  }
  increment(): void {
    this.store.dispatch(actions.countIncremented());
  }
}
