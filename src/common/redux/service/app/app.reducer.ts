import { TEMP_UNIT, TEMP_UNIT_TOGGLE_VALUE } from '../../../utility';

import { CHANGE_TEMP_UNIT } from './app.action';
import { AppActions, IAppState } from './app.constant';

const initialState: IAppState = {
  tempUnit: TEMP_UNIT.CELSIUS,
};

const handleChangeTempUnit = (state: IAppState, payload: boolean) => {
  const tempUnit = TEMP_UNIT_TOGGLE_VALUE[payload];

  return { ...state, tempUnit };
};

export const appReducer = (state = initialState, action: AppActions) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_TEMP_UNIT:
      return handleChangeTempUnit(state, payload);

    default:
      return { ...state };
  }
};
