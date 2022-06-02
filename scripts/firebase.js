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

document.getElementById(save_new_level).addEventListener("click", save_level);

function save_level(){
  var level_number = getElementVal(level_seed_number);
  var target_number = getElementVal(target_number);
  const button = [];
  button[0] = getElementalVar(top_left_button);
  button[1] = getElementalVar(top_button);
  button[2] = getElementalVar(top_right_button);
  button[3] = getElementalVar(left_button);
  button[4] = getElementalVar(center_button);
  button[5] = getElementalVar(right_button);
  button[6] = getElementalVar(bottom_button);
}

const getElementVal = (id) => {
  return document.getElementById(id);
}