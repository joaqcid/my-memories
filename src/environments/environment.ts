// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  firebase:{
    apiKey: "AIzaSyAs6gxDfcbsdgslPkbhbmgjNbbcgqR3m_g",
    authDomain: "my-memories-b4c52.firebaseapp.com",
    databaseURL: "https://my-memories-b4c52.firebaseio.com",
    projectId: "my-memories-b4c52",
    storageBucket: "my-memories-b4c52.appspot.com",
    messagingSenderId: "695101077060"
  }
 };
 
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
