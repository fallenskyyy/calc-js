/*
const sum = function(array){
    return array.reduce((total, current) => total + current, 0);
}

const subtract = function(array){
    let result = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] === "undefined"){
            break
        }
        result -= array[i]
    }
    return result
}

const multiply = function (array) {
    return array.reduce((product, current) => product * current)
};

const divide = function(array){
    let result = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] === "undefined"){
            break
        }
        result /= array[i]
    }
    return (Math.round(result * 100) / 100).toFixed(2)
}
*/
//let num1 = parseInt(prompt("Enter first number"))
//let num2 = parseInt(prompt("Enter second number"))
//let oper = prompt("Enter action")
const btn = document.querySelectorAll("#pad_btn")
const btnAct = document.querySelectorAll("#pad_btn_act")
const btnOp = document.querySelector("pad_btn_op")
const result = document.querySelector("#res")
let num1 = ""
let num2 = ""

const add = function(a, b){
    return a + b
}

const sub = function(a, b){
    return a - b
}

const div = function(a, b){
    return a / b
}

const multiply = function(a, b){
    return a * b
}

const operate = function(s, a, b){
    switch (s) {
        case '+':

            console.log(add(a, b))
            break;

        case '-':

            console.log(sub(a, b))
            break;

        case '*':

            console.log(multiply(a, b))
            break;
    
        case '/':

            console.log(div(a, b))
            break;
    }
}

btn.forEach(element => {
    element.addEventListener("click", () =>{
        console.log(element)
        if(element.textContent === "C"){
            result.textContent = ""
            num1 = ""
            num2 = ""
            btnAct.forEach(element =>{
                element.removeAttribute('disabled')
            })
        }
        else{
            result.textContent += element.textContent 
            num1 += element.textContent
            console.log(num1)
        }   
    })
});

btnAct.forEach(element => {
    element.addEventListener("click", () =>{
        result.textContent += element.textContent
        btnAct.forEach(element =>{
            element.setAttribute('disabled', '')
            
        })
    })
})
//operate(oper, num1, num2)