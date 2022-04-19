import { FC, useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { get } from 'lodash-es';

import { EMPTY_FUNC, IFunction } from '../../../utility';
import './toggle-switch.style';

interface IMappingLabel {
  true: string;
  false: string;
}

interface IToggleSwitchProps {
  name?: string;
  defaultValue?: boolean;
  mappingLabel?: IMappingLabel;
  onClick: IFunction;
}

export const ToggleSwitch: FC<IToggleSwitchProps> = ({
  name,
  defaultValue = false,
  mappingLabel,
  onClick = EMPTY_FUNC,
}) => {
  const [toggled, setToggled] = useState(defaultValue);

  const handleClickSwitch = useCallback(() => {
    setToggled(checked => !checked);
    onClick(!toggled);
  }, [onClick, setToggled, toggled]);

  const labelToggle = useMemo(() => get(mappingLabel, toggled, ''), [mappingLabel, toggled]);

  return (
    <div className="toggle-switch clickable" role="button" tabIndex={0} aria-label={name} onClick={handleClickSwitch}>
      {toggled && <span className="toggle-switch__on">{labelToggle}</span>}
      {!toggled && <span className="toggle-switch__off">{labelToggle}</span>}
      <div className={classNames('toggle-switch__indicator', { 'is-toggled': toggled })} />
    </div>
  );
};
