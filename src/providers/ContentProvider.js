import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

export const ContentContext = React.createContext({});

const queries = {
  songs: 'https://kmendroch.lk.pl/api/songs',
  songsCategories: 'https://kmendroch.lk.pl/api/songscategories',
  prayers: 'https://kmendroch.lk.pl/api/prayers',
  prayersCategories: 'https://kmendroch.lk.pl/api/prayerscategories',
  liturgy: 'https://kmendroch.lk.pl/api/liturgycontents',
  liturgyCategories: 'https://kmendroch.lk.pl/api/liturgycategories',
  announcements: 'https://www.parafiaskoczow.ox.pl/api/pages/74',
  intentions: 'https://www.parafiaskoczow.ox.pl/api/pages/75',
};

const getContent = () => {
  return {};
};

const reducer = (state, action) => {
  return {
    ...state,
    [action.field]: action.value,
  };
};

const ContentProvider = ({ children }) => {
  const [content, dispatch] = useReducer(reducer, getContent());
  const [error, setError] = useState('');

  useEffect(() => {
    for (const query in queries) {
      axios
        .get(queries[query])
        .then(({ data }) => {
          dispatch({
            field: query,
            value: data,
          });
        })
        .catch(() => {
          setError(`Błąd połączenia z internetem`);
        });
    }
  }, []);

  return <ContentContext.Provider value={{}}>{children}</ContentContext.Provider>;
};

export default ContentProvider;
