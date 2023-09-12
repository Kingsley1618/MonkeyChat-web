
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyARiHOSnH9qoDUOHpkhfD5odqHcqcYLg_8",
    authDomain: "monkeychat-75590.firebaseapp.com",
    projectId: "monkeychat-75590",
    storageBucket: "monkeychat-75590.appspot.com",
    messagingSenderId: "457421992069",
    appId: "1:457421992069:web:51ed636e2a158bf56bb9ec"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
  export const db = firebaseApp.firestore()
  export const storage = getStorage(firebaseApp)
  export const auth = firebaseApp.auth()