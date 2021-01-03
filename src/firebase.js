import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpk7SXzeZw8IhTKfWgh8P_KSOsVNTAKgw",
  authDomain: "linkedin-clone-2c31d.firebaseapp.com",
  projectId: "linkedin-clone-2c31d",
  storageBucket: "linkedin-clone-2c31d.appspot.com",
  messagingSenderId: "514719066720",
  appId: "1:514719066720:web:76f5791651db8a7640f105",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
