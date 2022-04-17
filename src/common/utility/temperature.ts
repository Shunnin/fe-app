const MILE_TO_KM = 1.60934;
const ONE_KPH = 3.6;
const ONE_KELVIN = 273.15;

export const kelvinToCelsius = (value: number): number => {
  return Math.round(value - ONE_KELVIN);
};

export const celsiusToFahrenheit = (value: number): number => {
  // eslint-disable-next-line no-magic-numbers
  return Math.round(value * (9 / 5) + 32);
};

export const fahrenheitToCelsius = (value: number): number => {
  // eslint-disable-next-line no-magic-numbers
  return Math.round(((value - 32) * 5) / 9);
};

export const kmToMile = (value: number): number => {
  return Math.round(value / MILE_TO_KM);
};

export const mileToKm = (value: number): number => {
  return Math.round(value * MILE_TO_KM);
};

export const kphSpeed = (value: number): number => {
  return Math.round(value * ONE_KPH);
};
