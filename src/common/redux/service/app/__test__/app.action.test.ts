import { CHANGE_TEMP_UNIT, changeTempUnit } from '../app.action';

describe('App action', () => {
  describe('changeTempUnit()', () => {
    it('should return the correct action', () => {
      const payload = true;
      const expectedAction = {
        type: CHANGE_TEMP_UNIT,
        payload: payload,
      };

      const action = changeTempUnit(payload);

      expect(action).toEqual(expectedAction);
    });
  });
});
