import { appReducer } from '../app.reducer';
import { changeTempUnit } from '../app.action';

describe('App Reducer', () => {
  it('returns the initial state', () => {
    const action = {
      type: 'DUMMY_ACTION',
    };
    const reducer = appReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });

  describe('handles the changeTempUnit action', () => {
    it('returns tempUnit with given payload is true', () => {
      const changeTempUnitAction = changeTempUnit(true);
      const reducer = appReducer(undefined, changeTempUnitAction);

      expect(reducer).toMatchSnapshot();
    });

    it('returns tempUnit with given payload is false', () => {
      const changeTempUnitAction = changeTempUnit(false);
      const reducer = appReducer(undefined, changeTempUnitAction);

      expect(reducer).toMatchSnapshot();
    });
  });
});
