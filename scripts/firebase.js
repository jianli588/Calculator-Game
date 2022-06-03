// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";
import { getAnalytics } from "../node_modules/firebase/analytics";
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
  appId: "1:787445332175:web:65e344ab6a2d4633de5fba",
  measurementId: "G-Q0QCRLZCW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function createAndSave(){
  console.log("123");
}

function copyLevelSeed() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}