
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxCJ1Tk6mNYEXeUKo1_D6Y9CDroF5b-jY",
  authDomain: "fireblog-b913f.firebaseapp.com",
  projectId: "fireblog-b913f",
  storageBucket: "fireblog-b913f.appspot.com",
  messagingSenderId: "82076292957",
  appId: "1:82076292957:web:8927dd5f416ef47603bab4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();