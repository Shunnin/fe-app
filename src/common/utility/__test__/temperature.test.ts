import {
  kelvinToCelsius,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  kmToMile,
  mileToKm,
  kphSpeed,
} from '../temperature';

describe('kelvinToCelsius()', () => {
  it('returns correct round number celsius', () => {
    expect(kelvinToCelsius(306.16)).toEqual(33);
  });
});

describe('celsiusToFahrenheit()', () => {
  it('returns correct round number Fahrenheit', () => {
    expect(celsiusToFahrenheit(33)).toEqual(91);
  });
});

describe('fahrenheitToCelsius()', () => {
  it('returns correct round number Fahrenheit', () => {
    expect(fahrenheitToCelsius(91)).toEqual(33);
  });
});

describe('kmToMile()', () => {
  it('returns correct round number mile', () => {
    expect(kmToMile(3.09)).toEqual(2);
  });
});

describe('mileToKm()', () => {
  it('returns correct round number kilometer', () => {
    expect(mileToKm(2)).toEqual(3);
  });
});

describe('kphSpeed()', () => {
  it('returns correct round number kph', () => {
    expect(kphSpeed(2)).toEqual(7);
  });
});
