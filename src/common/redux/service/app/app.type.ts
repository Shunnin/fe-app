import { CHANGE_TEMP_UNIT } from './app.action-type';

export type IChangeTempUnit = {
  type: typeof CHANGE_TEMP_UNIT;
  payload: boolean;
};

export interface IAppState {
  tempUnit: string;
}

export type AppActions = IChangeTempUnit;
