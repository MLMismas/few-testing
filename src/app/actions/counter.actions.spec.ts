import * as actions from './counter.actions';

describe('counteractions', () => {
  it('can increment', () => {
    const action = actions.countIncremented();
    expect(action).toEqual({
      type: '[counter] count incremented'
    });
  });
  it('can decrement', () => {
    const action = actions.countDecremented();
    expect(action).toEqual({
      type: '[counter] count decremented'
    });
  });
});
