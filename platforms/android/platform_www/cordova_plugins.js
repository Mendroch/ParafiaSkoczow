cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
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
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-statusbar": "3.0.0",
    "cordova-plugin-device": "2.1.0",
    "cordova-plugin-inappupdate": "1.0.1"
  };
});