function calculate(command){


    console.log(command);
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
    else{
        console.log("error");
        return;
    }

    after_calculation(command);
}

