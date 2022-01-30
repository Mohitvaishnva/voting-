import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
     apiKey: "AIzaSyCsaDuTmrHXbP4GMR4ly95xMNk1YvS-ogY",
  authDomain: "voting-app-8f54e.firebaseapp.com",
  databaseURL: "https://voting-app-8f54e-default-rtdb.firebaseio.com",
  projectId: "voting-app-8f54e",
  storageBucket: "voting-app-8f54e.appspot.com",
  messagingSenderId: "356861513782",
  appId: "1:356861513782:web:89c20b19d8b58496ebc897"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();