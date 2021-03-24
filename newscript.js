const out = document.querySelector('.output')
const numbers = document.querySelectorAll('.number')
const clear = document.querySelector('#clear')
const equal = document.querySelector('#equals')
const operators = document.querySelectorAll('.operator')


let result = '';
let input= [];
let equalPushed;




function logNumber(e) {
    
    out.innerHTML= e.target.textContent
    console.log(e.currentTarget)

    while(result === '') {
        input.push(e.currentTarget.innerText)
        console.log(input)
        out.innerHTML= input.join('')
        
        if(equalPushed === true) {
            result = input
            console.log(result)
        }

    return result

    }
   
}


function handleEqual(e) {
    console.log(e.currentTarget)
    equalPushed = true
    doMath();
}

function doMath() {
    console.log(input)
    result = input.join('')
    let output = eval(result)
    out.innerHTML = output
    console.log(output)
    
    return output

}




function clearMath(e) {
    console.log(e.target)
    location.reload()
}




// event listeners
numbers.forEach(number => number.addEventListener('click', logNumber))
operators.forEach(operator => operator.addEventListener('click', logNumber))
clear.addEventListener('click',clearMath)
equal.addEventListener('click',handleEqual)
