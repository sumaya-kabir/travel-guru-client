// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeAKGIxFKkwUmgEAeHXtsuFiNw8s-lnK4",
  authDomain: "travel-guru-87bac.firebaseapp.com",
  projectId: "travel-guru-87bac",
  storageBucket: "travel-guru-87bac.appspot.com",
  messagingSenderId: "207017192921",
  appId: "1:207017192921:web:806adc6ba9f3275e0f3dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;