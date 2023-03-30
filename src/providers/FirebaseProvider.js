import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

export const FirebaseContext = React.createContext({
  playlists: [],
});

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
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
