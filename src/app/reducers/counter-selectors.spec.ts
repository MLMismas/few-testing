import * as index from '.';
describe('Counter Selectors', () => {
  it('can select the counter branch', () => {
    const response = index._selectCounterBranch({
      counter: { current: 99 },
      songs: {
        ids: [],
        entities: {},
        sortBy: null
      }
    });
    expect(response).toEqual({
      current: 99
    });
  });
  it('selects the current count', () => {
    // const response = index.selectCurrentCounter({
    //   counter: {
    //     current: 12
    //   }
    // });
    const response = index.selectCurrentCounter.projector({ current: 12 });
    expect(response).toBe(12);
  });
});
