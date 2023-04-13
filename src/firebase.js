// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBA0BscklYBcdZfKagxrY9ItPmNvMWk6iU",
  authDomain: "experiment001-370c8.firebaseapp.com",
  projectId: "experiment001-370c8",
  storageBucket: "experiment001-370c8.appspot.com",
  messagingSenderId: "749214927055",
  appId: "1:749214927055:web:687aab8866e8adf164cfba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage, db };
