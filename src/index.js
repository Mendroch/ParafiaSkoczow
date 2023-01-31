import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import '@atlaskit/css-reset';
import 'assets/styles/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const startApp = () => {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
