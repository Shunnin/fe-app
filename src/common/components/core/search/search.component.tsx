import { FC, memo, useEffect, useRef, useState, useCallback, ChangeEvent } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { slice, map, isEmpty, split } from 'lodash-es';

import { INT_ZERO, DEFAULT_DEBOUNCE_TIME, EMPTY_FUNC } from '../../../utility';
import { ReactComponent as SearchIcon } from '../../../../assets/images/search-icon.svg';
import { useClickOutside } from '../../../hooks';

import './search.style';

const MAX_SUGGESTION_ITEMS = 6;

interface ISuggestionItemProps {
  label: string;
  onClickSuggestion: Function;
  setShowSuggestions: Function;
  suggestionRef: any;
}
const SuggestionItem: FC<ISuggestionItemProps> = ({ label, onClickSuggestion, setShowSuggestions, suggestionRef }) => {
  const handleClickSuggestItem = useCallback(() => {
    const value = split(label, ',')[INT_ZERO];

    onClickSuggestion(value);
    setShowSuggestions(false);
  }, [onClickSuggestion, label, suggestionRef]);

  return (
    <div className="search-box__suggestions-item clickable" onClick={handleClickSuggestItem}>
      {label}
    </div>
  );
};

interface ISuggestionListProps {
  suggestions: string[];
  maxSuggestItem: number;
  showSuggestions: boolean;
  setShowSuggestions: Function;
  onClickSuggestion: Function;
}

const SuggestionList: FC<ISuggestionListProps> = memo(
  ({ maxSuggestItem, showSuggestions, suggestions, setShowSuggestions, onClickSuggestion = EMPTY_FUNC }) => {
    const suggestionRef = useRef(null);

    useClickOutside(suggestionRef, () => setShowSuggestions(false));

    if (!showSuggestions || isEmpty(suggestions)) {
      return <></>;
    }

    const suggestItems = slice(suggestions, INT_ZERO, maxSuggestItem);

    return (
      <div className="search-box__suggestions" ref={suggestionRef}>
        {map(suggestItems, (item: string, index: number) => (
          <SuggestionItem
            key={index}
            label={item}
            onClickSuggestion={onClickSuggestion}
            setShowSuggestions={setShowSuggestions}
            suggestionRef={suggestionRef}
          />
        ))}
      </div>
    );
  },
);
SuggestionList.displayName = 'SuggestionList';

interface ISearchBoxProps {
  placeholder?: string;
  suggestions: string[];
  maxSuggestItem?: number;
  onClickSearch: Function;
  onClickSuggestion: Function;
}

export const SearchBox: FC<ISearchBoxProps> = ({
  placeholder,
  suggestions,
  maxSuggestItem = MAX_SUGGESTION_ITEMS,
  onClickSearch = EMPTY_FUNC,
  onClickSuggestion = EMPTY_FUNC,
}) => {
  const [optionSuggestions, setOptionSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    searchKeyword && onClickSearch(searchKeyword);
  }, [searchKeyword]);

  useEffect(() => {
    if (!isEmpty(suggestions)) {
      setShowSuggestions(true);
      setOptionSuggestions(suggestions);
    }
  }, [suggestions]);

  const handleSearchInputChanged = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(event.target.value);
    },
    [setSearchKeyword],
  );

  return (
    <div className="search-box">
      <SearchIcon className="search-box__icon" />

      <DebounceInput
        className="search-box__input"
        debounceTimeout={DEFAULT_DEBOUNCE_TIME}
        onChange={handleSearchInputChanged}
        placeholder={placeholder}
      />

      <SuggestionList
        maxSuggestItem={maxSuggestItem}
        showSuggestions={showSuggestions}
        suggestions={optionSuggestions}
        setShowSuggestions={setShowSuggestions}
        onClickSuggestion={onClickSuggestion}
      />
    </div>
  );
};
