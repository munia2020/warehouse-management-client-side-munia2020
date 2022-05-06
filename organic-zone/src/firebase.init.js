// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlboMD-WL4-sWvkm_Rzoizmol_DhjlXcI",
  authDomain: "organic-zone-36825.firebaseapp.com",
  projectId: "organic-zone-36825",
  storageBucket: "organic-zone-36825.appspot.com",
  messagingSenderId: "549477012717",
  appId: "1:549477012717:web:e982393185cb3b6c0768e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;