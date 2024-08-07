// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCjasZHrMXmkQjijV6n3E5h6njsG430iIc',
  authDomain: 'netflixgpt-5bc38.firebaseapp.com',
  projectId: 'netflixgpt-5bc38',
  storageBucket: 'netflixgpt-5bc38.appspot.com',
  messagingSenderId: '414914292924',
  appId: '1:414914292924:web:f2d41476e35dde817f34b9',
  measurementId: 'G-Y1P2YBNXFP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
