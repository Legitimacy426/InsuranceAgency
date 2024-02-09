// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3JO-byy8k4WV1pACGeYMkQ5_LrsLAJdQ",
  authDomain: "insuranceagency-d522b.firebaseapp.com",
  projectId: "insuranceagency-d522b",
  storageBucket: "insuranceagency-d522b.appspot.com",
  messagingSenderId: "596273253341",
  appId: "1:596273253341:web:ffc858d5b40b757e3f0434"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()