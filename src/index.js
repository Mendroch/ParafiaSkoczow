import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import '@atlaskit/css-reset';
import * as serviceWorker from './serviceWorker';
import { checkUpdate } from 'helpers/checkUpdate';

const root = ReactDOM.createRoot(document.getElementById('root'));

const startApp = () => {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
  serviceWorker.register();
  // eslint-disable-next-line
  if (typeof device !== 'undefined') checkUpdate();
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}

serviceWorker.unregister();
