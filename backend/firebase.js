const { initializeApp } = require('firebase/app');

const firebaseConfig = {
    apiKey: "AIzaSyDa57sXXgGk3LksaAOoJEdlGSwAzKOwAjI",
    authDomain: "deviants-97246.firebaseapp.com",
    projectId: "deviants-97246",
    storageBucket: "deviants-97246.appspot.com",
    messagingSenderId: "76734151243",
    appId: "1:76734151243:web:82c1b3ba873ee250566bce",
    measurementId: "G-3LZYZ24086",
    // databaseURL: "https://console.firebase.google.com/project/deviants-97246/database/deviants-97246-default-rtdb/data/~2F"
  };

const dbApp = initializeApp(firebaseConfig);
module.exports = dbApp
   