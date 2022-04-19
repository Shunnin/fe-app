import { render, screen, fireEvent } from '@testing-library/react';

import { DEFAULT_DEBOUNCE_TIME } from '../../../../utility/constant';

import { SearchBox } from '../search.component';

describe('<SearchBox />', () => {
  jest.useFakeTimers();

  const onClickSearchMock = jest.fn();
  const onClickSuggestionMock = jest.fn();
  const suggestions = ['Hanoi, VN', 'Hue, VN', 'HCM, VN'];
  const props = {
    placeholder: 'Search location',
    suggestions: [],
    onClickSearch: onClickSearchMock,
    onClickSuggestion: onClickSuggestionMock,
  };

  it('renders and matches the snapshot with ignore onClickSearch and onClickSuggestion', () => {
    const { placeholder, suggestions } = props;
    const { container } = render(<SearchBox placeholder={placeholder} suggestions={suggestions} />);

    const searchBoxEl = container.firstChild;
    const searchBoxPlaceHolder = screen.getByPlaceholderText(props.placeholder);

    expect(searchBoxEl).toMatchSnapshot();
    expect(searchBoxPlaceHolder).toBeInTheDocument();
  });

  it('renders and matches the snapshot with default props', () => {
    const { container } = render(<SearchBox {...props} />);

    const searchBoxEl = container.firstChild;
    const searchBoxPlaceHolder = screen.getByPlaceholderText(props.placeholder);

    expect(searchBoxEl).toMatchSnapshot();
    expect(searchBoxPlaceHolder).toBeInTheDocument();
  });

  it('renders and matches the snapshot with given suggestion list', () => {
    const maxSuggestItem = 2;
    const { container } = render(<SearchBox {...props} maxSuggestItem={maxSuggestItem} suggestions={suggestions} />);

    const searchBoxEl = container.firstChild;
    const suggestionListEl = container.getElementsByClassName('search-box__suggestions-item');

    expect(searchBoxEl).toMatchSnapshot();
    expect(suggestionListEl.length).toBe(maxSuggestItem);
    expect(searchBoxEl.lastChild).toHaveClass('search-box__suggestions');
  });

  it('rerender and returns number suggestion item when given suggestion list', () => {
    const mockProps = { ...props, suggestions };
    const { rerender, container } = render(<SearchBox {...mockProps} maxSuggestItem={1} />);

    const suggestionListEl = container.getElementsByClassName('search-box__suggestions-item');

    expect(suggestionListEl.length).toBe(1);

    rerender(<SearchBox {...mockProps} maxSuggestItem={2} />);

    expect(suggestionListEl.length).toBe(2);
  });

  describe('handles click', () => {
    it('should call onClickSuggestion once when click in suggestion items', () => {
      const { container } = render(<SearchBox {...props} suggestions={suggestions} />);
      const suggestionItemEl = screen.getByText(suggestions[0]);
      const suggestionListEl = container.getElementsByClassName('search-box__suggestions');

      fireEvent.click(suggestionItemEl);

      expect(onClickSuggestionMock).toHaveBeenCalledTimes(1);
      expect(onClickSearchMock).not.toHaveBeenCalled();
      expect(suggestionListEl.length).toBe(0);
    });

    it('should close suggestion when click outside', () => {
      const { container } = render(<SearchBox {...props} suggestions={suggestions} />);
      const suggestionListEl = container.getElementsByClassName('search-box__suggestions');

      fireEvent.mouseDown(document.body);

      expect(onClickSuggestionMock).not.toHaveBeenCalled();
      expect(onClickSearchMock).not.toHaveBeenCalled();
      expect(suggestionListEl.length).toBe(0);
    });
  });

  describe('handles input search', () => {
    it('should call onClickSearchMock once when search item', () => {
      const { container } = render(<SearchBox {...props} suggestions={suggestions} />);
      const searchInputEl = screen.getByPlaceholderText(props.placeholder);
      const suggestionListEl = container.getElementsByClassName('search-box__suggestions');

      fireEvent.change(searchInputEl, { target: { value: '2020-05-24' } });

      expect(onClickSearchMock).not.toBeCalled();

      jest.advanceTimersByTime(DEFAULT_DEBOUNCE_TIME + 100);

      expect(onClickSearchMock).toHaveBeenCalledTimes(1);
      expect(onClickSuggestionMock).not.toHaveBeenCalled();
      expect(suggestionListEl.length).toBe(1);
    });
  });
});
