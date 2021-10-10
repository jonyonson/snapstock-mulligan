import { useEffect, useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import useSearch from '../../hooks/use-search';

import styles from './Search.module.scss';

function Search() {
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
      className={styles.search}
      onSelect={handleSelect}
    >
      <ComboboxInput className="input" onChange={handleSearchTermChange} />
      {searchTerm.length > 0 && suggestions && (
        <ComboboxPopover className="shadow-popup">
          {suggestions.length > 0 ? (
            <ComboboxList>
              {suggestions.map((quote, i) => {
                const value = `${quote.symbol}, ${quote.name}`;
                return (
                  <ComboboxOption key={`${i}-${value}`} value={value}>
                    <div className="flex justify-between">
                      <div>{quote.name}</div>
                      <div>{quote.symbol}</div>
                    </div>
                    {/* <ComboboxOptionText /> */}
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
