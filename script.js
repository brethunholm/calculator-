const output = document.querySelector('.output')
const numbers = document.querySelectorAll('.number')
const clear = document.querySelector('#clear')
const equal = document.querySelector('#equals')
const operators = document.querySelectorAll('.operator')

let num1;
let num2;
let operatorValue = '';
let result;

function logNumber(e) {
    
    output.innerHTML= e.target.textContent
   
    if(operatorValue === '') {
    num1 = e.target.innerText
    console.log(num1)
    
   } else if(operatorValue === 'minus' || operatorValue === 'plus'|| operatorValue === 'times' || operatorValue === 'divide') {
       num2 = e.target.innerText
       console.log(num2)
    
   }
   
}



function logOperator(e) {
operatorValue = e.currentTarget.dataset.field
console.log(operatorValue)
output.innerHTML = operatorValue
return operatorValue
}





function doMath() {
    let result;
    
    if(operatorValue === 'minus'){
        result = parseInt(num1) - parseInt(num2)
        console.log(result)
    } else if(operatorValue === 'plus') {
        result = parseInt(num1) + parseInt(num2)
        console.log(result)
    } else if(operatorValue === 'times') {
        result = parseInt(num1) * parseInt(num2)
        console.log(result)
    } else if(operatorValue === 'divide') {
        result = parseInt(num1) / parseInt(num2)
        console.log(result)
    }
    output.innerHTML = result
   return result
   
}

function clearMath(e) {
    console.log(e.target)
    location.reload()
}


function handleEqual() {
    doMath()
}


// event listeners
numbers.forEach(number => number.addEventListener('click', logNumber))
operators.forEach(operator => operator.addEventListener('click', logOperator))
clear.addEventListener('click',clearMath)
equal.addEventListener('click',handleEqual)





