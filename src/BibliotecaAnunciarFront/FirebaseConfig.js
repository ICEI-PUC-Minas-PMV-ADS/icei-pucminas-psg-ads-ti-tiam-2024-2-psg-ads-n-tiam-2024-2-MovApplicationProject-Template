const { initializeApp } = require ( "firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth } = require ("firebase/auth");



const firebaseConfig = {
  apiKey: "AIzaSyBNmIRKGyJM_31APHQBy582ABjKRppp3xk",
  authDomain: "bibliotecaanunciar-7655f.firebaseapp.com",
  projectId: "bibliotecaanunciar-7655f",
  storageBucket: "bibliotecaanunciar-7655f.appspot.com",
  messagingSenderId: "177451581345",
  appId: "1:177451581345:web:46e2d45ffb55b5c8d815e0",
  measurementId: "G-THWQZKD4E0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


module.exports = { app, db, auth };