// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWtBMw_-OdnbthdhpAieDqk9fwPnnqvS4",
  authDomain: "portfolio-1e882.firebaseapp.com",
  projectId: "portfolio-1e882",
  storageBucket: "portfolio-1e882.appspot.com",
  messagingSenderId: "501799132188",
  appId: "1:501799132188:web:339f3da5025b5382a193d9",
  measurementId: "G-JC9BRE5FCL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
