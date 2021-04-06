const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const displayValElement = document.getElementById("displaynumbers");
const btnNumbers = document.getElementsByClassName("number");
const btnOperators = document.getElementsByClassName("operator");
const numSquare = document.getElementById("square");

let displayVal = '0';
let pendingVal;
let evalStringArray = [];



//displayValElement.textContent = displayVal;
const holdDisplay = (e) => {
    let contentDisplay = e.target.innerText;
    if(displayVal === '0') {
        displayVal = '';
    }
    //displayVal.innerText = contentDisplay;
    displayVal += contentDisplay;
    displayValElement.innerText = displayVal;

}

const operationResult = (e) => {
    
    let operatorfunc = e.target.innerText;
    
    switch(operatorfunc) {
        case '+': 
            pendingVal = displayVal;
             displayVal = '0';
            displayValElement.innerText  = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+')
            break;
        case '-': 
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText  = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-')
            break;
        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText  = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*')
            break;
        case '÷': 
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText  = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/')
            break;
        case '%': 
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText  = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('%')
            break;
        case '^': 
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText  = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('**')
            break;
        case '=':
            evalStringArray.push(displayVal);
            let result = eval(evalStringArray.join(' '));
            displayVal = result + '';
            displayValElement.innerText = displayVal; 
            evalStringArray = [];
            break;
        default:
            break;
    }
}
clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerText = displayVal;
}
decimal.onclick = function(){
    if(!displayVal.includes('.')) {
        displayValElement.innerText = displayVal;
    }
    displayValElement.innerText = displayVal;
 }


for(let i = 0; i < btnNumbers.length; i++) {

    btnNumbers[i].addEventListener('click', holdDisplay) 
}

for(let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', operationResult);       
}
