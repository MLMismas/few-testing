import * as fromCounter from './counter.reducer';
import * as actions from '../actions/counter.actions';

describe('Counter Reducer', () => {
  it('can increment', () => {
    const initialState: fromCounter.CounterState = {
      current: 0
    };
    const result = fromCounter.reducer(initialState, actions.countIncremented());
    expect(result).toEqual({
      current: 1
    });
  });
  it('can decrement', () => {
    const initialState: fromCounter.CounterState = {
      current: 99
    };
    const result = fromCounter.reducer(initialState, actions.countDecremented());
    expect(result).toEqual({
      current: 98
    });
  });
});
