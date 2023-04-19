export const checkUpdate = async () => {
  document.addEventListener(
    'deviceready',
    function () {
      const { InAppUpdate } = window.cordova.plugins;

      InAppUpdate.checkForUpdate()
        .then((result) => {
          if (result.available) {
            InAppUpdate.promptForUpdate().catch(alert('error'));
          }
        })
        .catch(alert('error'));
    },
    false
  );

  //   if (typeof device !== 'undefined') {
  //     // eslint-disable-next-line
  //     const version = await cordova.getAppVersion.getVersionNumber();
  //     // eslint-disable-next-line
  //     if (device.platform === 'Android') {
  //       alert('Android');
  //       return false;
  //       // eslint-disable-next-line
  //     } else if (device.platform === 'iOS') {
  //       return await axios
  //         .get(
  //           'https://itunes.apple.com/lookup?bundleId=pl.optimalit.parafiaskoczoww&country=PL'
  //         )
  //         .then(({ data }) => {
  //           if (data.results[0].version > version) {
  //             return 'https://apps.apple.com/app/id6444475296';
  //           }
  //           return false;
  //         });
  //     }
  //   } else return false;
  return false;
};

// Package Name: pl.optimalit.parafiaskoczow
// client key: af6d784637d84662997bab85cc9bc82c
// secret key: 862d0775dd8f4b4fb06f31880677c8f9

// Inny adres app store
// const appStoreURL = 'itms-apps://apps.apple.com/app/id' + appId;

// Otwarcie google play store

// function redirectToPlayStore() {
//     const appPackageName = 'YOUR_APP_PACKAGE_NAME'; // Podmień na nazwę pakietu Twojej aplikacji w Google Play Store
//     const playStoreURL = 'market://details?id=' + appPackageName;
//     window.open(playStoreURL, '_system');
// }
