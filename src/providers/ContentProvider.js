import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

export const ContentContext = React.createContext({
  content: {},
  whetherOpenLoading: () => {},
  setType: () => {},
  getContent: () => {},
  setCategoryId: () => {},
  setTextId: () => {},
  getCategory: () => {},
  getType: () => {},
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
  const [categoryId, setCategoryId] = useState('');
  const [textId, setTextId] = useState('');
  // const [error, setError] = useState('');

  // useEffect(() => {
  //   console.log(content);
  // }, [content]);

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

  const selectTitles = (content) => {
    return content.filter((text) => text.category_id === categoryId);
  };

  const getType = () => {
    switch (type) {
      case 'songs':
        return 'Pieśni';
      case 'prayers':
        return 'Modlitwy';
      case 'liturgy':
        return 'Liturgia';
      case 'announcements':
        return 'Ogłoszenia';
      case 'intentions':
        return 'Intencje mszalne';
      default:
        return '---';
    }
  };

  const getCategory = () => {
    let categories;
    switch (type) {
      case 'songs':
        categories = content.songsCategories;
        break;
      case 'prayers':
        categories = content.prayersCategories;
        break;
      case 'liturgy':
        categories = content.liturgyCategories;
        break;
      default:
        categories = null;
    }
    return categories.find((category) => category.id === categoryId).name;
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
      case '/titles':
        switch (type) {
          case 'songs':
            return selectTitles(content.songs);
          case 'prayers':
            return selectTitles(content.prayers);
          case 'liturgy':
            return selectTitles(content.liturgy);
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
        setCategoryId,
        setTextId,
        getCategory,
        getType,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
