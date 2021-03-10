import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

const myReducer = createReducer(
  initialState,
  on(actions.countIncremented, (state) => ({ ...state, current: state.current + 1 })),
  on(actions.countDecremented, (state) => ({ ...state, current: state.current - 1 })),
);

export function reducer(
  state: CounterState,
  action: Action): CounterState {
  return myReducer(state, action);
}
