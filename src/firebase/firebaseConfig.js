import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC09T_SX_PHRrb4JKjHeWyeh5mCtm_URR4",
  authDomain: "my-kitchen-ccd56.firebaseapp.com",
  projectId: "my-kitchen-ccd56",
  storageBucket: "my-kitchen-ccd56.appspot.com",
  messagingSenderId: "584157929930",
  appId: "1:584157929930:web:bbd44e2b39754b7e792f33"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)

export { auth, googleProvider }