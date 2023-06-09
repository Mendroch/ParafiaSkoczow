# Parafia Skoczów

#### Liturgical kit for the parish of St. Ap. Peter and Paul in Skoczów

![Parafia Skoczów logo](https://github.com/Mendroch/modlitewnik_v4/blob/main/public/logo192.png)

## Description

The first complete application dedicated to the faithful from the parish of pw. St. App. Peter and Paul in Skoczów. It contains prayers, songs for all periods of the liturgical year and announcements, intentions of the Holy Mass. and basic information on the functioning of the parish.

Thanks to the TEXTS NOW function, you can use the songs displayed on the projector in the church during the liturgy, which is a great help for the sick who participate in the online Mass.

A clear and functional menu allows you to quickly find the song or information you are looking for. In addition, you can change the font size and use the application while offline. The messages update every time you connect to the internet.

The application can be a great help in daily individual and community prayer.

## Features

- texts now
- online broadcast
- songs
- prayers
- liturgy
- announcements
- intentions of the mass

## Download

[App Store](https://apps.apple.com/pl/app/parafia-skocz%C3%B3w/id6444475296)

[Google Play](https://play.google.com/store/apps/details?id=pl.optimalit.parafiaskoczow&gl=PL)

## Setup

Clone this repository `git clone https://github.com/Mendroch/modlitewnik_v4.git`

Go into the repository `cd modlitewnik_v4`

Install dependencies `npm install`

Run the app `npm start`

## Build new version

Build project `npm run build`

Rename folder build -> www

Build Cordova project `cordova build android --release` or `cordova build ios --release`

## Fix statusbar color on Android 13+

Go to `\platforms\android\CordovaLib\src\org\apache\cordova\SplashScreenPlugin.java`

Comment out the entire function `splashScreen.setOnExitAnimationListener`
