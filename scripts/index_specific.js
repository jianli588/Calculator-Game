var move = [];
var startingNum;
var targetNum;
var totalMove;
var currentMove = 0;
var computerMove = false;

const topLeftButton = document.getElementById("top_left_button");
const topButton = document.getElementById("top_button");
const topRightButton = document.getElementById("top_right_button");
const leftButton = document.getElementById("left_button");
const centerButton = document.getElementById("center_button");
const rightButton = document.getElementById("right_button");
const bottomButton = document.getElementById("bottom_button");
const levelKeyScreen = document.getElementById("level_seed_number");

const calculatorScreen = document.getElementById("calculator_screen");
const targetNumberScreen = document.getElementById("target_number");
const StepLeftCounter = document.getElementById("steps_left_counter");
const hintButton = document.getElementById("hint_button");

const messageModal = document.getElementById("message_modal");
const indexModalText = document.getElementById("index_modal_text");
const indexModalTitle = document.getElementById("index_modal_title");
const indexModalButton = document.getElementById("index_modal_button");

function setLevelData(levelData, key){
    topLeftButton.textContent = levelData.buttonOne;
    topButton.textContent = levelData.buttonTwo;
    topRightButton.textContent = levelData.buttonThree;
    leftButton.textContent = levelData.buttonFour;
    centerButton.textContent = levelData.buttonfive;
    rightButton.textContent = levelData.buttonSix;
    bottomButton.textContent = levelData.buttonSeven;
    levelKeyScreen.textContent = key.trim();

    startingNum = levelData.startingNum;
    calculatorScreen.textContent = startingNum;
    
    targetNum = levelData.targetNum;
    targetNumberScreen.textContent = targetNum;

    totalMove = levelData.numberMove;
    StepLeftCounter.textContent = totalMove;
    

    move = levelData.moves.split("XXXX");
}

function after_calculation(command){

    StepLeftCounter.textContent = parseInt(StepLeftCounter.textContent) - 1;

    if (calculatorScreen.textContent === targetNum){
        //You won Modal pop up
        indexModalTitle.textContent = "Congratulations";
        indexModalText.textContent = "You Won!!! You will load a new level by clicking the close button"
        messageModal.setAttribute("style", "display: block");


    }

    else if(StepLeftCounter.textContent === "0"){
        indexModalTitle.textContent = "you lose!";
        indexModalText.textContent = "You can retry the level by clicking the close button"
        messageModal.setAttribute("style", "display: block");
    }

    else if(!computerMove){
        if(!hintButton.classList.contains("disabled")){
            hintButton.classList.add("disabled");
        }
    }


}

function loadNextLevel(){
    messageModal.setAttribute("style", "display: none");
    loadRandom();
}

function retryLevel(){
    messageModal.setAttribute("style", "display: none");
    reset();
}

function hint(){
    computerMove = true;
    calculate(move[currentMove]);
    currentMove += 1;
}

function loadNewLevel(){
    loadLevel(document.getElementById("level_key_input").value);
}

function reset(){
    StepLeftCounter.textContent = totalMove;

    if(hintButton.classList.contains("disabled")){
        hintButton.classList.remove("disabled");
    }
    calculatorScreen.textContent = startingNum;
    currentMove = 0

}


function add(num){

    const starting_number = calculatorScreen.textContent;
    calculatorScreen.textContent = parseInt(starting_number) + parseInt(num);
}

function subtract(num){
    const starting_number = calculatorScreen.textContent;
    calculatorScreen.textContent = parseInt(starting_number) - parseInt(num);

}

function multiply(num){
    const starting_number = calculatorScreen.textContent;
    calculatorScreen.textContent = parseInt(starting_number) * parseInt(num);

}

function divide(num){
    const starting_number = calculatorScreen.textContent;
    calculatorScreen.textContent = (parseInt(starting_number) - (parseInt(starting_number) % parseInt(num))) / parseInt(num);
}

function reverse(){
    const starting_number = calculatorScreen.textContent;
    calculatorScreen.textContent = starting_number.split("").reverse().join("");;
}