import { noop, transform } from 'lodash-es';

export const TEMP_UNIT = Object.freeze({
  CELSIUS: 'CELSIUS',
  FAHRENHEIT: 'FAHRENHEIT',
});

export const TEMP_UNIT_VALUE = Object.freeze({
  [TEMP_UNIT.CELSIUS]: true,
  [TEMP_UNIT.FAHRENHEIT]: false,
});

export const TEMP_UNIT_TOGGLE_VALUE = transform(TEMP_UNIT_VALUE, (result, value, key) => (result[value] = key));

export const TEMP_UNIT_MAPPING_LABEL = Object.freeze({
  true: 'C',
  false: 'F',
});

export const EMPTY_FUNC = noop;
export type IFunction = ReturnType<typeof EMPTY_FUNC>;

export const DEFAULT_LOCALE = 'en';

export const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY || '20571ab45c74dc2a1897b60c5b8047a1';
