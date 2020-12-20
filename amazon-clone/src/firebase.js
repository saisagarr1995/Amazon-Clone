import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBm4hnaftYfDri_o2a8SEMcHQL31wcfai4",
    authDomain: "clone-892f0.firebaseapp.com",
    projectId: "clone-892f0",
    storageBucket: "clone-892f0.appspot.com",
    messagingSenderId: "451449113929",
    appId: "1:451449113929:web:e9dcb760428e0f14519e98",
    measurementId: "G-E415BJMHNC"

});

const auth = firebase.auth();

export { auth }