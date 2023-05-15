import React, { useState, useReducer, useEffect, useContext } from 'react';
import { FirebaseContext } from './FirebaseProvider';
import { ContentContext } from './ContentProvider';

export const PlaylistContext = React.createContext({
  playlist: [],
  currentSongIndex: [],
  animation: [],
  setCurrentSongIndex: () => {},
  setAnimation: () => {},
});

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

Date.prototype.addMinutes = function (h) {
  this.setTime(this.getTime() + h * 60 * 1000);
  return this;
};

const toString = (elem) => {
  return JSON.stringify(elem);
};

const reducer = (state, action) => {
  let playlist = [];
  if (action.value.length) {
    action.value.forEach((id, index) => {
      if (id.slice(0, 4) === 'song')
        playlist.push(
          action.content.songs.find((elem) => elem?.id === Number(id.slice(6)))
        );
      else
        playlist.push(
          action.content.prayers.find((elem) => elem?.id === Number(id.slice(6)))
        );
      playlist[index].type = id.slice(0, 4);
    });
  }
  return playlist;
};

const PlaylistProvider = ({ children }) => {
  const { playlists } = useContext(FirebaseContext);
  const { content, whetherOpenLoading } = useContext(ContentContext);
  const [playlist, dispatch] = useReducer(reducer, []);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [animation, setAnimation] = useState('none');
  const [isContent, setIsContent] = useState(!whetherOpenLoading());

  const updatePlaylist = () => {
    if (whetherOpenLoading()) return;
    if (!playlists.length) {
      dispatch({ value: [] });
      return;
    }
    let currentDate = toString(new Date());
    let i = 0;
    playlists.forEach((elem) => {
      if (i === 0) {
        let startingDate = toString(elem.day);
        elem.day.addHours(elem.expiration.hour).addMinutes(elem.expiration.minute);
        if (startingDate <= currentDate && toString(elem.day) >= currentDate) {
          dispatch({ value: elem.playlist, content: content });
          i++;
        } else {
          dispatch({ value: [] });
        }
      }
    });
  };

  useEffect(() => {
    updatePlaylist();
    // eslint-disable-next-line
  }, [playlists, isContent]);

  useEffect(() => {
    setIsContent(!whetherOpenLoading());
    // eslint-disable-next-line
  }, [content]);

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        currentSongIndex,
        animation,
        setCurrentSongIndex,
        setAnimation,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
