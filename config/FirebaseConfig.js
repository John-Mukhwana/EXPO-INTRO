
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "react-learning-bf82e.firebaseapp.com",
  projectId: "react-learning-bf82e",
  storageBucket: "react-learning-bf82e.appspot.com",
  messagingSenderId: "353855374216",
  appId: "1:353855374216:web:e8731fc467f1fd47c2f03d",
  measurementId: "G-E8W8RT1QV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore(app);