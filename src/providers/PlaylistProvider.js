import React, { useReducer, useEffect, useContext } from 'react';
import { FirebaseContext } from './FirebaseProvider';
import { ContentContext } from './ContentProvider';

export const PlaylistContext = React.createContext({ playlist: [] });

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
  action.value.forEach((elem) => {
    playlist.push(action.content.find((element) => element.id === elem));
  });
  return playlist;
};

const PlaylistProvider = ({ children }) => {
  const { playlists } = useContext(FirebaseContext);
  const { content } = useContext(ContentContext);
  const [playlist, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if (playlists.length === 0) {
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
          dispatch({ value: elem.playlist, content: content.songs });
          i++;
        } else {
          dispatch({ value: [] });
        }
      }
    });
    // eslint-disable-next-line
  }, [playlists]);

  return (
    <PlaylistContext.Provider value={{ playlist }}>{children}</PlaylistContext.Provider>
  );
};

export default PlaylistProvider;
