const display=document.getElementById("display");

function append(input){
    if(display.value==""){
        if(input=='%'||input=='*'||input=='/'||input=='+'||input=='-'){
            display.value="";
        }
        else{
            display.value+=input;
        }
    }
    else{
        display.value+=input;

    }
    

}

function clearDisplay(){
    display.value="";

}


function ClearOne(){
    display.value=display.value.toString().slice(0,-1);
    

}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error!!!";
    }

}

