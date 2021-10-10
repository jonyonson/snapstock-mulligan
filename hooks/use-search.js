import { useEffect, useState } from 'react';
import { IEX_API } from '../config/constants';

const cache = {};
function fetchSuggestions(value) {
  if (cache[value]) {
    return Promise.resolve(cache[value]);
  }

  // const ALPHA_VANTAGE_API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;
  // const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=${ALPHA_VANTAGE_API_KEY}`;

  return fetch(IEX_API.SEARCH + value + IEX_API.TOKEN)
    .then((res) => res.json())
    .then((result) => {
      cache[value] = result;
      return result;
    });
}

export default function useSearch(searchTerm) {
  const [suggestions, setSuggestions] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      let isFresh = true;
      fetchSuggestions(searchTerm).then((results) => {
        if (isFresh) {
          setSuggestions(results);
        }
      });
      return () => {
        return (isFresh = false);
      };
    }
  }, [searchTerm]);

  return suggestions;
}
