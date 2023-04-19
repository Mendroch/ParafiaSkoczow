cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-inappupdate.inAppUpdate",
      "file": "plugins/cordova-plugin-inappupdate/www/inAppUpdate.js",
      "pluginId": "cordova-plugin-inappupdate",
      "clobbers": [
        "inAppUpdate"
      ]
    },
    {
      "id": "cordova-plugin-app-version.AppVersionPlugin",
      "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
      "pluginId": "cordova-plugin-app-version",
      "clobbers": [
        "cordova.getAppVersion"
      ]
    },
    {
      "id": "cordova-plugin-market.Market",
      "file": "plugins/cordova-plugin-market/www/market.js",
      "pluginId": "cordova-plugin-market",
      "clobbers": [
        "cordova.plugins.market"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "2.1.0",
    "cordova-plugin-inappupdate": "1.0.1",
    "cordova-plugin-app-version": "0.1.14",
    "cordova-plugin-market": "1.2.0",
    "cordova-plugin-inappbrowser": "5.0.0"
  };
});