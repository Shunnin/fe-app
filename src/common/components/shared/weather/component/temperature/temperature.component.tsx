import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { celsiusToFahrenheit, TEMP_UNIT } from '../../../../../utility';

interface ITemperatureProps {
  value: number;
}

export const Temperature: FC<ITemperatureProps> = ({ value }) => {
  const { degreeType } = useSelector((state: any) => ({
    degreeType: state?.app?.tempUnit,
  }));

  const temperatureDegree = useMemo(() => {
    return degreeType === TEMP_UNIT.FAHRENHEIT ? celsiusToFahrenheit(value) : value;
  }, [value, degreeType]);

  return (
    <span className="temperature">
      {temperatureDegree}
      <sup>&deg;</sup>
    </span>
  );
};
