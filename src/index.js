import React from "react";
import ReactDOM from "react-dom/client";
import Root from "views/Root";
import "@atlaskit/css-reset";
import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));

const startApp = () => {
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
};

if (window.cordova) {
  document.addEventListener("deviceready", startApp, false);
} else {
  startApp();
}

serviceWorker.unregister();
