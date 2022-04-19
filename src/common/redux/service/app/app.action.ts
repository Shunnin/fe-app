import { createActionType, createActionCreator } from '../../action';

import { APP_MODULE } from './app.constant';

export const CHANGE_TEMP_UNIT = createActionType('CHANGE_TEMP_UNIT', APP_MODULE);

export const changeTempUnit = createActionCreator(CHANGE_TEMP_UNIT, 'payload');
