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
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "2.1.0",
    "cordova-plugin-inappupdate": "1.0.1"
  };
});