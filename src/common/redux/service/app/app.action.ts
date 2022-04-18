import { CHANGE_TEMP_UNIT } from './app.action-type';
import { IChangeTempUnit } from './app.type';

export const changeTempUnit = (payload: boolean): IChangeTempUnit => ({
  type: CHANGE_TEMP_UNIT,
  payload,
});
