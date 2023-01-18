import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

export const ContentContext = React.createContext({
  content: {},
  whetherOpenLoading: () => {},
  setType: () => {},
  getContent: () => {},
});

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

const getLocalStorageContent = () => {
  return localStorage.getItem('content')
    ? JSON.parse(localStorage.getItem('content'))
    : {};
};

const reducer = (state, action) => {
  return {
    ...state,
    [action.field]: action.value,
  };
};

const sortData = (data) => {
  return data[0]
    ? data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    : data;
};

const ContentProvider = ({ children }) => {
  const [content, dispatch] = useReducer(reducer, getLocalStorageContent());
  const [type, setType] = useState('');
  // const [error, setError] = useState('');

  useEffect(() => {
    for (const query in queries) {
      axios
        .get(queries[query])
        .then(({ data }) => {
          dispatch({
            field: query,
            value: sortData(data),
          });
        })
        .catch(() => {
          // setError(`Błąd połączenia z internetem`);
        });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('content', JSON.stringify(content));
  }, [content]);

  const whetherOpenLoading = () => {
    return Object.keys(content).length < Object.keys(queries).length;
  };

  const getContent = () => {
    switch (window.location.pathname) {
      case '/categories':
        switch (type) {
          case 'songs':
            return content.songsCategories;
          case 'prayers':
            return content.prayersCategories;
          case 'liturgy':
            return content.liturgyCategories;
          default:
            return null;
        }
      default:
        return null;
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        whetherOpenLoading,
        setType,
        getContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
