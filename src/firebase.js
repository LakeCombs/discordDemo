import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC6QE3HkfbhHnMQ5r9MVf_ZyAFSG7VEhkM",
  authDomain: "racoon-6aded.firebaseapp.com",
  projectId: "racoon-6aded",
  storageBucket: "racoon-6aded.appspot.com",
  messagingSenderId: "563767548087",
  appId: "1:563767548087:web:34624bcf4d3699f5f75532",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
