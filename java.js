let display = document.getElementById('display');

function onAppend(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
       display.value = 'ERROR'
    }
}
    
function clearDisplay(){
    display.value = ''
}
function percent(){
    display.value = display.value / 100 
}