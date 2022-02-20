import { useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

// Hooks
import useSearch from '../../hooks/use-search';

// Styles
import styles from './Search.module.scss';
import '@reach/combobox/styles.css';

function Search({ placeholder, className }) {
  const [searchTerm, setSearchTerm] = useState('');
  const suggestions = useSearch(searchTerm);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelect = (item) => {
    console.log(item);
  };

  return (
    <Combobox
      openOnFocus
      aria-label="Search"
      className={`${styles.search} ${className}`}
      onSelect={handleSelect}
    >
      <ComboboxInput
        className={styles.input}
        onChange={handleSearchTermChange}
        placeholder={placeholder}
      />
      {searchTerm.length > 0 && suggestions && (
        <ComboboxPopover className={styles.popover}>
          {suggestions.length ? (
            <ComboboxList>
              {suggestions.map((quote) => {
                const value = `${quote.symbol}, ${quote.name}`;
                return (
                  <ComboboxOption
                    key={value}
                    value={value}
                    data-testid="combobox-option"
                  >
                    <div className="flex justify-between">
                      <div>{quote.name}</div>
                      <div>{quote.symbol}</div>
                    </div>
                  </ComboboxOption>
                );
              })}
            </ComboboxList>
          ) : null}
        </ComboboxPopover>
      )}
    </Combobox>
  );
}

export default Search;
