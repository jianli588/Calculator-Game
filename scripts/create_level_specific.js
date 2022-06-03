var move = [];
const num_pad_button = [document.getElementById("top_left_button"),
document.getElementById("top_button"),
document.getElementById("top_right_button"),
document.getElementById("left_button"),
document.getElementById("center_button"),
document.getElementById("right_button"),
document.getElementById("bottom_button")];

var modeDelete = null;


function after_calculation(command){
    move.push(command);
    change_tally();
}

function change_tally(){
    document.getElementById("steps_total_counter").innerHTML = move.length;
    update_create_button();
}

function update_create_button(){

    
    if(move.length == 0 && !document.getElementById("save_new_level").classList.contains("disabled")){
        document.getElementById("save_new_level").classList.add("disabled");
    }
    else if(move.length != 0){
        document.getElementById("save_new_level").classList.remove("disabled");
    }
    
    
}

function revert(){
    move.pop();
    recalculate();
}

function reset(){
    move = [];
    recalculate();
}

function recalculate(){
    document.getElementById("calculator_number").value = document.getElementById("starting_number").value;


    if (move.length != 0){
        var value = document.getElementById("starting_number").value;
        for (let i = 0; i<move.length; i++){
            calculate(move[i]);
            move.pop();
            console.log(move);
        }

    }
    change_tally();
}

function changeStarting(num){
    move = [];
    change_tally();
    setEqual(num);
}

function setEqual(num){

    //we are checking if the string matches with a number, not using type="number" in input, because type="number" does not allow negative
    //TODO: do this with regex 
    var temp_num = num.split("");
    if(temp_num.length == 1){
        if(!"-0123456789".includes(temp_num.pop())){
            num = temp_num.join("");
        }
        else{    
            modeDelete = null;
            setMode();
        }
    }

    else{ 
        if(!"0123456789".includes(temp_num.pop())){
            num = temp_num.join("");
        }
    }
    
    document.getElementById("calculator_number").value = num;
    document.getElementById("starting_number").value = num;

  
    
}

function addButton(button_command){
    //to avoid duplicates
    for(let i = 0; i<num_pad_button.length; i++){
        if(num_pad_button[i].textContent === button_command){
            return;
        }

    }

    for(let i = 0; i<num_pad_button.length; i++){
        if(num_pad_button[i].textContent === ''){
            num_pad_button[i].textContent = button_command;
            break;
        }
    }
}

function setMode(){
    console.log("12345678");
    console.log(modeDelete);
    if (modeDelete == false){
        for(let i = 0; i<num_pad_button.length; i++){
            num_pad_button[i].setAttribute( "onClick", "javascript: deleteButton(this);" );
        }
        
        modeDelete = true;
    }
    
    else{
        for(let i = 0; i<num_pad_button.length; i++){
            num_pad_button[i].setAttribute( "onClick", "javascript: calculate(this.textContent);" );
        }
        modeDelete = false;
    }
}

function deleteButton(button){
    const temp_text = button.textContent;

    for (let i = move.length-1; i>=0; i--){
        console.log(move);
        if (move[i] === temp_text){
            move.splice(i, 1);
            
        }
        
    }

    console.log(move);
    recalculate();

    button.textContent = '';
    
}