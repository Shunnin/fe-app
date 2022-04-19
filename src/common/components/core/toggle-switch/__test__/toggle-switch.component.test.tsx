import { render, screen, fireEvent } from '@testing-library/react';

import { EMPTY_FUNC } from '../../../../utility/constant';

import { ToggleSwitch } from '../toggle-switch.component';

describe('<ToggleSwitch />', () => {
  const props = {
    name: 'Test toggle switch',
    defaultValue: false,
    onClick: EMPTY_FUNC,
  };

  it('renders and matches the snapshot with defaultValue is false', () => {
    const { container } = render(<ToggleSwitch {...props} />);

    const toggleSwitchEl = container.firstChild;
    const toggleAriaLabelName = screen.getByLabelText(props.name, { selector: 'div' });

    expect(toggleSwitchEl).toMatchSnapshot();
    expect(toggleAriaLabelName).toBeInTheDocument();
    expect(toggleSwitchEl.firstChild).toHaveClass('toggle-switch__off');
    expect(toggleSwitchEl.lastChild).not.toHaveClass('is-toggled');
  });

  it('renders and matches the snapshot with defaultValue is true', () => {
    const { container } = render(<ToggleSwitch {...props} defaultValue />);

    const toggleSwitchEl = container.firstChild;
    const toggleAriaLabelName = screen.getByLabelText(props.name, { selector: 'div' });

    expect(toggleSwitchEl).toMatchSnapshot();
    expect(toggleAriaLabelName).toBeInTheDocument();
    expect(toggleSwitchEl.firstChild).toHaveClass('toggle-switch__on');
    expect(toggleSwitchEl.lastChild).toHaveClass('is-toggled');
  });

  it('handles clicks', () => {
    const onClickMock = jest.fn();
    const { container } = render(<ToggleSwitch {...props} onClick={onClickMock} />);
    const toggleSwitchEl = container.firstChild;

    fireEvent.click(toggleSwitchEl);

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(toggleSwitchEl.firstChild).toHaveClass('toggle-switch__on');
    expect(toggleSwitchEl.lastChild).toHaveClass('is-toggled');

    fireEvent.click(toggleSwitchEl);

    expect(onClickMock).toHaveBeenCalledTimes(2);
    expect(toggleSwitchEl.firstChild).toHaveClass('toggle-switch__off');
    expect(toggleSwitchEl.lastChild).not.toHaveClass('is-toggled');
  });
});
