// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqfT3HCsY3neDQWC3gLyg7JC2z5XFk8Zw",
  authDomain: "calculatorgame-a4c2b.firebaseapp.com",
  databaseURL: "https://calculatorgame-a4c2b-default-rtdb.firebaseio.com",
  projectId: "calculatorgame-a4c2b",
  storageBucket: "calculatorgame-a4c2b.appspot.com",
  messagingSenderId: "787445332175",
  appId: "1:787445332175:web:28ddc623b57248d5de5fba",
  measurementId: "G-510CPS41MD"
};

// Initialize Firebase ----- following tutorial by Vetrivel Ravi https://www.youtube.com/watch?v=RAWHXRTKTHw
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);

//reference your database
var calculatorLevelDB = firebase.database().ref('CalculatorGame');
