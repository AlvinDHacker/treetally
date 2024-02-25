// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVzf0uALpMhKijuBn_pZKJTOAmupPnEf0",
  authDomain: "tree-tally.firebaseapp.com",
  projectId: "tree-tally",
  storageBucket: "tree-tally.appspot.com",
  messagingSenderId: "319226340488",
  appId: "1:319226340488:web:c9222761a5fe1cfb27ab3d",
  measurementId: "G-W5QEZBMRKE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);