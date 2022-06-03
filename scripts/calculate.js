function calculate(button){

   var command = button.textContent;
   var number = command.replace( /^\D+/g, ''); //code from https://stackoverflow.com/a/10003709/18174704
    if (command=== "reverse"){
        reverse();
    }
    else if(command.includes("+")){
        add(number);
    }
    else if(command.includes("-")){
        subtract(number);
    }
    else if(command.includes("*")){
        multiply(number);
    }
    else if(command.includes("/")){
        divide(number);
    }
}

function add(num){

    const starting_number = document.getElementById("calculator_number").value;
    document.getElementById("calculator_number").value = parseInt(starting_number) + parseInt(num);
}

function subtract(num){
    const starting_number = document.getElementById("calculator_number").value;
    document.getElementById("calculator_number").value = parseInt(starting_number) - parseInt(num);

}

function multiply(num){
    const starting_number = document.getElementById("calculator_number").value;
    document.getElementById("calculator_number").value = parseInt(starting_number) * parseInt(num);

}

function divide(num){
    const starting_number = document.getElementById("calculator_number").value;
    document.getElementById("calculator_number").value = (parseInt(starting_number) - (parseInt(starting_number) % parseInt(num))) / parseInt(num);
}

function reverse(){
    const starting_number = document.getElementById("calculator_number").value;
    document.getElementById("calculator_number").value = starting_number.split("").reverse().join("");;
}