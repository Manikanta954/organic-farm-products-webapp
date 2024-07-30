import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIwnQTLqZ5FBEIH8AFgPuuhvZSuYp_YME",
  authDomain: "organic-farm-e5915.firebaseapp.com",
  projectId: "organic-farm-e5915",
  storageBucket: "organic-farm-e5915.appspot.com",
  messagingSenderId: "822900521464",
  appId: "1:822900521464:web:a588a13f436ecd0c8bfe0d",
  measurementId: "G-3WDWZHW31C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, signInWithEmailAndPassword,db };
