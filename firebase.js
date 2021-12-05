import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD4LyX3vgaPRAHD1u-m-JlZiWNrvPQBZyo",
    authDomain: "react-text-editor-f5494.firebaseapp.com",
    projectId: "react-text-editor-f5494",
    storageBucket: "react-text-editor-f5494.appspot.com",
    messagingSenderId: "231020165933",
    appId: "1:231020165933:web:3c63704ba2ec9b06c931a4"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
