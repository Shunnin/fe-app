import { TEMP_UNIT, TEMP_UNIT_TOGGLE_VALUE } from '../../utility';

import { CHANGE_TEMP_UNIT } from './action-type';
import { AppActions, IAppState } from './type';

const initialState: IAppState = {
  tempUnit: TEMP_UNIT.CELSIUS,
};

const handleChangeTempUnit = (state: IAppState, payload: boolean) => {
  const tempUnit = TEMP_UNIT_TOGGLE_VALUE[payload];

  return { ...state, tempUnit };
};

export default (state = initialState, action: AppActions) => {
  switch (action.type) {
    case CHANGE_TEMP_UNIT:
      return handleChangeTempUnit(state, action.payload);

    default:
      return {
        ...state,
      };
  }
};