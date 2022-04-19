import { tempUnitSelector } from '../app.selector';
import { APP_MODULE } from '../app.constant';

describe('App Selector', () => {
  it('should get correct property from state', () => {
    const expected = {
      tempUnit: 'CELSIUS',
    };
    const state = {
      [APP_MODULE]: {
        tempUnit: expected.tempUnit,
      },
    };

    const selector = {
      tempUnit: tempUnitSelector(state),
    };

    expect(selector).toEqual(expected);
  });
});
