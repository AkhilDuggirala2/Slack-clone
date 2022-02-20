import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCw4O9kxCbkMXuQ3vi3AwAIqVTk5f8dHGQ",
  authDomain: "slack-clone-1a685.firebaseapp.com",
  projectId: "slack-clone-1a685",
  storageBucket: "slack-clone-1a685.appspot.com",
  messagingSenderId: "1046483538368",
  appId: "1:1046483538368:web:d70a00ac3c6d0cd443f825",
  measurementId: "G-JN1DVYCKPB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
