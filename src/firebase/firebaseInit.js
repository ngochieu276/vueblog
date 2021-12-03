// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxCJ1Tk6mNYEXeUKo1_D6Y9CDroF5b-jY",
  authDomain: "fireblog-b913f.firebaseapp.com",
  projectId: "fireblog-b913f",
  storageBucket: "fireblog-b913f.appspot.com",
  messagingSenderId: "82076292957",
  appId: "1:82076292957:web:8927dd5f416ef47603bab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default app.firestore()