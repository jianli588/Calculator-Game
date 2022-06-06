// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getDatabase, ref, child, push, update, get, set, query, orderByChild, startAt, endAt, onValue} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
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
  appId: "1:787445332175:web:c4daa9abe37f07bcde5fba",
  measurementId: "G-LY8381L5J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

var numberOfValues = 0;
var levelData;


function createAndSave(){

  get(child(ref(database), "/count/")).then((snapshot) => {
    if (snapshot.exists()) {
      numberOfValues = snapshot.val().numberOfValue + 1;
  } else {
    console.log("No data available");
    return;
  }
  }).catch((error) => {
  console.error(error);
  return;
}).then(() => {
  set(ref(database, '/count/'), {
  numberOfValue: numberOfValues
  })
  .then(() => {
  var button_text_one = num_pad_button[0].textContent;
  var button_text_two = num_pad_button[1].textContent;
  var button_text_three = num_pad_button[2].textContent;
  var button_text_four = num_pad_button[3].textContent;
  var button_text_five = num_pad_button[4].textContent;
  var button_text_six = num_pad_button[5].textContent;
  var button_text_seven = num_pad_button[6].textContent;
  var number_of_move = move.length;
  var moves = move.join("XXXX");
  var target_number = document.getElementById("calculator_number").value;
  var starting_number = document.getElementById("starting_number").value;

  const postData = {
    buttonOne: button_text_one,
    buttonTwo: button_text_two,
    buttonThree: button_text_three,
    buttonFour: button_text_four,
    buttonFive: button_text_five,
    buttonSix: button_text_six,
    buttonSeven: button_text_seven,
    numberMove: number_of_move,
    moves: moves,
    targetNum: target_number,
    startingNum: starting_number,
    number: numberOfValues
  };

  const newPostKey = push(child(ref(database), 'posts')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/levels/' + newPostKey] = postData;

  document.getElementById("created_modal_page_level_seed").value = newPostKey;

  return update(ref(database), updates);
  })
  .catch((error) => {
  console.log(error);
  })
});
}

function loadRandom(){
  get(child(ref(database), "/levels/")).then((snapshot) => {
    if (snapshot.exists()) {
      levelData = snapshot.val();
      
  } else {

    return;
  }
  }).catch((error) => {
  console.error(error);
  return;

}).then(() =>{
  var levelKeys = Object.keys(levelData);

  var levelNum = Math.floor(Math.random()*levelKeys.length);
  loadLevel(levelKeys[levelNum])

});
}


function loadLevel(key){
  get(child(ref(database), "/levels/" + key +"/")).then((snapshot) => {
    if (snapshot.exists()) {
      levelData = snapshot.val();
  } else {
    alert("the level seed: " + key + " is incorrect!!:");
    return;
  }
  }).catch((error) => {
  console.error(error);
  return;
}).then(() =>{
  setLevelData(levelData, key);
});
}




window.createAndSave = createAndSave;
window.loadRandom = loadRandom;
window.loadLevel = loadLevel;
