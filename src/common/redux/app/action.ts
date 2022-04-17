import { CHANGE_TEMP_UNIT } from './action-type';
import { IChangeTempUnit } from './type';

export const changeTempUnit = (payload: boolean): IChangeTempUnit => ({
  type: CHANGE_TEMP_UNIT,
  payload,
});
