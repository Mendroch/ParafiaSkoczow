import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

export const FirebaseContext = React.createContext({
  playlists: [],
});

const firebaseConfig = {
  apiKey: 'AIzaSyDke8FddhWV--DMXb3Bjs9JaMSS__BG0tY',
  authDomain: 'organistaplaylist.firebaseapp.com',
  databaseURL: 'https://organistaplaylist-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'organistaplaylist',
  storageBucket: 'organistaplaylist.appspot.com',
  messagingSenderId: '846195840054',
  appId: '1:846195840054:web:e32a9d5bb6302e69f1f497',
  measurementId: 'G-2L6FQCMGBG',
};

const FirebaseProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const distanceRef = ref(db, '/');
  const [playlists, setPlaylists] = useState([]);

  onValue(distanceRef, (snapshot) => {
    let data = [];
    let value = snapshot.val();
    for (const key in value) {
      value[key].day = new Date(value[key].day);
      data.push(value[key]);
    }

    if (JSON.stringify(data) !== JSON.stringify(playlists)) {
      setPlaylists(data);
    }
  });

  return (
    <FirebaseContext.Provider
      value={{
        playlists,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
