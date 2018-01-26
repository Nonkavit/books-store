import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAHOzopAIR41fUkvLPk18vKGhfMzdY6RHw",
    authDomain: "bookstore-cde2d.firebaseapp.com",
    databaseURL: "https://bookstore-cde2d.firebaseio.com",
    projectId: "bookstore-cde2d",
    storageBucket: "bookstore-cde2d.appspot.com",
    messagingSenderId: "1036605852958"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db ;