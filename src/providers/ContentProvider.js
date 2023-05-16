import React, { useState, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { getFromLS, setToLS } from 'utils/storage';
import { getLatestVideoUrl } from 'helpers/getTransmissionUrl';
import { getData } from 'helpers/getData';

export const ContentContext = React.createContext({
  content: {},
  fontSize: '',
  transmisionUrl: '',
  whetherOpenLoading: () => {},
  setType: () => {},
  getContent: () => {},
  setCategoryId: () => {},
  setTextId: () => {},
  getCategory: () => {},
  getType: () => {},
  updateFontSize: () => {},
  getPlaylistCategory: () => {},
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

const ContentProvider = ({ children }) => {
  const [content, dispatch] = useReducer(reducer, getFromLS('content'));
  const [type, setType] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [textId, setTextId] = useState('');
  const [fontSize, setFontSize] = useState(getFromLS('textSize'));
  const [transmisionUrl, setTransmisionUrl] = useState();
  const [error, setError] = useState('');
  let location = useLocation().pathname;

  useEffect(() => {
    getData(queries, dispatch, setError);
    let urlFromLS = getFromLS('transmissionUrl');
    if (urlFromLS.length) setTransmisionUrl(urlFromLS);
    getLatestVideoUrl()
      .then((url) => {
        setTransmisionUrl(url);
        setToLS('transmissionUrl', url);
      })
      .catch((error) => setError(error));
  }, []);

  const updateFontSize = (size) => {
    setFontSize(size);
    setToLS('textSize', size);
  };

  useEffect(() => {
    setToLS('content', content);
  }, [content]);

  const whetherOpenLoading = () => {
    return Object.keys(content).length < Object.keys(queries).length;
  };

  const selectTitles = () => {
    return content[type].filter((text) => text.category_id === categoryId);
  };

  const selectText = () => {
    return content[type].find((text) => text?.id === textId);
  };

  const contentTypes = {
    songs: 'Pieśni',
    prayers: 'Modlitwy',
    liturgy: 'Liturgia',
    announcements: 'Ogłoszenia',
    intentions: 'Intencje mszy',
  };

  const getType = () => contentTypes[type] || '';

  const getCategory = (id) => {
    let categories = content[`${type}Categories`];
    if (location === '/titles' || type === 'liturgy') {
      return categories.find((category) => category?.id === categoryId).name;
    } else if (location === '/categories' || location === '/search' || location === '/') {
      return false;
    } else {
      return id ? categories.find((category) => category?.id === id).name : '';
    }
  };

  const getPlaylistCategory = (type, category_id) => {
    return type === 'song'
      ? content.songsCategories.find((category) => category?.id === category_id).name
      : content.prayersCategories.find((category) => category?.id === category_id).name;
  };

  const getContent = () => {
    switch (location) {
      case '/categories':
        return content[`${type}Categories`];
      case '/titles':
        return selectTitles();
      case '/text':
        switch (type) {
          case 'songs':
          case 'prayers':
            return selectText();
          case 'liturgy':
            let category = content.liturgyCategories.find(
              (category) => category?.id === categoryId
            );
            return category.content !== '<p>---</p>' ? category : selectText();
          case 'announcements':
          case 'intentions':
            return content[type];
          default:
            return null;
        }
      case '/search':
        return content[type];
      default:
        return null;
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        fontSize,
        transmisionUrl,
        whetherOpenLoading,
        setType,
        getContent,
        setCategoryId,
        setTextId,
        getCategory,
        getType,
        updateFontSize,
        getPlaylistCategory,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
