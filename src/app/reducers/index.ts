import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
};

const selectCounterBranch = (state: AppState) => state.counter;

// for the components
export const selectCurrentCounter = createSelector(
  selectCounterBranch,
  b => b.current
);
