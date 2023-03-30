import React, { useState, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { getFromLS, setToLS } from 'utils/storage';

export const ContentContext = React.createContext({
  content: {},
  whetherOpenLoading: () => {},
  setType: () => {},
  getContent: () => {},
  setCategoryId: () => {},
  setTextId: () => {},
  getCategory: () => {},
  getType: () => {},
  fontSize: '',
  updateFontSize: () => {},
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
  const [content, dispatch] = useReducer(reducer, getFromLS('content'));
  const [type, setType] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [textId, setTextId] = useState('');
  const [fontSize, setFontSize] = useState(getFromLS('textSize'));
  const [error, setError] = useState('');
  let location = useLocation().pathname;

  const updateFontSize = (size) => {
    setFontSize(size);
    setToLS('textSize', size);
  };

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
          setError(`Błąd połączenia z internetem`);
        });
    }
  }, []);

  useEffect(() => {
    setToLS('content', content);
  }, [content]);

  const whetherOpenLoading = () => {
    return Object.keys(content).length < Object.keys(queries).length;
  };

  const selectTitles = (content) => {
    return content.filter((text) => text.category_id === categoryId);
  };

  const selectText = (content) => {
    return content.find((text) => text.id === textId);
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

  const getCategory = (id) => {
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
      case 'playlist':
        categories = content.songsCategories;
        break;
      default:
        categories = null;
    }
    if (location === '/titles' || type === 'liturgy') {
      return categories.find((category) => category.id === categoryId).name;
    } else if (location === '/categories' || location === '/search' || location === '/') {
      return false;
    } else {
      return id ? categories.find((category) => category.id === id).name : '';
    }
  };

  const getContent = () => {
    switch (location) {
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
      case '/text':
        switch (type) {
          case 'songs':
            return selectText(content.songs);
          case 'prayers':
            return selectText(content.prayers);
          case 'liturgy':
            let category = content.liturgyCategories.find(
              (category) => category.id === categoryId
            );
            if (category.content !== '<p>---</p>') return category;
            return selectText(content.liturgy);
          case 'announcements':
            return content.announcements;
          case 'intentions':
            return content.intentions;
          default:
            return null;
        }
      case '/search':
        switch (type) {
          case 'songs':
            return content.songs;
          case 'prayers':
            return content.prayers;
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
        fontSize,
        updateFontSize,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
