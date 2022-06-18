
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZLKlMZcjzC4EBVinqLItU7mA0n_vS5_E",
  authDomain: "nextflix-clone-60bad.firebaseapp.com",
  projectId: "nextflix-clone-60bad",
  storageBucket: "nextflix-clone-60bad.appspot.com",
  messagingSenderId: "873393396317",
  appId: "1:873393396317:web:cd46d3a7801b48c7f14bb4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }